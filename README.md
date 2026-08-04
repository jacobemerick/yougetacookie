# yougetacookie

[yougetacookie.com](https://yougetacookie.com) - you get a cookie.
Unless you already got one today.
Then you'll spoil your dinner.

A flat site: one html file, one stylesheet, a few images.

## Local preview

```
npm install
npm run dev
```
Then open <http://localhost:8787>. This runs the actual Cloudflare Workers runtime locally, so `_headers` (caching, CSP, etc.) apply exactly as they do in production.

To see the "no cookie" state, delete the `hascookie` cookie using dev tools (Application -> Cookies) and reload.
Or just wait a day, the cookie expires in 24h.

## Deploying

Cloudflare Workers (git-integrated "Workers Builds") is wired to this repo's `main` branch.
Deploy command is `npx wrangler versions upload`; `wrangler.jsonc` points it at the repo root as a static assets directory, no Worker script needed.
`package.json` pins the Wrangler version so local dev and deploys stay in sync.
Other branches get their own preview url automatically.

`_headers` carries the caching and security header rules.
