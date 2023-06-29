import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";
export default function BlogSidebarDesktop({ sidebar }) {
  const excludedPermalinks = ["/wikis/submit", "/wikis/guidelines"];
  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, "thin-scrollbar")}
        aria-label={translate({
          id: "theme.blog.sidebar.navAriaLabel",
          message: "Blog recent posts navigation",
          description: "The ARIA label for recent posts in the blog sidebar",
        })}
      >
        <div className={clsx(styles.sidebarItemTitle, "margin-bottom--md")}>
          Introduction
        </div>
        <ul className={clsx(styles.sidebarItemList, "clean-list")}>
          <li key="/wikis/guidelines" className={styles.sidebarItem}>
            <Link
              isNavLink
              to="/wikis/guidelines"
              className={styles.sidebarItemLink}
              activeClassName={styles.sidebarItemLinkActive}
            >
              Wiki Guidelines
            </Link>
          </li>
          <li key="/wikis/submit" className={styles.sidebarItem}>
            <Link
              isNavLink
              to="/wikis/submit"
              className={styles.sidebarItemLink}
              activeClassName={styles.sidebarItemLinkActive}
            >
              Submit Wiki
            </Link>
          </li>
        </ul>
        <div className={clsx(styles.sidebarItemTitle, "margin-bottom--md")}>
          Wikis
        </div>
        <ul className={clsx(styles.sidebarItemList, "clean-list")}>
          {sidebar.items.map((item) => {
            if (excludedPermalinks.includes(item.permalink)) {
              return null;
            }
            return (
              <li key={item.permalink} className={styles.sidebarItem}>
                <Link
                  isNavLink
                  to={item.permalink}
                  className={styles.sidebarItemLink}
                  activeClassName={styles.sidebarItemLinkActive}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
