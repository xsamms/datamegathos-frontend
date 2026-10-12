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
        source: '/services/web-design-lagos',
        destination: '/services#web-design',
        permanent: true,
      },
      {
        source: '/services/mobile-app-development',
        destination: '/services#mobile-apps',
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
