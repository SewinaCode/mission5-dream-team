import React from "react";
import "../components/sec-heading.css";
import "../components/card-comp.css";
import { LightBlue } from "../components/variants-comp/comp-variants";
import WhatHelp from "../components/faq-comp/what-can-help";
// import HelpFeatHeading from "../components/faq-comp/help-feat";

// //Image import
// import AccidentClaims from "../assets/accident_claims.png";

export default function FAQ() {
  return (
    <div className="general-padding" style={LightBlue}>
      <WhatHelp />
      {/* <HelpFeatHeading
        classname="section-link bt-font-header med-weight card-height can-help-column can-help-baseline"
        variant={DarkBlueText}
        text="Accidents Claims"
        image={AccidentClaims}
      /> */}
    </div>
  );
}
