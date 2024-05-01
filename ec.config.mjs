import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
    plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
    defaultProps: {
        showLineNumbers: false,
        overridesByLang: {
            "js,ts,javascript": {
                showLineNumbers: true
            }
        },
        wrap: true
    },
    themes: ["github-dark", "github-light"],
    styleOverrides: {
        borderRadius: "0.2rem",
        codeFontFamily: "'JetBrains Mono', monospace"
    }
};
