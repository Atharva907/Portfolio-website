/** @type {import('next').NextConfig} */
const nextConfig = {
  // 使用标准配置
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './',
    };
    return config;
  },
};

export default nextConfig;
