import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// Assuming you have an array of team members with their data
const teamMembers = [
  {
    name: "Leref",
    title: "Creator of aoi.js",
    avatar:
      require("../../assets/images/avatars/1d8a70beff987337aa2173dd26cd4c47.png")
        .default,
  },
  {
    name: "USERSATOSHI",
    title: "Co-Owner & Developer",
    avatar:
      require("../../assets/images/avatars/8a030ced659478ce8e83b888fb5a6a78.png")
        .default,
  },
  {
    name: "bumblebee_3",
    title: "Developer",
    avatar:
      require("../../assets/images/avatars/e91d0509022bc6696f8189a37fe9f4cd.png")
        .default,
  },
  {
    name: "Fafa",
    title: "Community Manager & Documentation Maintainer",
    avatar:
      require("../../assets/images/avatars/635c1dca728b68c2fa329dbcb3330204.png")
        .default,
  },
  {
    name: "snowytealatte",
    title: "Artist Manager",
    avatar:
      require("../../assets/images/avatars/2fe598e4c72d389e1698da27e2eb8fc9.png")
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
          {teamMembers.map((member, index) => (
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
