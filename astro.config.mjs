import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import starlightLinksValidator from "starlight-links-validator";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aoi.js.org",
  integrations: [
    starlight({
      plugins: [starlightLinksValidator()],
      title: "aoi.js",
      favicon: "/favicon.png",
      logo: {
        src: "/favicon.png",
      },
      social: {
        github: "https://github.com/aoijs/website",
        discord: "https://discord.com/invite/HMUfMXDQsV",
      },
      editLink: {
        baseUrl: "https://github.com/aoijs/website/edit/main/",
      },
      customCss: ["./src/styles/custom.css"],
      components: {
        Search: "./src/components/Search.astro",
        Head: "./src/components/Head.astro", // doesnt do anything, as starlight doesnt support this (yet)
        PageSidebar: './src/components/PageSidebar.astro',
      },
      pagefind: false,
      head: [
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-GMH27HJZGY",
          },
        },
        {
          tag: "script",
          content: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GMH27HJZGY');
      `,
        },
        {
          tag: "script",
          attrs: {
            src: "/custom.js",
            defer: true,
          },
        },
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
            property: "og:image",
            content:
              "https://raw.githubusercontent.com/aoijs/website/master/assets/images/aoijs-banner.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content:
              "https://raw.githubusercontent.com/aoijs/website/master/assets/images/aoijs-banner.png",
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
          label: "Introduction",
          link: "/guides/setup",
        },
        {
          label: "Extensions",
          items: [
            {
              label: "Showcase",
              link: "/extensions/showcase/",
            },
            {
              label: "@akarui",
              items: [
                {
                  label: "aoi.panel",
                  autogenerate: {
                    directory: "extensions/aoi.panel",
                  },
                  collapsed: true,
                },
                {
                  label: "aoi.music",
                  items: [
                    {
                      label: "Getting Started",
                      link: "/extensions/aoimusic/",
                    },
                    {
                      label: "Events",
                      link: "/extensions/aoimusic/events",
                    },
                    {
                      label: "Functions",
                      autogenerate: {
                        directory: "extensions/aoi.music/functions",
                      },
                      collapsed: true,
                    },
                  ],
                  collapsed: true,
                },
              ],
            },
            {
              label: "Community Extensions",
              items: [
                {
                  label: "aoi.canvas",
                  link: "extensions/aoicanvas",
                },
                {
                  label: "aoi.loader",
                  link: "extensions/aoiloader",
                },
                {
                  label: "aoi.js-library",
                  link: "extensions/aoijs-library",
                },
              ],
            },
          ],
          collapsed: true,
        },
        {
          label: "Guides",
          items: [
            {
              label: "Application Commands",
              autogenerate: {
                directory: "guides/application-cmds",
              },
              collapsed: true,
            },
            {
              label: "Client",
              autogenerate: {
                directory: "guides/client",
              },
              collapsed: true,
            },
            {
              label: "Other",
              autogenerate: {
                directory: "guides/other",
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
                directory: "functions/array-related",
              },
              collapsed: true,
            },
            {
              label: "Awaited",
              autogenerate: {
                directory: "functions/awaited-related",
              },
              collapsed: true,
            },
            {
              label: "Client",
              autogenerate: {
                directory: "functions/client-related",
              },
              collapsed: true,
            },
            {
              label: "Event",
              autogenerate: {
                directory: "functions/event-related",
              },
              collapsed: true,
            },
            {
              label: "Guild",
              autogenerate: {
                directory: "functions/guild-related",
              },
              collapsed: true,
            },
            {
              label: "Info",
              autogenerate: {
                directory: "functions/info-related",
              },
              collapsed: true,
            },
            {
              label: "Interaction",
              autogenerate: {
                directory: "functions/interaction-related",
              },
              collapsed: true,
            },
            {
              label: "Math",
              autogenerate: {
                directory: "functions/math-related",
              },
              collapsed: true,
            },
            {
              label: "Message",
              autogenerate: {
                directory: "functions/message-related",
              },
              collapsed: true,
            },
            {
              label: "Misc",
              autogenerate: {
                directory: "functions/misc-related",
              },
              collapsed: true,
            },
            {
              label: "User",
              autogenerate: {
                directory: "functions/user-related",
              },
              collapsed: true,
            },
            {
              label: "Util",
              autogenerate: {
                directory: "functions/util-related",
              },
              collapsed: true,
            },
            {
              label: "Database/Variable",
              autogenerate: {
                directory: "functions/database-related",
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
  redirects: {
    // for easier navigation
    guides: "/",
  },
});
