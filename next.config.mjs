/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    // Optimiser les imports pour réduire les bundles
    optimizePackageImports: ['lucide-react', 'framer-motion', 'leaflet', 'react-leaflet'],
  },
  // Compression et optimisation
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;


