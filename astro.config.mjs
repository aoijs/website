// @ts-check
import { defineConfig } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import starlightLinksValidator from "starlight-links-validator";
import starlightImageZoom from "starlight-image-zoom";
import starlightSidebarTopics from "starlight-sidebar-topics";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
  site: "https://aoi.js.org",
  devToolbar: {
    enabled: false,
  },
  trailingSlash: "ignore",
  integrations: [
    starlight({
      customCss: ["./src/styles/custom.css"],
      lastUpdated: false,
      plugins: [
        starlightLinksValidator(),
        starlightImageZoom(),
        starlightSidebarTopics([
          {
            label: "Guides",
            icon: "open-book",
            link: "/guides/",
            items: [
              {
                label: "Get Started",
                link: "/guides",
              },
              {
                label: "Client",
                autogenerate: {
                  directory: "guides/client",
                },
                collapsed: false,
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
                  {
                    label: "Message Formatting",
                    link: "/guides/other/message-formatting",
                  },
                  {
                    label: "Parsers",
                    link: "/guides/other/parser",
                  },
                  {
                    label: "Macros",
                    link: "/guides/other/macros",
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
            icon: "puzzle",
            link: "/extensions/",
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
                        link: "/extensions/aoijs/aoimusic/events",
                      },
                      {
                        label: "Functions",
                        autogenerate: {
                          directory: "/extensions/@aoijs/aoi.music/music",
                        },
                        collapsed: true,
                      },
                    ],
                    collapsed: false,
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
                          directory: "/extensions/@aoijs/aoi.canvas/guides",
                        },
                        collapsed: true,
                      },
                      {
                        label: "Functions",
                        autogenerate: {
                          directory: "/extensions/@aoijs/aoi.canvas/functions",
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
                          directory: "/extensions/@aoijs/aoi.invite/invite",
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
          },
          {
            label: "Functions",
            icon: "list-format",
            link: "/functions/",
            items: [
              {
                label: "Functions",
                autogenerate: {
                  directory: "/functions/",
                },
                collapsed: true,
              },    
            ]
          },
          {
            label: "Events",
            icon: "rocket",
            link: "/events/",
            items: [
              {
                label: "Events",
                autogenerate: {
                  directory: "/events/",
                },
                collapsed: true,
              }, 
            ]
          },
          {
            label: "Application Command Creator",
            icon: "forward-slash",
            link: "/tools/slash",
          },
        ]),
      ],
      title: "aoi.js — Documentation",
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
      components: {
        //Search: "./src/components/Page/Search.astro",
        Head: "./src/components/Page/Head.astro",
        PageTitle: "./src/components/Page/PageTitle.astro",
        PageSidebar: "./src/components/Page/PageSidebar.astro",
        Sidebar: "./src/components/Page/Sidebar.astro",
        Pagination: "./src/components/Page/Pagination.astro",
      },
      pagefind: true,
      head: [
        // Google Analytics, Anonymized (for the user)
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
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "aoi.js",
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
    }),
    react(),
  ],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      // @ts-ignore
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
