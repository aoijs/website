import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import clsx from "clsx";
import Cookies from "@site/src/components/CookieComponent";

import styles from "./styles.module.css";

const features = [
  {
    imageUrl:
        "https://raw.githubusercontent.com/aoijs/website/main/assets/images/aoijs-banner.png?raw=true",
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
      <div className={clsx("col col--12", styles.feature)}>
        {imgUrl && (
            <div className="text--center">
              <img className={styles.featureImage} src={imgUrl} alt={title} />
            </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
  );
}

function FeatureList() {
  return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {features.map((props, idx) => (
                <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const heroTitle = siteConfig.title;
  const heroSubtitle =
      "The most advanced string-based package to create a Discord Bot fast and powerful.";

  const buttonClasses = clsx(
      "button button--outline button--secondary button--lg"
  );

  return (
      <React.Fragment>
        <Layout
            title={`Akarui Development Team`}
            description="The official aoi.js documentation | Powered by Akarui Development Team."
        >
          <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
              <h1 className="hero__title">{heroTitle}</h1>
              <p className="hero__subtitle">{heroSubtitle}</p>

              <div className={styles.buttons}>
                <Link className={buttonClasses} to={useBaseUrl("docs/")}>
                  npm install aoi.js
                </Link>
                <Link
                    className={buttonClasses}
                    to={useBaseUrl("wikis/guidelines")}
                >
                  Community Wikis
                </Link>
              </div>
              <Cookies />
            </div>
          </header>
          <main>
            {features && features.length > 0 && <FeatureList />}
          </main>
        </Layout>
      </React.Fragment>
  );
}

export default Home;
