const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

module.exports = {
  ...withNextra(),
  reactStrictMode: true,
  VERCEL_DEEP_CLONE: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  experimental: {
    esmExternals: false,
  },
};
