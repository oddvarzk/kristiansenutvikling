// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host") || "";

  // 1️⃣ Redirect www.* → apex
  if (host.startsWith("www.")) {
    url.host = host.replace(/^www\./, "");
    return NextResponse.redirect(url, 301);
  }

  // 2️⃣ Redirect any /index.html or /index.php → /
  if (url.pathname === "/index.html" || url.pathname === "/index.php") {
    url.pathname = "/";
    return NextResponse.redirect(url, 301);
  }

  // Otherwise, proceed as normal
  return NextResponse.next();
}

// Apply to all routes
export const config = {
  matcher: ["/:path*"],
};
