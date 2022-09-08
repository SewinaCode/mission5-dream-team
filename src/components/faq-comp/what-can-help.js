import React from "react";
import "./what-can-help.css";
import {
  GreyBlue,
  HeadingWht,
  BlueText,
  DarkBlueText,
} from "../variants-comp/comp-variants";
import { HeadingTxt, Link, ParaText } from "../sec-heading";
import HelpFeatHeading from "./help-feat";

//Image import
import AccidentClaims from "../../assets/accident_claims.png";
// import Membership from "../../assets/membership_benefits.png";
// import Payment from "../../assets/payment_enquiries.png";
// import PolicyRelation from "../../assets/policy_related_enquiries.png";

export default function WhatHelp() {
  return (
    <div style={GreyBlue}>
      <HeadingTxt
        className="section-header lg-weight xlg-font-header med-height pad-top-big"
        variant={HeadingWht}
        text="What can we help you with?"
      />
      <div className="can-help-align">
        <ParaText
          className="section-link xsml-weight sml-font-header card-height"
          variant={HeadingWht}
          text="If you can’t find the answer you’re looking for, please"
        />
        <div>
          <Link
            path="/#"
            className="section-link med-weight sml-font-header feat-height contact-us-pad"
            variant={BlueText}
            text="contact us"
          />
        </div>
      </div>
      <HelpFeatHeading
        classname="section-link bt-font-header med-weight card-height can-help-column can-help-baseline"
        variant={DarkBlueText}
        text="Accidents Claims"
        image={AccidentClaims}
      />
    </div>
  );
}
