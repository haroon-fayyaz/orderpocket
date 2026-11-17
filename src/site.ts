/** Canonical host comes from `site` in astro.config.mjs (GitHub Pages or custom domain). */

export const appName = 'OrderPocket';

export const appTagline =
  'Turn scattered chat orders into records you own — offline on your Android phone.';

export const playStoreUrl =
  'https://play.google.com/store/apps/details?id=com.tactilelogic.orderpocket';

export const playStorePackage = 'com.tactilelogic.orderpocket';

export const brand = {
  primary: '#A97142',
  primaryLight: '#FFE8D6',
  primaryDark: '#3A2010',
  background: '#FFFBF8',
  surface: '#FFFFFF',
  surfaceMuted: '#F5F5F5',
  text: '#1C1B1F',
  textMuted: '#49454F',
  border: '#E8E8E8',
  iconBg: '#F5EDE6',
} as const;