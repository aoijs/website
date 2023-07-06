import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { NavbarSecondaryMenuFiller } from "@docusaurus/theme-common";

function BlogSidebarMobileSecondaryMenu({ sidebar }) {
  const excludedPermalinks = ["/wikis/submit", "/wikis/guidelines", "/wikis/tags"];
  const sortedItems = sidebar?.items
    .filter((item) => !excludedPermalinks.includes(item.permalink))
    .sort((a, b) => a.title.localeCompare(b.title));

  const capitalizeFirstChar = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <ul className="menu__list">
      <div className="menu__title">Introduction</div>
      <li key="/wikis/guidelines" className="menu__list-item">
        <Link
          isNavLink
          to="/wikis/guidelines"
          className="menu__link"
          activeClassName="menu__link--active"
        >
          Wiki Guidelines
        </Link>
      </li>
      <li key="/wikis/submit" className="menu__list-item">
        <Link
          isNavLink
          to="/wikis/submit"
          className="menu__link"
          activeClassName="menu__link--active"
        >
          Submit Wiki
        </Link>
      </li>
      <li key="/wikis/tags" className="menu__list-item">
        <Link
          isNavLink
          to="/wikis/tags"
          className="menu__link"
          activeClassName="menu__link--active"
        >
          Tags
        </Link>
      </li>
      <div className="menu__title" style={{ marginTop: "30px" }}>
        Wikis
      </div>
      {sortedItems.map((item) => (
        <li key={item.permalink} className="menu__list-item">
          <Link
            isNavLink
            to={item.permalink}
            className="menu__link"
            activeClassName="menu__link--active"
          >
            {capitalizeFirstChar(item.title)}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function BlogSidebarMobile({ sidebar }) {
  const excludedPermalinks = ["/wikis/submit", "/wikis/guidelines", "/wikis/tags"];
  const sortedItems = sidebar?.items
    .filter((item) => !excludedPermalinks.includes(item.permalink))
    .sort((a, b) => a.title.localeCompare(b.title));

  const capitalizeFirstChar = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <NavbarSecondaryMenuFiller
      component={BlogSidebarMobileSecondaryMenu}
      props={{
        sidebar: {
          ...sidebar,
          items: sortedItems.map((item) => ({
            ...item,
            title: capitalizeFirstChar(item.title),
          })),
        },
      }}
    />
  );
}
