import React from "react";
import "./sec-heading.css";

function HeadingTxt({ className, text, variant }) {
  return (
    <h1 className={className} style={variant}>
      {text}
    </h1>
  );
}

function ParaText({ className, text, variant }) {
  return (
    <p className={className} style={variant}>
      {text}
    </p>
  );
}

function Link({ className, text, variant, path }) {
  return (
    <a href={path} className={className} style={variant}>
      {text}
    </a>
  );
}

export { HeadingTxt, ParaText, Link };
