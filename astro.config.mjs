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
          resultsFooterComponent() {
            return {
              type: "div",
              ref: undefined,
              constructor: undefined,
              key: "resultsFooter",
              props: {
                style: { marginBlock: "0.5rem" },
                children: [
                  {
                    type: "p",
                    ref: undefined,
                    constructor: undefined,
                    key: "resultsFooterLede",
                    props: {
                      children: `Searched for something else? Maybe something below can solve your issue.`,
                    },
                    __v: null,
                  },
                  {
                    type: "ul",
                    ref: undefined,
                    constructor: undefined,
                    key: "resultsFooterList",
                    props: {
                      style: {
                        display: "flex",
                        gap: "1em",
                        marginBlock: "0.5em",
                        flexWrap: "wrap",
                      },
                      children: [
                        {
                          type: "li",
                          ref: undefined,
                          constructor: undefined,
                          key: "integrationLink",
                          props: {
                            children: [
                              {
                                type: "a",
                                ref: undefined,
                                constructor: undefined,
                                key: "integrationAnchor",
                                props: {
                                  href: "https://aoi.js.org/contributor",
                                  children: "Our Contributors",
                                },
                                __v: null,
                              },
                            ],
                          },
                          __v: null,
                        },
                        {
                          type: "li",
                          ref: undefined,
                          constructor: undefined,
                          key: "themesLink",
                          props: {
                            children: [
                              {
                                type: "a",
                                ref: undefined,
                                constructor: undefined,
                                key: "themesAnchor",
                                props: {
                                  href: "https://github.com/AkaruiDevelopment/aoi.js/issues",
                                  children: "Found bugs? Report them here!",
                                },
                                __v: null,
                              },
                            ],
                          },
                          __v: null,
                        },
                        {
                          type: "li",
                          ref: undefined,
                          constructor: undefined,
                          key: "discordLink",
                          props: {
                            children: [
                              {
                                type: "a",
                                ref: undefined,
                                constructor: undefined,
                                key: "discordAnchor",
                                props: {
                                  href: "https://aoi.js.org/invite",
                                  children:
                                    "Need Support? Feel free to join our Discord.",
                                },
                                __v: null,
                              },
                            ],
                          },
                          __v: null,
                        },
                      ],
                    },
                    __v: null,
                  },
                ],
              },
              __v: null,
            };
          },
        }),
      ],
      expressiveCode: {
	@@ -221,10 +112,51 @@ export default defineConfig({
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
