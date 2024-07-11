import { useState, useEffect } from "react";
import SlotCounter from "react-slot-counter";

const BANNER_URL =
  "https://raw.githubusercontent.com/aoijs/website/master/assets/images/aoijs-banner.png";

const PackageStats: React.FC = () => {
  const [downloads, setDownloads] = useState(0);
  const [gitstats, setGitStats] = useState({ stars: 0, forks: 0 });

  const npmStats = async () => {
    try {
      const response = await fetch(
        `https://api.npmjs.org/downloads/range/1000-01-01:2030-12-31/aoi.js`
      );
      const data = await response.json();
      const total = data.downloads.reduce(
        (acc: any, entry: any) => acc + entry.downloads,
        0
      );
      setDownloads(total);
      cacheData("npm", total);
    } catch (err) {
      return console.error(
        "%c" + "Error",
        "color: red; font-weight: bold; background-color: white; padding: 2px; border-radius: 5px;",
        "Failed to get stats with reason:",
        err
      );
    }
  };

  const gitStats = async () => {
    try {
      const response = await fetch(`https://api.github.com/repos/aoijs/aoi.js`);
      const data = await response.json();
      const stats = {
        stars: data.stargazers_count,
        forks: data.forks_count,
      };
      setGitStats(stats);
      cacheData("git", stats);
    } catch (err) {
      console.error(
        "%c" + "Error",
        "color: red; font-weight: bold; background-color: white; padding: 2px; border-radius: 5px;",
        "Failed to get stats with reason:",
        err
      );
    }
  };

  const getCachedData = (key: string) => {
    const cachedData = localStorage.getItem(key);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (timestamp && Date.now() - timestamp < 3600000) {
        return { data, timestamp };
      }
    } else {
      return null;
    }
  };

  const cacheData = (key: string, data: any) => {
    const timestamp = Date.now();
    const cache = { data, timestamp };
    localStorage.setItem(key, JSON.stringify(cache));
  };

  useEffect(() => {
    const npm = getCachedData("npm");
    const git = getCachedData("git");

    if (npm && git) {
      setDownloads(npm.data as any);
      setGitStats(git.data as any);
    } else {
      npmStats();
      gitStats();
    }
  }, []);

  return (
    <div className="not-content package-stats-container">
      <div className="package-container-inner" id="downloads">
        <p
          style={{
            fontSize: window.innerWidth <= 768 ? "20px" : "30px",
          }}
          className="container-inner-font"
        >
          Downloads
        </p>
        <p
          style={{
            fontSize: window.innerWidth <= 768 ? "20px" : "30px",
          }}
          className="container-inner-font"
        >
          <SlotCounter
            delay={0.5}
            startValueOnce={false}
            animateOnVisible={true}
            duration={1.5}
            hasInfiniteList={true}
            startValue={0}
            value={downloads}
          />
        </p>
        <DownloadsIcon />
      </div>
      <div className="package-container-inner" id="stars">
        <p
          style={{
            color: "var(--sl-color-text-accent)",
            fontSize: window.innerWidth <= 768 ? "20px" : "30px",
            padding: "15px",
          }}
        >
          Stars
        </p>
        <p
          style={{
            fontSize: window.innerWidth <= 768 ? "20px" : "30px",
          }}
          className="container-inner-font"
        >
          <SlotCounter
            delay={0.5}
            startValueOnce={false}
            animateOnVisible={true}
            duration={1.5}
            hasInfiniteList={true}
            startValue={0}
            value={gitstats.stars}
          />
        </p>
        <StarIcon />
      </div>
      <div className="package-container-inner">
        <p
          style={{
            fontSize: window.innerWidth <= 768 ? "20px" : "30px",
          }}
          className="container-inner-font"
        >
          Forks
        </p>
        <p
          style={{
            fontSize: window.innerWidth <= 768 ? "20px" : "30px",
          }}
          className="container-inner-font"
        >
          <SlotCounter
            delay={0.5}
            startValueOnce={false}
            animateOnVisible={true}
            duration={1.5}
            hasInfiniteList={true}
            startValue={0}
            value={gitstats.forks}
          />
        </p>
        <ForkIcon />
      </div>
      <div>
        <a href="https://github.com/aoijs/aoi.js">
          <img
            loading="eager"
            decoding="async"
            alt="aoi.js banner image"
            style={{
              filter: "drop-shadow(0 0 3rem var(--overlay-blurple))",
              width: "100%",
              maxWidth: "300px",
              padding: "8px",
            }}
            src={BANNER_URL}
          />
        </a>
      </div>
    </div>
  );
};

const StarIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="icon-layout"
    fill="var(--sl-color-gray-5)"
    {...props}
  >
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z" />
  </svg>
);

const ForkIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="icon-layout"
    fill="var(--sl-color-gray-5)"
    id="forks"
    {...props}
  >
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
  </svg>
);

const DownloadsIcon = (props: any) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className="icon-layout"
    fill="var(--sl-color-gray-5)"
    {...props}
  >
    <path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path>
    <path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path>
  </svg>
);

export default PackageStats;
