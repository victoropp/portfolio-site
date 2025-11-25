/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static export for GitHub Pages

  // For project repository (e.g., username.github.io/portfolio)
  // basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',

  // For user/organization repository (e.g., username.github.io)
  // Comment out basePath or set to empty string
  basePath: '',

  // Required for static export
  images: {
    unoptimized: true,  // GitHub Pages doesn't support Next.js Image Optimization
  },

  // Optional: Add trailing slashes to URLs
  trailingSlash: true,
};

export default nextConfig;
