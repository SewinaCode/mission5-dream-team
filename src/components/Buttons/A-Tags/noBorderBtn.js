import React from "react";

export default function NoBorderBtn({ className, text, variant, click }) {
  return (
    <>
      <a href="#" className={className} style={variant} onClick={click}>
        {text}
      </a>
    </>
  );
}
