/**
 * Returns the localized path for a given route.
 * Prepends /en for English, returns path as-is for Norwegian.
 */
export function getLocalizedPath(path: string, language: string): string {
  if (language === "en") {
    return `/en${path}`;
  }
  return path;
}
