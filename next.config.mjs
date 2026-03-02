/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  // Optimiser les images
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [45, 60, 75, 80, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1366, 1536, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: 'https', hostname: '**.googleusercontent.com' },
    ],
  },

  experimental: {
    optimizeCss: true,
    cssChunking: 'strict',
    // Optimiser les imports pour réduire les bundles
    optimizePackageImports: ['lucide-react', 'framer-motion', 'leaflet', 'react-leaflet', 'react-icons', '@heroicons/react'],
  },

  // Compression et optimisation
  compress: true,
  poweredByHeader: false,

  // Transpilation moderne uniquement (pas de legacy ES5)
  transpilePackages: [],

  // Production optimisations
  productionBrowserSourceMaps: false,

  // Optimiser les headers de cache
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
