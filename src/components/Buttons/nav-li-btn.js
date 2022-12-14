import React from "react";
import "./button.css";
import Arrow from "../../assets/dropdown-arrow/Vector.png";
import { mainNavBtn } from "./variants/variants";

export default function NavList({ className, text, name }) {
  return (
    <div className="text-arrow navBtn-spacing">
      <li className={className} style={mainNavBtn}>
        {text}
      </li>
      <div className="arrow">
        <img src={Arrow} alt={name} />
      </div>
    </div>
  );
}
