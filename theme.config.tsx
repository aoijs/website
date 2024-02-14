import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import Footer from "./components/Footer";
import Image from "next/image";
import { Callout } from "nextra/components";

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
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    const url = `https://aoi.js.org/${asPath}`;

    const functionType = asPath.split("/")[2];

    console.log(asPath);

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
          <meta
            http-equiv="refresh"
            content="0;url=https://discord.com/invite/HMUfMXDQsV"
          />
        </>
      );
    }

    /*
    if (frontMatter.extension) {
      return (
        <>
        <div style={{ paddingTop: '0px', paddingRight: '10px', paddingBottom: '10px', paddingLeft: '10px' }}>
          <Callout type="warning" emoji="⚠️">
            This function is not included in aoi.js and requires therefore <b>{functionType === "invite" ? "@akarui/aoi.invite" : "@akarui/aoi.music"}</b> to be installed.
          </Callout>
        </div>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:src" content={frontMatter?.og_image || "https://raw.githubusercontent.com/aoijs/website/main/images/og/1.png"} />
        <link rel="icon" href={"https://raw.githubusercontent.com/aoijs/website/main/images/favicon.png"}></link>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "aoi.js | Akarui Development"} />
        <meta
          property="og:description"
          content={frontMatter.description || "The most advanced string package to create your own Discord Bot"}
        />
        </>
      )
    }
    */

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
        <meta
          name="twitter:image:src"
          content={
            frontMatter?.og_image ||
            "https://raw.githubusercontent.com/aoijs/website/main/images/og/1.png"
          }
        />
        <meta
          property="og:title"
          content={frontMatter.title || "aoi.js | Akarui Development"}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "The most advanced string package to create your own Discord Bot"
          }
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
