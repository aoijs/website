import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { readFileSync } from "fs";

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
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
  shiki: {
    // You can pass additional plugin options here,
    // e.g. to load custom language grammars:
    langs: [
      // import('./grammar.mjs'),
      JSON.parse(readFileSync("./grammar.json", "utf-8")),
    ],
  },
  styleOverrides: {
    borderRadius: "0.2rem",
    codeFontFamily: "'JetBrains Mono', monospace",
  },
};
