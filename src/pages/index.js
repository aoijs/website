import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Button, Container, Typography, Grid } from "@mui/material";
import Layout from "@theme/Layout";
import Cookies from "@site/src/components/CookieComponent";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./styles.module.css";

const features = [
  {
    title: "Powerful Discord Bots",
    description:
      "Build advanced string-based Discord bots quickly and efficiently.",
  },
  {
    title: "Easy to Use",
    description: "Simplify bot development with a simple and intuitive syntax.",
  },
  {
    title: "Community Driven",
    description: "Join our active community and collaborate on projects.",
  },
];

function Feature({ title, description }) {
  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h6" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">{description}</Typography>
    </Grid>
  );
}

function FeatureList() {
  return (
    <section className={styles.features}>
      <Container>
        <Grid container spacing={4}>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

function formatNumberWithCommas(number) {
  if (typeof number !== "number" || isNaN(number)) {
    return "N/A";
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function PackageStats() {
  const [downloadCount, setDownloadCount] = useState("N/A");
  const [downloadsAllTime, setDownloadsAllTime] = useState("N/A");
  const [starsCount, setStarsCount] = useState("N/A");

  useEffect(() => {
    fetchPackageStats();
  }, []);

  const fetchPackageStats = async () => {
    try {
      const downloadCountResponse = await fetch(
        "https://api.npmjs.org/downloads/point/last-week/aoi.js"
      );
      const downloadCountData = await downloadCountResponse.json();
      setDownloadCount(downloadCountData.downloads);

      const downloadsAllTimeResponse = await fetch(
        "https://api.npmjs.org/downloads/range/1000-01-01:2030-12-31/aoi.js"
      );
      const downloadsAllTimeData = await downloadsAllTimeResponse.json();
      const totalCount = downloadsAllTimeData.downloads.reduce(
        (accumulator, currentValue) => accumulator + currentValue.downloads,
        0
      );
      setDownloadsAllTime(totalCount);

      const starsCountResponse = await fetch(
        "https://api.github.com/repos/AkaruiDevelopment/aoi.js"
      );
      const starsCountData = await starsCountResponse.json();
      setStarsCount(starsCountData.stargazers_count);
    } catch (error) {
      console.error("Error fetching package stats:", error);
      setDownloadCount("N/A");
      setDownloadsAllTime("N/A");
      setStarsCount("N/A");
    }
  };

  return (
    <section className={styles.packageStats}>
      <Container>
        <div className={styles.packageStatsBox}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={styles.packageStatsTitle}
          >
            Package Statistics
          </Typography>
          <div className={styles.statsContainer}>
            <div className={styles.stat}>
              <Typography variant="h4" component="h3">
                {formatNumberWithCommas(downloadCount)}
              </Typography>
              <Typography variant="body1">Downloads (Last Week)</Typography>
            </div>
            <div className={styles.stat}>
              <Typography variant="h4" component="h3">
                {formatNumberWithCommas(downloadsAllTime)}
              </Typography>
              <Typography variant="body1">Downloads (All Time)</Typography>
            </div>
            <div className={styles.stat}>
              <Typography variant="h4" component="h3">
                {formatNumberWithCommas(starsCount)}
              </Typography>
              <Typography variant="body1">Stars on GitHub</Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { title } = siteConfig;

  const heroSubtitle =
    "The most advanced string-based package to create a Discord Bot fast and powerful.";

  return (
    <React.Fragment>
      <Layout
        title="Akarui Development Team"
        description="The official aoi.js documentation | Powered by Akarui Development Team."
      >
        <header className={styles.heroBanner}>
          <Container>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              className={styles.title}
            >
              {title}
            </Typography>
            <Typography variant="subtitle1" component="p" gutterBottom>
              {heroSubtitle}
            </Typography>
            <div className={styles.buttons}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to={useBaseUrl("/docs/guides/setup")}
                startIcon={<DescriptionIcon />}
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                href="https://github.com/aoijs/aoi.js"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>
            </div>
            <Cookies />
          </Container>
        </header>
        <main>
          <FeatureList />
          <PackageStats />
        </main>
      </Layout>
    </React.Fragment>
  );
}

export default Home;
