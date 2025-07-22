import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
  webpack: (config, {webpack}) => {
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /(react-native)/
    }));
  
    return config;
  },
  turbopack: {
    resolveAlias: {
      "alasql": "alasql/dist/alasql.min.js"
    }
  }
};

export default nextConfig;
