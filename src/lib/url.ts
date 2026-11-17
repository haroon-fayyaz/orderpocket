/** Prefix internal paths for GitHub Pages subpath (`base`) or custom domain (`/`). */
export const baseUrl = import.meta.env.BASE_URL;

function normalizedBase(): string {
  return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
}

export function pathTo(route: string): string {
  const base = normalizedBase();
  if (!route || route === '/') {
    return base;
  }
  const slug = route.startsWith('/') ? route.slice(1) : route;
  return `${base}${slug}`;
}

/** Static files from `public/` (favicon, etc.). */
export function publicAsset(file: string): string {
  return `${normalizedBase()}${file.replace(/^\//, '')}`;
}