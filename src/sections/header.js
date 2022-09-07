import React from "react";
import "./header.css";
import Logo from "../assets/logo/turnerlogo-desktop.png";
import ImageSections from "../components/imageSec";
import Buttons from "../components/Buttons/Buttons";
import { redTag, RedBorderBtn } from "../components/Buttons/variants/variants";
import NoBorderBtn from "../components/Buttons/A-Tags/noBorderBtn";
import HeaderNav from "./partials/header-nav";

export default function Header() {
  const handleClick = () => {
    alert("button clicked");
  };

  return (
    <>
      <HeaderNav />
      <div className="header-styling header-spacing">
        <ImageSections imageUrl={Logo} />
        <div className="login-btns">
          <NoBorderBtn
            className="mont-font no-underline"
            text="My Account"
            variant={redTag}
          />
          <Buttons
            className="mont-font borderbtn"
            text="Register"
            variant={RedBorderBtn}
            click={handleClick}
          />
        </div>
      </div>
    </>
  );
}
