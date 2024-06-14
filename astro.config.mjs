import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import starlightLinksValidator from "starlight-links-validator";
import starlightImageZoom from "starlight-image-zoom";
import starlightDocSearch from "@astrojs/starlight-docsearch";
import starlightVersions from "starlight-versions";

export default defineConfig({
  site: "https://aoi.js.org",
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
        }),
        /*  starlightVersions({
              versions: [{ slug: '6.8' }],
            }),
        */
      ],
      title: "aoi.js",
      favicon: "/favicon.ico",
      logo: {
        src: "./src/images/icon.webp",
      },
      social: {
        github: "https://github.com/aoijs/aoi.js#v6",
        discord: "https://aoi.js.org/invite",
      },
      editLink: {
        baseUrl: "https://github.com/aoijs/website/edit/main/",
      },
      customCss: ["./src/styles/custom.css", "./src/fonts/font-face.css"],
      components: {
        //Search: "./src/components/Page/Search.astro",
        Head: "./src/components/Page/Head.astro",
        PageTitle: "./src/components/Page/PageTitle.astro",
        PageSidebar: "./src/components/Page/PageSidebar.astro",
        Sidebar: "./src/components/Page/Sidebar.astro",
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
                    {
                      label: "Custom Events",
                      link: "/guides/other/custom-events/",
                    },
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
              label: "@aoijs",
              items: [
                {
                  label: "aoi.music",
                  items: [
                    {
                      label: "Setup",
                      link: "/extensions/aoijs/aoimusic/",
                    },
                    {
                      label: "Events",
                      link: "extensions/aoijs/aoimusic/events",
                    },
                    {
                      label: "Functions",
                      autogenerate: {
                        directory: "extensions/@aoijs/aoi.music/music",
                      },
                      collapsed: true,
                    },
                  ],
                  collapsed: true,
                },
                {
                  label: "aoi.canvas",
                  items: [
                    {
                      label: "Setup",
                      link: "/extensions/aoijs/aoicanvas/",
                    },
                    {
                      label: "Guides",
                      autogenerate: {
                        directory: "extensions/@aoijs/aoi.canvas/guides",
                      },
                      collapsed: true,
                    },
                    {
                      label: "Functions",
                      autogenerate: {
                        directory: "extensions/@aoijs/aoi.canvas/functions",
                      },
                      collapsed: true,
                    },
                  ],
                  collapsed: true,
                },
                {
                  label: "aoi.invite",
                  items: [
                    {
                      label: "Setup",
                      link: "/extensions/aoijs/aoiinvite/",
                    },
                    {
                      label: "Functions",
                      autogenerate: {
                        directory: "extensions/@aoijs/aoi.invite/invite",
                      },
                      collapsed: true,
                    },
                  ],
                  collapsed: true,
                },
              ],
              collapsed: true,
            },
          ],
          collapsed: true,
        },
        {
          label: "Tools",
          items: [
            {
              label: "Application Command Creator",
              link: "/tools/slash",
              collapsed: true,
            },
          ],
        },
        {
          label: "Functions",
          autogenerate: {
            directory: "functions/",
          },
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
