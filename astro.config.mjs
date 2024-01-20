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
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        es: {
          label: "Español",
          lang: "es",
        },
      },
      logo: {
        src: "/favicon.png",
      },
      social: {
        github: "https://github.com/AkaruiDevelopment/aoi.js#v6",
        discord: "https://aoi.js.org/invite",
      },
      editLink: {
        baseUrl: "https://github.com/aoijs/website/edit/main/",
      },
      customCss: ["./src/styles/custom.css"],
      components: {
        Search: "./src/components/Search.astro",
        Head: "./src/components/Head.astro",
      },
      pagefind: false,
      head: [
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
              label: "Application Commands",
              badge: { text: "Updated", variant: "note" },
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
              label: "Info",
              autogenerate: {
                directory: "functions/info",
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
  redirects: {
    // for easier navigation
    guides: "/",
  },
});
