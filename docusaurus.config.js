module.exports = {
  title: "aoi.js",
  tagline: "aoi.js documentation",
  url: "https://aoi.js.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
  organizationName: "akaruidevelopment", // Usually your GitHub org/user name.
  projectName: "aoi.js-documentation", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("esbuild-loader"),
      options: {
        loader: "tsx",
        format: isServer ? "cjs" : undefined,
        target: isServer ? "node12" : "es2017",
      },
    }),
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "tr", "ar", "hi", "fr", "uk"], // ru - not enough
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        path: "en",
      },
      es: {
        label: "Español",
        direction: "ltr",
        path: "es",
      },
      tr: {
        label: "Türkçe",
        direction: "ltr",
        path: "tr",
      },
      ar: {
        label: "عربي",
        direction: "rtl",
        path: "ar",
      },
    },
  },
  themeConfig: {
    image:
      "https://github.com/aoijs/website/blob/main/assets/images/aoijs-banner.png?raw=true",
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ["php", "powershell", "diff", "typescript"],
    },
    // Translations later on
    algolia: {
      appId: "7NDV3UYBW5",
      apiKey: "dcc8ae1731cfa8322571b65e9a3e9faf",
      indexName: "aoi-js",
      contextualSearch: true,
    },
    announcementBar: {
      id: "support_us",
      content:
        'Join our <a target="_blank" rel="noopener noreferrer" href="https://aoi.js.org/invite">Discord Server</a> for real-time support!',
      backgroundColor: "#1976d2",
      textColor: "#ffffff",
      isCloseable: false,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: `aoi.js.org`,
      logo: {
        alt: "aoi.js logo",
        src: "img/logo.png",
        width: 33,
        height: 30,
      },
      items: [
        {
          to: "docs/",
          activeBaseRegex: "docs(?!/guides|/extensions|/community)",
          label: "Documentation",
          position: "left",
        },
        {
          to: "docs/guides/setup",
          activeBasePath: "docs/guides",
          label: "Guides",
          position: "left",
        },
        {
          to: "extensions/introduction",
          activeBasePath: "extensions",
          label: "Extensions",
          position: "left",
        },
        {
          to: "wikis/guidelines",
          activeBasePath: "wikis",
          label: "Community Wikis",
          position: "left",
        },
        {
          to: "credits/",
          activeBasePath: "credits",
          label: "Credits",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              type: "html",
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: "https://github.com/AkaruiDevelopment/aoi.js",
              label: "Github",
            },
          ],
        },
        {
          type: "localeDropdown",
          position: "right",
          dropdownItemsAfter: [
            {
              type: "html",
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: "https://crowdin.com/translate/aoijs-documentation/all/",
              label: "Contribute & Translate",
            },
          ],
        },
        {
          to: "https://aoi.js.org/invite",
          label: "Discord Server",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "docs/guides/setup",
            },
            {
              label: "Extensions",
              to: "extensions/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord Server",
              href: "https://aoi.js.org/invite/",
            },
            {
              label: "Github",
              href: "https://github.com/AkaruiDevelopment/aoi.js/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Contributing",
              href: "https://github.com/AkaruiDevelopment/aoi.js-documentation/blob/v6/.github/contributing-example.md/",
            },
            {
              label: "Community Wikis",
              to: "wikis/guidelines",
            },
            {
              label: "Credits",
              to: "credits/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Akarui Development | AoiEngine v7.0.0`,
    },
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "6.4.0",
          versions: {
            current: {
              label: "7.0.0 (dev)",
              path: "7.0.0",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-BFNTC2Y655"
        },
        blog: {
          path: "forums",
          routeBasePath: "wikis",
          showReadingTime: false,
          blogTitle: "aoi.js Wikis",
          blogDescription:
            "A community-powered Wiki page will all sort of ideas and codes.",
          blogSidebarCount: "ALL",
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "extensions",
        path: "extensions",
        routeBasePath: "extensions",
        sidebarPath: require.resolve("./sidebarExtensions.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        sidebarPath: require.resolve("./sidebarCommunity.js"),
      },
    ],
  ],
};
