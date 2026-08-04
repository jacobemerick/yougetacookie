# yougetacookie

[yougetacookie.com](https://yougetacookie.com) - you get a cookie.
Unless you already got one today.
Then you'll spoil your dinner.

A flat site: one html file, one stylesheet, a few images.

## Local preview

Easiest way to load this and see the images.
```
python3 -m http.server 8000
```
Then open <http://localhost:8000>

To see the "no cookie" state, delete the `hascookie` cookie using dev tools (Application -> Cookies) and reload.
Or just wait a day, the cookie expires in 24h.

## Deploying

Cloudflare Pages is wired to this repo's `main` branch.
Build command is empty, output directory is the repo's root.
Other branches get their own preview url automatically.

`_headers` carries the caching rules.
