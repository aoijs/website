import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import { NavbarSecondaryMenuFiller } from "@docusaurus/theme-common";

function BlogSidebarMobileSecondaryMenu({ sidebar }) {
  // console.log(sidebar?.items)
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
      <div className="menu__title"  style={{marginTop: "30px"}}>Recent Wikis</div>
      {sidebar?.items?.map((item) => (
        <li key={item.permalink} className="menu__list-item">
          <Link
            isNavLink
            to={item.permalink}
            className="menu__link"
            activeClassName="menu__link--active"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function BlogSidebarMobile({ sidebar }) {
  const excludedPermalinks = ["/wikis/submit", "/wikis/guidelines"];

  return (
    <NavbarSecondaryMenuFiller
      component={BlogSidebarMobileSecondaryMenu}
      props={{
        sidebar: {
          ...sidebar,
          items: sidebar?.items?.filter(
            (item) => !excludedPermalinks.includes(item.permalink)
          ),
        },
      }}
    />
  );
}
