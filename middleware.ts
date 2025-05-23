// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const { pathname } = url;

  // If someone hits "/index.html" or "/index.php", strip it off
  if (pathname.match(/\/index\.(html|php)$/)) {
    url.pathname = pathname.replace(/index\.(html|php)$/, "");
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// Apply this middleware to every path
export const config = {
  matcher: "/:path*",
};
