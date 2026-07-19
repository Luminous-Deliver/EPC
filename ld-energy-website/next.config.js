/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // The @cloudflare/next-on-pages runtime doesn't support Next's built-in
    // image optimizer (it targets Vercel's infra) — /_next/image silently
    // returns the original file with an incorrect Content-Type on every
    // request, regardless of the requested width. Serving the original
    // files directly is strictly better: correct headers, real edge
    // caching, and no wasted resize/reformat work that was never happening.
    unoptimized: true,
  },
}

module.exports = nextConfig
