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
  themeConfig: {
    image:
      "https://github.com/aoijs/website/blob/main/assets/images/aoijs-banner.png?raw=true",
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/palenight"),
      additionalLanguages: ["php", "powershell", "diff", "typescript"],
    },
    /*  
    i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr'],
    }, 
    */
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
      backgroundColor: "#ffffff",
      textColor: "#000000",
      isCloseable: false,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: `aoi.js`,
      logo: {
        alt: "aoijs logo",
        src: "img/logo.png",
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
          to: "extensions/",
          activeBasePath: "extensions",
          label: "Akarui Extensions",
          position: "left",
        },
        {
          to: "wikis/guidelines",
          activeBasePath: "wikis",
          label: "Community Wikis",
          position: "left",
        },
        //      {
        //        to: 'community/',
        //        activeBasePath: 'community',
        //        label: 'Community',
        //        position: 'left',
        //      },
        // -- Implement comments later in community page
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        /*
        {
          type: 'localeDropdown',
          position: 'right',
        }, 
        */
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
              label: "Akarui Extensions",
              to: "extensions/",
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
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "6.3.0",
          versions: {
            current: {
              label: "7.0.0 (dev)",
              path: "7.0.0",
            },
          },
        },
        gtag: {
          trackingID: "G-BFNTC2Y655",
          anonymizeIP: true,
        },
        blog: {
          path: "forums",
          routeBasePath: "wikis",
          showReadingTime: false,
          blogTitle: "aoi.js Wikis",
          blogDescription: "A community-powered Wiki page will all sort of ideas and codes.",
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
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        sidebarPath: require.resolve("./sidebarCommunity.js"),
        // ... other options
      },
    ],
  ],
};
