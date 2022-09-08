import React from "react";
import "../sec-heading.css";
import "../card-comp.css";
import "../faq-comp/what-can-help.css";
import "../../sections/testimonies.css";

//Import Variants
import { HeadingBlk } from "../variants-comp/comp-variants";
import { HeadingTxt } from "../sec-heading";

function ClientCards({ image, icon, name, text }) {
  return (
    <div className="section-header client-card-column">
      <img src={image} alt={name} />
      <img className="img-text" src={icon} alt={name} />
      <HeadingTxt
        className="section-header bt-weight sml-font-header xsml-height "
        variant={HeadingBlk}
        text={text}
      />
    </div>
  );
}

function HighlightClient({ image, icon, name, text }) {
  return (
    <div className="section-header client-card-column img-text-side">
      <img src={image} alt={name} />
      <img className="img-text" src={icon} alt={name} />
      <HeadingTxt
        className="section-header bt-weight sml-font-header xsml-height "
        variant={HeadingBlk}
        text={text}
      />
    </div>
  );
}

export { ClientCards, HighlightClient };
