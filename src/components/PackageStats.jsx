import { useState, useEffect } from "react";

const PackageStats = () => {
  const [downloads, setdownloads] = useState(0);
  const [gitstats, setgitstats] = useState({ stars: 0, forks: 0 });
  const [lastFetchedTime, setLastFetchedTime] = useState(null);

  const CountUp = ({ targetNumber }) => {
    const [currentNumber, setCurrentNumber] = useState(0);
    let intervalId = null;

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
      const total = data.downloads.reduce(
        (acc, entry) => acc + entry.downloads,
        0
      );
      setdownloads(total);
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
      setgitstats(stats);
      cacheData("git", stats);
    } catch (error) {
      console.error("Error fetching GitHub repo stats:", error);
    }
  };

  const getCachedData = (key) => {
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

  const cacheData = (key, data) => {
    const timestamp = Date.now();
    const dataToCache = { data, timestamp };
    localStorage.setItem(key, JSON.stringify(dataToCache));
  };

  useEffect(() => {
    const cachedTotalStats = getCachedData("npm");
    const git = getCachedData("git");

    if (cachedTotalStats !== null && git !== null) {
      setdownloads(cachedTotalStats.data);
      setgitstats(git.data);
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
          marginTop: "25px",
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
            <img alt="aoi.js banner image" style={{ filter: "drop-shadow(0 0 3rem var(--overlay-blurple))" }}src="https://github.com/aoijs/website/raw/master/assets/images/aoijs-banner.png?raw=true" width="250" height="250" />
          </a>
        </div>
        <p style={{ marginLeft: "5px", color: "var(--sl-color-gray-4)" }}>Last fetched: {lastFetchedTime ?? `${new Date(Date.now()).toLocaleString()} (now)`}</p>
      </div>
    </div>
  );
};

export default PackageStats;
