import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import starlightLinksValidator from "starlight-links-validator";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import starlightImageZoom from "starlight-image-zoom";
import starlightDocSearch from "@astrojs/starlight-docsearch";

const PREVIEW_SITE = process.env.PUBLIC_ENV === "preview" ? `https://aoijs.github.io/website/pr-preview/pr-${process.env?.PUBLIC_PR_NUMBER}` : "https://aoi.js.org"

export default defineConfig({
  site: PREVIEW_SITE,
  devToolbar: {
    enabled: false,
  },
  integrations: [
    starlight({
      head: [{ tag: "script", attrs: { src: "/preserve-sidebar.js" } }],
      lastUpdated: true,
      plugins: [
        starlightLinksValidator(),
        starlightImageZoom(),
        starlightDocSearch({
          appId: "7NDV3UYBW5",
          indexName: "aoi-js",
          apiKey: "775caf3aef9ecccc83a7b3948ac1b92f",
          placeholder: "Search something..",
          maxResultsPerGroup: 5,
        }),
      ],
      expressiveCode: {
        plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
        defaultProps: {
          showLineNumbers: false,
          overridesByLang: {
            "js,ts,javascript": {
              showLineNumbers: true,
            },
          },
          wrap: true,
        },
        themes: ["github-dark", "github-light"],
        styleOverrides: {
          borderRadius: "0.2rem",
          codeFontFamily: "'JetBrains Mono', monospace",
        },
      },
      title: "aoi.js",
      favicon: "/favicon.ico",
      logo: {
        src: "./src/images/icon.webp",
      },
      social: {
        github: "https://github.com/AkaruiDevelopment/aoi.js#v6",
        discord: "https://aoi.js.org/invite",
      },
      editLink: {
        baseUrl: "https://github.com/aoijs/website/edit/main/",
      },
      customCss: [
        "./src/styles/custom.css",
        "@fontsource/poppins/400.css",
        "@fontsource/poppins/600.css",
      ],
      components: {
        //Search: "./src/components/Page/Search.astro",
        Head: "./src/components/Page/Head.astro",
        PageTitle: "./src/components/Page/PageTitle.astro",
        PageSidebar: "./src/components/Page/PageSidebar.astro",
      },
      pagefind: false,
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "aoi.js | Akarui Development",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "theme-color",
            content: "#89CFF0",
          },
        },
      ],
      sidebar: [
        {
          label: "Get Started",
          link: "/guides/setup",
        },
        {
          label: "Guides",
          items: [
            {
              label: "Client",
              autogenerate: {
                directory: "guides/client",
              },
              collapsed: true,
            },
            {
              label: "Application Commands",
              autogenerate: {
                directory: "guides/application",
              },
              collapsed: true,
            },
            {
              label: "Others",
              items: [
                {
                  label: "Character Escaping",
                  link: "/guides/other/character-escaping",
                },
                { label: "Discord Events", link: "/guides/other/events" },
                {
                  label: "Message Formatting",
                  link: "/guides/other/message-formatting",
                },
                {
                  label: "Parsers",
                  link: "/guides/other/parser",
                },
                {
                  label: "Variables",
                  link: "/guides/other/variables",
                },
                {
                  label: "Customs",
                  items: [
                    {
                      label: "Custom Functions",
                      link: "/guides/other/custom-functions/",
                    },
                    { label: "Custom Events", link: "/guides/custom-events/" },
                  ],
                  collapsed: true,
                },
                {
                  label: "Hosting",
                  items: [
                    {
                      label: "Using Hosting Services",
                      link: "/guides/other/hosting/hosting-service/",
                    },
                    {
                      label: "Using Termux",
                      link: "/guides/other/hosting/termux",
                    },
                  ],
                  collapsed: true,
                },
              ],
              collapsed: true,
            },
          ],
        },
        {
          label: "Extensions",
          items: [
            {
              label: "@akarui",
              autogenerate: {
                directory: "extensions/@akarui",
              },
              collapsed: true,
            },
          ],
        },
        {
          label: "Functions",
          items: [
            {
              label: "Array",
              autogenerate: {
                directory: "functions/array",
              },
              collapsed: true,
            },
            {
              label: "Awaited",
              autogenerate: {
                directory: "functions/awaited",
              },
              collapsed: true,
            },
            {
              label: "Client",
              autogenerate: {
                directory: "functions/client",
              },
              collapsed: true,
            },
            {
              label: "Database/Variable",
              autogenerate: {
                directory: "functions/database",
              },
              collapsed: true,
            },
            {
              label: "Event",
              autogenerate: {
                directory: "functions/event",
              },
              collapsed: true,
            },
            {
              label: "Embed",
              autogenerate: {
                directory: "functions/embed",
              },
              collapsed: true,
            },
            {
              label: "Guild",
              autogenerate: {
                directory: "functions/guild",
              },
              collapsed: true,
            },
            {
              label: "Interaction",
              autogenerate: {
                directory: "functions/interaction",
              },
              collapsed: true,
            },
            {
              label: "Invite",
              badge: "Extension",
              autogenerate: {
                directory: "functions/invite",
              },
              collapsed: true,
            },
            {
              label: "Math",
              autogenerate: {
                directory: "functions/math",
              },
              collapsed: true,
            },
            {
              label: "Message",
              autogenerate: {
                directory: "functions/message",
              },
              collapsed: true,
            },
            {
              label: "Misc",
              autogenerate: {
                directory: "functions/misc",
              },
              collapsed: true,
            },
            {
              label: "Music",
              badge: "Extension",
              autogenerate: {
                directory: "functions/music",
              },
              collapsed: true,
            },
            {
              label: "User",
              autogenerate: {
                directory: "functions/user",
              },
              collapsed: true,
            },
            {
              label: "Util",
              autogenerate: {
                directory: "functions/util",
              },
              collapsed: true,
            },
          ],
          collapsed: true,
        },
      ],
    }),
    react(),
    sitemap(),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            class: "heading-link",
          },
        },
      ],
    ],
  },
});
