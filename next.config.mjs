/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static export for GitHub Pages

  // For project repository (e.g., username.github.io/portfolio-site)
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-site/' : '',

  // Required for static export
  images: {
    unoptimized: true,  // GitHub Pages doesn't support Next.js Image Optimization
  },

  // Optional: Add trailing slashes to URLs
  trailingSlash: true,
};

export default nextConfig;
