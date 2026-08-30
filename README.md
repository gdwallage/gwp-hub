# Gary Wallage Master Brand Portal (`gwp-hub`)

High-performance, ultra-fast editorial gateway portal for `garywallage.uk` and `www.garywallage.uk`.

## Architecture
- **Stack**: Ultra-light Alpine Nginx container (~4 MB RAM footprint, 0 database queries).
- **Core Web Vitals**: Built-in HTML5 Speculation Rules API pre-fetching for instant sub-page navigation.
- **Design System**: Strict 10-80-10 editorial rule connecting the 6 photography subdomains.
- **Routing**: Caddy Ingress reverse proxy with Cloudflare TLS and Brotli/Gzip compression.
