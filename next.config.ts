import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  webpack: (config) => {
    config.module.noParse = /alasql\.fs\.js$/;
    config.resolve.fallback = {
      ...config.resolve.fallback,
      'react-native-fs': false,
      'react-native-fetch-blob': false
    };
    return config;
  },
  turbopack: {
    resolveAlias: {
      "alasql": "alasql/dist/alasql.min.js"
    }
  }
};

export default nextConfig;
