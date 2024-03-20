import { useState, useEffect } from "react";
import type { FC } from "react";

interface GitStats {
  stars: number;
  forks: number;
}

interface CachedData {
  data: number | GitStats;
  timestamp: number;
}

const PackageStats: FC = () => {
  const [downloads, setDownloads] = useState(0);
  const [gitstats, setGitStats] = useState({ stars: 0, forks: 0 });
  const [lastFetchedTime, setLastFetchedTime] = useState<string | null>(null);

  const CountUp: FC<{ targetNumber: number }> = ({ targetNumber }) => {
    const [currentNumber, setCurrentNumber] = useState(0);
    let intervalId: any = null;

    useEffect(() => {
      let increment = 0;

      const animateNumber = () => {
        increment = Math.min(increment + targetNumber / 450, targetNumber);
        setCurrentNumber(Math.round(increment));
      };

      intervalId = setInterval(animateNumber, 12);

      return () => {
        clearInterval(intervalId);
      };
    }, [targetNumber]);

    useEffect(() => {
      if (currentNumber >= targetNumber) {
        clearInterval(intervalId);
      }
    }, [currentNumber, targetNumber]);

    return (
      <p
        style={{
          marginTop: "5px",
          fontSize: "25px",
          color: "var(--sl-color-accent-high)",
        }}
      >
        {currentNumber.toLocaleString()}
      </p>
    );
  };

  const npmStats = async () => {
    try {
      const response = await fetch(
        `https://api.npmjs.org/downloads/range/1000-01-01:2030-12-31/aoi.js`
      );
      const data = await response.json();
      const total = data.downloads.reduce((acc: any, entry: any) => acc + entry.downloads, 0);
      setDownloads(total);
      cacheData("npm", total);
    } catch (e) {
      return;
    }
  };

  const gitStats = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/AkaruiDevelopment/aoi.js`
      );
      const data = await response.json();
      const stats = {
        stars: data.stargazers_count,
        forks: data.forks_count,
      };
      setGitStats(stats);
      cacheData("git", stats);
    } catch (error) {
      console.error("Error fetching GitHub repo stats:", error);
    }
  };

  const getCachedData = (key: string): CachedData | null => {
    const cachedData = localStorage.getItem(key);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (timestamp && Date.now() - timestamp < 3600000) {
        setLastFetchedTime(new Date(timestamp).toLocaleString());
        return { data, timestamp };
      }
      
      console.log({ data, timestamp });
    }
    return null;
  };

  const cacheData = (key: string, data: any) => {
    const timestamp = Date.now();
    const dataToCache = { data, timestamp };
    localStorage.setItem(key, JSON.stringify(dataToCache));
  };

  useEffect(() => {
    const totalStats = getCachedData("npm");
    const git = getCachedData("git");

    if (totalStats !== null && git !== null) {
      setDownloads(totalStats.data as any);
      setGitStats(git.data as any);
    } else {
      npmStats();
      gitStats();
    }
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        border: "1px solid var(--sl-color-gray-5)",
        borderRadius: "5px",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "2rem",
        backgroundColor: "transparent",
        backdropFilter: "blur(16px)",    
        flexDirection: "row",
        flexWrap: "wrap", 
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <p
          style={{
            color: "var(--sl-color-accent-high)",
            fontSize: window.innerWidth <= 768 ? "20px" : "30px"
          }}
        >
          Downloads
        </p>
        <CountUp targetNumber={downloads} />
        <div style={{ marginBottom: "1rem" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "var(--sl-color-accent-high)",
            fontSize: window.innerWidth <= 768 ? "20px" : "30px"
          }}
        >
          Stars
        </p>
        <CountUp targetNumber={gitstats.stars} />
        <div style={{ marginBottom: "1rem" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "var(--sl-color-accent-high)",
            fontSize: window.innerWidth <= 768 ? "20px" : "30px"
          }}
        >
          Forks
        </p>
        <CountUp targetNumber={gitstats.forks} />
        <div style={{ marginBottom: "1rem" }} />
      </div>
      <div
        style={{
          marginTop: "auto",
          marginBottom: "15px",
          color: "var(--sl-color-accent-high)",
          fontSize: window.innerWidth <= 768 ? "10px" : "14px",
        }}
      >
        <div>
          <a href="https://github.com/AkaruiDevelopment/aoi.js">
            <img loading="eager" decoding="async" alt="aoi.js banner image" style={{ filter: "drop-shadow(0 0 3rem var(--overlay-blurple))" }}src="https://github.com/aoijs/website/raw/master/assets/images/aoijs-banner.png?raw=true" width="250" height="250" />
          </a>
        </div>
        <p style={{ marginLeft: "5px", color: "var(--sl-color-gray-4)" }}>Last fetched: {lastFetchedTime ?? `${new Date(Date.now()).toLocaleString()} (now)`}</p>
      </div>
    </div>
  );
};

export default PackageStats;
