import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/digital-marketing',
        destination: '/digital-marketing-lagos',
        permanent: true,
      },
      {
        source: '/services/digital-marketing',
        destination: '/digital-marketing-lagos',
        permanent: true,
      },
      {
        source: '/website',
        destination: '/web-design-lagos',
        permanent: true,
      },
      {
        source: '/services/web-design-lagos',
        destination: '/web-design-lagos',
        permanent: true,
      },
      {
        source: '/mobile-app',
        destination: '/mobile-app-development',
        permanent: true,
      },
      {
        source: '/mobile-apps',
        destination: '/mobile-app-development',
        permanent: true,
      },
      {
        source: '/services/mobile-app-development',
        destination: '/mobile-app-development',
        permanent: true,
      },
      {
        source: '/services/wordpress-website-design',
        destination: '/services#wordpress',
        permanent: true,
      },
      {
        source: '/services/custom-software-development',
        destination: '/services#custom-software',
        permanent: true,
      },
      {
        source: '/services/ai-automation',
        destination: '/services#ai-automation',
        permanent: true,
      },
      {
        source: '/services/software-integrations',
        destination: '/services#integrations',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
