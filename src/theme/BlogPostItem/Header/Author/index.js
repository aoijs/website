import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}

export default function BlogPostItemHeaderAuthor({ author, className }) {
  const { name, title, url, imageURL, email } = author;
  const link = url || (email && `mailto:${email}`) || undefined;
  const staff = [
    "@dodogames",
    "@supreme supreme",
    "@supreme",
    "@.josipfx",
    "@faf4a",
    "@satoshisaysnya",
    "@usersatoshi",
    "@ahoemi",
    "@snowytealatte",
  ];
  const mod = [
    "@dodogames",
    "@supreme supreme",
    "@supreme",
    "@.josipfx",
    "@faf4a",
    "@satoshisaysnya",
    "@usersatoshi",
  ];
  const creator = ["@leref"];
  const contributor = ["@faf4a", "@dodogames"];
  const booster = [
    "@Zeke ♡",
    "@Alien Abd",
    "@Supreme Supreme",
    "@creitingameplays",
    "@leref",
    "@satoshisaysnya",
    "@theparadox0018",
    "@valentineu0",
    "@wansie",
    "@あ┃𝚒𝚣𝚊𝚌𝚑𝚘𝚌",
  ];

  const lowercaseName = name.toLowerCase();

  const isCreator = creator
    .map((item) => item.toLowerCase())
    .includes(lowercaseName);
  const isMod = mod.map((item) => item.toLowerCase()).includes(lowercaseName);
  const isStaff = staff
    .map((item) => item.toLowerCase())
    .includes(lowercaseName);
  const isContributor = contributor
    .map((item) => item.toLowerCase())
    .includes(lowercaseName);
  const isBooster = booster
    .map((item) => item.toLowerCase())
    .includes(lowercaseName);

  return (
    <div className={clsx("avatar margin-bottom--sm", className)}>
      {imageURL && (
        <MaybeLink href={link} className="avatar__photo-link">
          <img className="avatar__photo" src={imageURL} alt={name} />
        </MaybeLink>
      )}

      {name && (
        <div
          className="avatar__intro"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className="avatar__name">
            <MaybeLink href={link} itemProp="url">
              <span itemProp="name">{name}</span>
            </MaybeLink>
            {isContributor && (
              <span className={clsx(styles.tag, styles.contributor)}>
                Contributor
              </span>
            )}
            {isBooster && (
              <span className={clsx(styles.tag, styles.booster)}>
                Server Booster
              </span>
            )}
            {isStaff && (
              <span className={clsx(styles.tag, styles.staff)}>Staff</span>
            )}
            {isMod && (
              <span className={clsx(styles.tag, styles.mod)}>Moderator</span>
            )}
            {isCreator && (
              <span className={clsx(styles.tag, styles.creator)}>Creator</span>
            )}
          </div>
          {title && (
            <small className="avatar__subtitle" itemProp="description">
              {title}
            </small>
          )}
        </div>
      )}
    </div>
  );
}
