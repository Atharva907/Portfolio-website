/** @type {import('next').NextConfig} */
const nextConfig = {
  // 使用标准配置
  turbopack: {
    resolveAlias: {
      '@': './',
    },
  },
};

export default nextConfig;
