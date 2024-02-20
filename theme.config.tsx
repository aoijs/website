import type { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Footer from "./components/Footer";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: () => {
    return (
      <>
        <Image
          src={`https://raw.githubusercontent.com/aoijs/website/main/images/favicon.png`}
          alt="aoi.js logo"
          width={30}
          height={30}
        />
        <span style={{ marginLeft: ".4em", fontWeight: 800 }}>aoi.js</span>
      </>
    );
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/" && asPath !== "/invite") {
      return {
        titleTemplate: "%s – aoi.js",
      };
    }
  },
  head: function useHead() {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    const url = `https://aoi.js.org/${asPath}`;

    // /invite
    if (asPath === "/invite") {
      return (
        <>
          <title>aoi.js | Discord</title>
          <meta content="Join our Discord" property="og:title" />
          <meta
            content="https://raw.githubusercontent.com/aoijs/website/main/images/favicon.png"
            property="og:image"
          />
          <meta
            content="Join the aoi.js Community, to receive support or just to chat."
            property="og:description"
          />
          <meta content="aoi.js | Discord" property="og:site_name" />
        </>
      );
    }

    const ogImage = `https://aoi.js.org/og/image?title=${frontMatter.title}&description=${frontMatter.description}`;

    return (
      <>
        <meta property="og:url" content={url} />
        <link
          rel="icon"
          href={
            "https://raw.githubusercontent.com/aoijs/website/main/images/favicon.png"
          }
        ></link>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:src" content={ogImage} />
        <meta
          property="og:title"
          content={frontMatter.title || "aoi.js | Akarui Development"}
        />
      </>
    );
  },
  project: {
    link: "https://github.com/AkaruiDevelopment/aoi.js",
  },
  chat: {
    link: "https://discord.com/invite/HMUfMXDQsV",
  },
  editLink: {
    text: "Contribute to this page on GitHub →",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  docsRepositoryBase: "https://github.com/aoijs/website",
  footer: {
    text: <Footer />,
  },
};

export default config;
