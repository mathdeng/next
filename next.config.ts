import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  webpack: (config) => {
    config.module.rules.push({
      resolve: {
        alias: {
          'alasql': 'alasql/dist/alasql.min.js'
        },
      }
    });
    return config;
  },
  turbopack: {
    resolveAlias: {
      "alasql": "alasql/dist/alasql.min.js"
    }
  }
};

export default nextConfig;
