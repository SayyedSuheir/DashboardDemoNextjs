/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  }
  // reactCompiler: true, // not needed in Next.js 13
};

module.exports = nextConfig;
