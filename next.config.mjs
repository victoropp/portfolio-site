/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // For project repository (e.g., username.github.io/portfolio-site)
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-site/' : '',

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;
