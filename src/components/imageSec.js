import React from "react";

export default function ImageSections({ name, imageUrl }) {
  return <img src={imageUrl} alt={name}></img>;
}
