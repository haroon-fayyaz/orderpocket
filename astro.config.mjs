// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://<user>.github.io/<repo>/
// Set CUSTOM_DOMAIN=true in CI when GitHub Pages serves a custom domain at the root.
const useCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

const [repoOwner, repoName] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];

const githubUser = process.env.GITHUB_PAGES_USER ?? repoOwner ?? 'haroon-fayyaz';
const githubRepo = process.env.GITHUB_PAGES_REPO ?? repoName ?? 'orderpocket';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: useCustomDomain
    ? (process.env.SITE_URL ?? 'https://orderpocket.app')
    : `https://${githubUser}.github.io`,
  base: useCustomDomain ? '/' : `/${githubRepo}`,
  compressHTML: true,
});
