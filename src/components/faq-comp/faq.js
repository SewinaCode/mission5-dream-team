import React from "react";
import "../../components/card-comp.css";
import "../../components/sec-heading.css";
import "./faq.css";
import "./what-can-help.css";
import "../../components/Buttons/button.css";
import { ParaText } from "../sec-heading";
import { BlackText } from "../variants-comp/comp-variants";
import RedArrow from "../../assets/red-dropdown-arrow.png";
import LongerLine from "../../assets/Line 18.png";

function Questions({ text }) {
  const clickTest = () => {
    console.log("arrow button click working");
  };

  return (
    <div className="feat-height ">
      <div className="faq-ques-spacing can-help-align">
        <ParaText
          className="feature-text sml-weight bt-font-header card-height"
          variant={BlackText}
          text={text}
        />
        <img
          onClick={clickTest}
          className="arrow"
          src={RedArrow}
          alt="red-arrow"
        />
      </div>
      <img
        className="padding-top-bottom"
        src={LongerLine}
        alt="faq-long-line"
      />
    </div>
  );
}

export default Questions;
