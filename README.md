# OrderPocket marketing site (Astro)

Static site for the OrderPocket Android app. Deployed via **GitHub Actions** to **GitHub Pages**.

## Live URL (default)

Monorepo project site:

**https://haroonfayyaz.github.io/orderpocket/**

(Privacy policy URL for Play Console: `…/orderpocket/privacy-policy/`)

## Custom domain later

1. In GitHub → repo **Settings → Pages**, set custom domain (e.g. `orderpocket.app`).
2. In `.github/workflows/deploy-landing.yml`, uncomment:

   ```yaml
   CUSTOM_DOMAIN: 'true'
   SITE_URL: 'https://orderpocket.app'
   ```

3. Push; rebuild uses `base: '/'` and the custom `site` URL.

## Pages

- `/` — Home
- `/support` — FAQs (no contact form)
- `/privacy-policy` — Privacy policy

## Local development

```bash
cd landing-page
npm install
npm run dev
```

Preview the same path layout as GitHub Pages:

```bash
GITHUB_PAGES_USER=haroonfayyaz GITHUB_PAGES_REPO=orderpocket npm run build
npm run preview
```

## GitHub Pages setup (one time)

1. Repo **Settings → Pages → Build and deployment → Source:** **GitHub Actions**.
2. Push to `main` / `master` (or run **Deploy landing site** workflow manually).
3. Confirm the workflow completed under **Actions**.

Workflow file: `.github/workflows/deploy-landing.yml` (repo root). It only rebuilds when `landing-page/**` changes.

## Commands

```bash
npm run dev
npm run build
npm run preview
```