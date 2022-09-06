import React from "react";
import { NormalCard, MiddleBar } from "../components/card-comp";
import { HeadingTxt, ParaText, Link } from "../components/sec-heading";
import {
  HeadingBlk,
  LinkHeader,
  BlueText,
  NormalVariant,
  WhiteBar,
  BlueBar,
} from "../components/variants-comp/comp-variants";
import "./policy-sec.css";
import "../components/card-comp.css";

export default function Policies() {
  return (
    <div className="section-pad">
      <div className="section-txt">
        <HeadingTxt
          className="section-header xlg-font-header lg-weight med-height"
          variant={HeadingBlk}
          text="Compare our car insurance policies"
        />
        <ParaText
          className="section-paragraph med-font-header xsml-weight lg-height no-margin"
          variant={HeadingBlk}
          text="Compare car insurance plans to find the right option for you and your loved ones."
        />
        <Link
          className="section-link xsml-weight xs-font-header sml-height"
          variant={LinkHeader}
          text="Family perks and discounts available."
        />
      </div>
      <div className="policy-cards">
        <NormalCard
          variant={NormalVariant}
          heading={
            <HeadingTxt
              className="section-header lg-font-header sml-weight bt-height"
              variant={BlueText}
              text="Third Party Property Damage"
            />
          }
          desc={
            <ParaText
              className="section-header xsml-weight sml-font-header "
              text="Cover for your car if it is damaged by fire, stolen, or you accidentally damage someone else’s property with your car."
            />
          }
          bar={
            <MiddleBar
              className="section-header med-weight bt-font-header xsml-height"
              variant={WhiteBar}
              text="Benefits & Features"
            />
          }
        />
        <NormalCard
          variant={NormalVariant}
          heading={
            <HeadingTxt
              className="section-header lg-font-header sml-weight bt-height"
              variant={BlueText}
              text="Third Party Property Damage"
            />
          }
          desc={
            <ParaText
              className="section-header xsml-weight sml-font-header "
              text="Cover for your car if it is damaged by fire, stolen, or you accidentally damage someone else’s property with your car."
            />
          }
          bar={
            <MiddleBar
              className="section-header med-weight bt-font-header xsml-height"
              variant={WhiteBar}
              text="Benefits & Features"
            />
          }
        />
        <NormalCard
          variant={NormalVariant}
          heading={
            <HeadingTxt
              className="section-header lg-font-header sml-weight bt-height"
              variant={BlueText}
              text="Third Party Property Damage"
            />
          }
          desc={
            <ParaText
              className="section-header xsml-weight sml-font-header "
              text="Cover for your car if it is damaged by fire, stolen, or you accidentally damage someone else’s property with your car."
            />
          }
          bar={
            <MiddleBar
              className="section-header med-weight bt-font-header xsml-height"
              variant={WhiteBar}
              text="Benefits & Features"
            />
          }
        />
      </div>
    </div>
  );
}
