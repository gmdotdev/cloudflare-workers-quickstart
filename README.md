# Cloudflare Workers Quickstart

This project is a quickstart for using Cloudflare Workers with Hono.

The quickstart includes some defaults for:

- A simple API via [Hono](https://hono.dev)
- Deployments to Cloudflare via [GitHub Actions](.github/workflows)
- Formatting and linting via [Biome](https://biomejs.dev/)

For a more complete using pnpm workspaces and a monorepo with a Next.js site deployed to Cloudflare Pages, check out our [cloudflare-quickstart](https://github.com/gmdotdev/cloudflare-quickstart).

## Getting Started

1. Clone this repository

```bash
  git clone git@github.com:gmdotdev/cloudflare-workers-quickstart.git
```

2. Install dependencies

```bash
  pnpm install
```

3. Start the development server(s)

```bash
  cd apps/api && pnpm dev
  cd apps/web && pnpm dev
```

That's it! You should now have the API and web server running locally.

## Deploying to Cloudflare

1. Create a new GitHub repository for your project.

2. Set up the following GitHub repository secrets:

- [`CLOUDFLARE_ACCOUNT_ID`](https://developers.cloudflare.com/fundamentals/setup/find-account-and-zone-ids/)
- [`CLOUDFLARE_API_TOKEN`](https://developers.cloudflare.com/workers/wrangler/ci-cd/#api-token)

3. Push your repository to GitHub. The GitHub Actions workflow is set to manual trigger by default, so navigate to Actions to run the deploys manually.

### Using Custom Domains

Uncomment the routes snippet in [wrangler.toml](apps/api/wrangler.toml) and add your custom domain.

**Note**: This assumes your domain is already set up in Cloudflare.

## Links

- [Biome](https://biomejs.dev/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Hono](https://hono.dev)
