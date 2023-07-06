import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const team = [
  {
    name: "Leref",
    title: "Creator of aoi.js",
    avatar:
      require("../../assets/images/avatars/608358453580136499.png")
        .default,
  },
  {
    name: "USERSATOSHI",
    title: "Co-Owner & Developer",
    avatar:
      require("../../assets/images/avatars/715755977483223081.png")
        .default,
  },
  {
    name: "bumblebee_3",
    title: "Developer",
    avatar:
      require("../../assets/images/avatars/818377414367379487.png")
        .default,
  },
  {
    name: "Fafa",
    title: "Community Manager & Documentation Maintainer",
    avatar:
      require("../../assets/images/avatars/428188716641812481.png")
        .default,
  },
  {
    name: "snowytealatte",
    title: "Artist Manager",
    avatar:
      require("../../assets/images/avatars/818377414367379487.png")
        .default,
  },
];

function Credits() {
  const context = useDocusaurusContext();
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const containerPosition = container.offsetTop;

      if (scrollPosition + window.innerHeight > containerPosition) {
        container.classList.add(styles.fadeIn);
      } else {
        container.classList.remove(styles.fadeIn);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout
      title={`Akarui Development Team`}
      description="The official aoi.js documentation | Powered by Akarui Development Team."
    >
      <div className="container" ref={containerRef}>
        <div className={`${styles.header} shadow--tl`} />
        <div className={styles.creditContainer}>
          {team.map((member, index) => (
            <div key={index} className={styles.creditItem}>
              <img
                src={member.avatar}
                alt={member.name}
                className={styles.avatar}
              />
              <div className={styles.details}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.title}>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Credits;
