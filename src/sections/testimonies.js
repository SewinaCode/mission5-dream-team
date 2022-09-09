import React from "react";
import "../components/sec-heading.css";
import "../components/card-comp.css";
import "./testimonies.css";
import "../components/faq-comp/what-can-help.css";
import {
  DarkGrey,
  DarkBlackText,
} from "../components/variants-comp/comp-variants";
import { HeadingTxt } from "../components/sec-heading";
import {
  ClientCards,
  HighlightClient,
} from "../components/testimonies-comp/client-card";

//Import text images
import TextDesign1 from "../assets/Text & Design 01.png";
import TextDesign2 from "../assets/Text & Design 02.png";
import TextDesign3 from "../assets/Text & Design 03.png";

//Importing icon images
import Pam from "../assets/Pam.png";
import Seth from "../assets/Seth.png";
import Tom from "../assets/Tom.png";
import Next from "../assets/Next.png";
import Back from "../assets/Back.png";

function TestimonySection() {
  //Checking if the button works
  const handleClick = () => {
    console.log("button is working!");
  };
  return (
    <div className="testimony-general-pad" style={DarkGrey}>
      <div className="padding-top-bottom">
        <HeadingTxt
          className="section-header lg-weight xlg-font-header med-height"
          variant={DarkBlackText}
          text="What our client says"
        />
        <section className="padding-top-bottom" />
      </div>
      <div className="can-help-align">
        {" "}
        <img
          onClick={handleClick}
          className="add-padding pointer"
          src={Back}
          alt="back-button"
        />
        <ClientCards
          image={TextDesign1}
          icon={Pam}
          name="testimony-one"
          text="Perfectionist Pam"
        />
        <HighlightClient
          image={TextDesign2}
          icon={Seth}
          name="testimony-one"
          text="Seth the Saver"
        />
        <ClientCards
          image={TextDesign3}
          icon={Tom}
          name="testimony-one"
          text="Tidy Tom"
        />
        <img
          onClick={handleClick}
          className="add-padding pointer"
          src={Next}
          alt="next-button"
        />
      </div>
    </div>
  );
}

export default TestimonySection;
