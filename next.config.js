/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'lqip-modern': require.resolve('lqip-modern'),
      };
    }

    return config;
  },
}

module.exports = {
  ...nextConfig,
  images:{
    domains: ['res.cloudinary.com'],
  }
}

module.exports = {
  sassOptions:{
    includePaths: []
  }
}
