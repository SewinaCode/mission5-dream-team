import React from "react";
import "./sec-heading.css";
import "./card-comp.css";

function MiddleBar({ className, variant, text }) {
  return (
    <div className={className} style={variant}>
      {text}
    </div>
  );
}

function NormalCard({ variant, heading, desc, bar }) {
  return (
    <div className="small-card main-card card-comp-pad" style={variant}>
      <div className="content-padding">
        {heading}
        {desc}
      </div>
      {bar}
    </div>
  );
}

function MostPopular({ variant, heading, desc, bar }) {
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
    </div>
  );
}

export { NormalCard, MostPopular, MiddleBar };
