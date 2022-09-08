import React from "react";
import "../components/card-comp.css";
import "../components/sec-heading.css";
import "../components/faq-comp/what-can-help.css";
import {
  LightBlue,
  WhiteBG,
  BlueText,
} from "../components/variants-comp/comp-variants";
import { HeadingTxt } from "../components/sec-heading";
import WhatHelp from "../components/faq-comp/what-can-help";
import Questions from "../components/faq-comp/faq";

export default function FAQ() {
  return (
    <div className="general-padding" style={LightBlue}>
      <WhatHelp />
      <section className="general-padding med-margin-18" style={LightBlue} />
      <div style={WhiteBG}>
        <HeadingTxt
          className="section-header med-weight med-font-header card-height pad-top-big "
          variant={BlueText}
          text="Frequently Asked Questions"
        />
        <div className="dropdown-ques-padding" style={WhiteBG}>
          <Questions text="If I need to cancel my policy, can I get a refund ?" />
          <Questions text="Who is the underwriter ?" />
          <Questions text="I’ve moved house. How do I update my policy address with you?" />
          <Questions text="How do I make a car insurance claim ?" />
          <Questions text="Someone drove into my car, what do I do ? " />
        </div>
        <section className="padding-top-bottom " style={WhiteBG} />
      </div>
    </div>
  );
}
