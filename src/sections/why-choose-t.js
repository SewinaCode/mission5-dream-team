import React from "react";
import "../components/sec-heading.css";
import "../components/card-comp.css";
import "../components/faq-comp/what-can-help.css";

//importing components variants
import { WhiteBG } from "../components/variants-comp/comp-variants";
import { HeadingTxt, ParaText } from "../components/sec-heading";
import {
  DarkBlackText,
  BlueText,
} from "../components/variants-comp/comp-variants";
import Buttons from "../components/Buttons/Buttons";
import { GreenFillBtn } from "../components/Buttons/variants/variants";

//Importing Images
import Like from "../assets/Like Button.png";
import Office from "../assets/Office.png";
import Candidate from "../assets/Candidate.png";

function Reasons({ icon, name, headText, paraText }) {
  return (
    <div className="can-help-column">
      <section className="img-text" />
      <img className="add-margin" src={icon} alt={name} />
      <HeadingTxt
        className="section-paragraph med-weight med-font-header feat-height"
        variant={BlueText}
        text={headText}
      />
      <ParaText
        className="section-paragraph xsml-weight sml-font-header card-height add-top-padding no-margin"
        variant={BlueText}
        text={paraText}
      />
    </div>
  );
}

function WhyChooseT() {
  return (
    <div className="general-padding" style={WhiteBG}>
      <HeadingTxt
        className="section-header lg-weight xlg-font-header med-height add-margin"
        variant={DarkBlackText}
        text="Why choose Turners Car Insurance?"
      />
      <section className="space-evenly">
        <Reasons
          icon={Like}
          name="like-button"
          headText="We do the right thing"
          paraText="100% intergrity in everything we do"
        />

        <Reasons
          icon={Office}
          name="office-button"
          headText="We put you first"
          paraText="Everyday we strive to make it easy for our customers"
        />

        <Reasons
          className="reason-padding"
          icon={Candidate}
          name="candidate-button"
          headText="Easy Claims"
          paraText="We know our cars well enough to guide you to an easy and stress-free claiming process."
        />
      </section>
      <section style={WhiteBG} className="padding-top-bottom" />
      <div className="can-help-column">
        <Buttons
          className="inter-font filledbtns quote-btns green"
          variant={GreenFillBtn}
          text="GET A QUOTE"
        />
      </div>
    </div>
  );
}

export { Reasons, WhyChooseT };
