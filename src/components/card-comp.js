import React from "react";
import "./sec-heading.css";
import "./card-comp.css";
import Tick from "../assets/tick.png";
import Cross from "../assets/X.png";
import Line from "../assets/Line 17.png";
import { BlackText, BlueText } from "../components/variants-comp/comp-variants";
import { HeadingTxt } from "../components/sec-heading";

//Middle Bar component
function MiddleBar({ className, variant, text }) {
  return (
    <div className={className} style={variant}>
      {text}
    </div>
  );
}

//Benefits & Features
function Features({ variant, text }) {
  return (
    <div
      className="feature-text xsml-weight sml-font-header sml-height features-pros"
      style={variant}
    >
      <img className="feature-padding" src={Tick} />
      {text}
    </div>
  );
}

function Cons({ variant, text }) {
  return (
    <div
      className="feature-text xsml-weight sml-font-header sml-height features-pros"
      style={variant}
    >
      <img className="feature-padding" src={Cross} />
      {text}
    </div>
  );
}

//Optional Benefit section
function Benefit({ lists }) {
  return (
    <div className="add-top-margin content-padding">
      <HeadingTxt
        className="feature-text med-weight sml-font-header xsml-height"
        variant={BlueText}
        text="Optional Benefits"
      />
      <img className="padding-top-bottom" src={Line} />
      {lists}
    </div>
  );
}

//Normal Card Component
function NormalCard({ variant, heading, desc, bar, lists, options }) {
  return (
    <div className=" small-card main-card card-comp-pad" style={variant}>
      <div className="content-padding">
        {heading}
        {desc}
      </div>
      {bar}
      {lists}
      {options}
    </div>
  );
}

//Most Popular pricing card component
function MostPopular({ variant, heading, desc, bar, lists, options }) {
  return (
    <div
      className="big-card main-card card-comp-pad selective-margin"
      style={variant}
    >
      <div className="popular-padding">
        {heading}
        {desc}
      </div>
      {bar}
      {lists}
      {options}
    </div>
  );
}

export { NormalCard, MostPopular, MiddleBar, Features, Cons, Benefit };
