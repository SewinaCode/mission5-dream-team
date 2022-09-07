import React from "react";
import "./mainNav.css";
import NavList from "../components/Buttons/nav-li-btn";
import ImageSections from "../components/imageSec";
import SearchLogo from "../assets/dropdown-arrow/search.png";

export default function MainNav() {
  return (
    <nav className="main-navi">
      <ul className="list-reset">
        <NavList className="openSans-font" text="HOME" />
        <NavList className="openSans-font" text="BUYING" />
        <NavList className="openSans-font" text="SELLING" />
        <NavList className="openSans-font" text="FINANCE" />
        <NavList className="openSans-font" text="CAR INSURANCE" />
        <NavList className="openSans-font" text="AUCTIONS" />
        <NavList className="openSans-font" text="ABOUT US" />
        <ImageSections
          className="search-btn"
          imageUrl={SearchLogo}
          name="search-button"
          to="/"
        />
      </ul>
    </nav>
  );
}
