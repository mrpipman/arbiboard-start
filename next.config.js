/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // ← NECESSARIO per usare la directory /app/
  },
};

module.exports = nextConfig;
