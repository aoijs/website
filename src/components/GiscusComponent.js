import React, { useEffect, useState } from "react";
import Giscus from "@giscus/react";
import styles from "@site/src/css/styles.module.css";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComponent() {
  const { colorMode } = useColorMode();
  const [cookiesBlocked, setCookiesBlocked] = useState(false);

  useEffect(() => {
    const isLocalStorageAvailable = checkLocalStorageAvailability();
    if (!isLocalStorageAvailable) {
      setCookiesBlocked(true);
    }
  }, []);

  const checkLocalStorageAvailability = () => {
    try {
      const testKey = "test";
      localStorage.testKey = testKey;
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div>
      {cookiesBlocked && (
        <div className={styles["cookies-banner"]}>
          <p>You need to allow cookies to comment on Wikis!</p>
        </div>
      )}
      <Giscus
        repo="aoijs/website"
        repoId="MDEwOlJlcG9zaXRvcnkzNjM3OTEyMzY="
        category="General"
        categoryId="DIC_kwDOFa8DhM4CXVEw"
        mapping="pathname"
        term="aoi.js comment section"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme={colorMode}
        lang="en"
        crossorigin="anonymous"
        async
      />
    </div>
  );
}
