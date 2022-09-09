import React from "react";
import "../components/sec-heading.css";
import "../components/card-comp.css";

//importing components variants
import { WhiteBG } from "../components/variants-comp/comp-variants";
import { HeadingTxt } from "../components/sec-heading";
import { DarkBlackText } from "../components/variants-comp/comp-variants";

function WhyChooseT() {
  return (
    <div className="general-padding" style={WhiteBG}>
      <HeadingTxt
        className="section-header lg-weight xlg-font-header med-height"
        variant={DarkBlackText}
        text="Why choose Turners Car Insurance?"
      />
    </div>
  );
}

export { WhyChooseT };
