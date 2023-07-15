import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const team = [
  {
    name: "Leref",
    title: "Creator of aoi.js",
    avatar: require("../../assets/images/avatars/608358453580136499.png")
      .default,
  },
  {
    name: "USERSATOSHI",
    title: "Co-Owner & Developer",
    avatar: require("../../assets/images/avatars/715755977483223081.png")
      .default,
  },
  {
    name: "bumblebee_3",
    title: "Developer",
    avatar: require("../../assets/images/avatars/818377414367379487.png")
      .default,
  },
  {
    name: "Fafa",
    title: "Documentation Maintainer",
    avatar: require("../../assets/images/avatars/428188716641812481.png")
      .default,
  },
  {
    name: "snowytealatte",
    title: "Artist Manager",
    avatar: require("../../assets/images/avatars/673858247320403988.png")
      .default,
  },
  {
    name: "Maniator",
    title: "Spanish Translator ⭐",
    avatar: require("../../assets/images/avatars/837796591015821332.gif")
      .default,
  },
];

function Credits() {
  const context = useDocusaurusContext();

  return (
    <Layout
      title={`Akarui Development Team`}
      description="The official aoi.js documentation | Powered by Akarui Development Team."
    >
      <div className="container">
        <div className={`${styles.header} shadow--tl`} />
        <div className={styles.creditContainer}>
          {team.map((member, index) => (
            <div key={index} className={styles.creditItem}>
              <img
                src={member.avatar}
                alt={member.name}
                className={styles.avatar}
                height="100"
                width="100"
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
