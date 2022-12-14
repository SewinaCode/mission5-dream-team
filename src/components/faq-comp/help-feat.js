import React from "react";
import "../sec-heading.css";
import "../card-comp.css";
import "./what-can-help.css";
import { GreyBlue } from "../variants-comp/comp-variants";

function HelpFeatHeading({ classname, variant, text, image }) {
  return (
    <div
      className="color-height can-help-column helpfeat-img-pad"
      style={GreyBlue}
    >
      <div className={classname} style={variant}>
        <img src={image} alt={text} />
        <div className="img-text">{text}</div>
      </div>
    </div>
  );
}

export default HelpFeatHeading;
