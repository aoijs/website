import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

export default function BlogSidebarDesktop({ sidebar }) {
  const excludedPermalinks = [
    "/wikis/submit",
    "/wikis/guidelines",
    "/wikis/tags",
    "es/wikis/submit",
    "es/wikis/guidelines",
    "es/wikis/tags",
    "fr/wikis/submit",
    "fr/wikis/guidelines",
    "fr/wikis/tags",
    "ar/wikis/submit",
    "ar/wikis/guidelines",
    "ar/wikis/tags",
    "ru/wikis/submit",
    "ru/wikis/guidelines",
    "ru/wikis/tags",
    "uk/wikis/submit",
    "uk/wikis/guidelines",
    "uk/wikis/tags",
    "tr/wikis/submit",
    "tr/wikis/guidelines",
    "tr/wikis/tags",
    "de/wikis/submit",
    "de/wikis/guidelines",
    "de/wikis/tags",
  ];

  const [isSortedAlphabetically, setIsSortedAlphabetically] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedSortingState = getLocalStorageItem("sortingState");
    if (storedSortingState) {
      setIsSortedAlphabetically(JSON.parse(storedSortingState));
    }
  }, []);

  useEffect(() => {
    if (isLocalStorageAvailable()) {
      setLocalStorageItem("sortingState", JSON.stringify(isSortedAlphabetically));
    }
  }, [isSortedAlphabetically]);

  const getLocalStorageItem = (key) => {
    if (isLocalStorageAvailable()) {
      return localStorage.getItem(key);
    }
    return null;
  };

  const setLocalStorageItem = (key, value) => {
    if (isLocalStorageAvailable()) {
      localStorage.setItem(key, value);
    }
  };

  const isLocalStorageAvailable = () => {
    try {
      const testKey = "test";
      localStorage.testKey = testKey;
      return true;
    } catch (e) {
      return false;
    }
  };

  const sortedItems = sidebar.items
    .filter((item) => !excludedPermalinks.includes(item.permalink))
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (isSortedAlphabetically) {
        return a.title.localeCompare(b.title);
      }
    });

  const capitalizeFirstChar = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleSortChange = () => {
    setIsSortedAlphabetically((prevValue) => !prevValue);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

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
          <span>Introduction</span>
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
          <li key="/wikis/tags" className={styles.sidebarItem}>
            <Link
              isNavLink
              to="/wikis/tags"
              className={styles.sidebarItemLink}
              activeClassName={styles.sidebarItemLinkActive}
            >
              Tags
            </Link>
          </li>
        </ul>
        <div className={clsx(styles.sidebarItemTitle, "margin-bottom--md")}>
          Wikis
          <button
            className={clsx(styles.activeButton, {
              [styles.activeButton]: isSortedAlphabetically,
            })}
            onClick={handleSortChange}
          >
            {isSortedAlphabetically ? "A-Z" : "Newest First"}
          </button>
        </div>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search Wikis..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <ul className={clsx(styles.sidebarItemList, "clean-list")}>
          {sortedItems.map((item, index) => (
            <li key={item.permalink} className={styles.sidebarItem}>
              <Link
                isNavLink
                to={item.permalink}
                className={styles.sidebarItemLink}
                activeClassName={styles.sidebarItemLinkActive}
              >
                {capitalizeFirstChar(item.title)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
