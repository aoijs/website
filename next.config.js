const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true
});

module.exports = {
  ...withNextra(),
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["localhost", "raw.githubusercontent.com"],
  },
  experimental: {
    esmExternals: false,
  }
};