import React from "react";
import { NormalCard, MiddleBar, MostPopular } from "../components/card-comp";
import { HeadingTxt, ParaText, Link } from "../components/sec-heading";
import {
  BlackText,
  BlueBar,
  BlueText,
  CardVariant,
  HeadingBlk,
  LinkHeader,
  NormalVariant,
  WhiteBar,
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
              className="section-header xsml-weight sml-font-header add-top-padding card-height "
              text="Cover for your car if it is damaged by fire, stolen, or you accidentally damage someone else’s property with your car."
            />
          }
          bar={
            <MiddleBar
              className="section-header med-weight bt-font-header xsml-height add-margin"
              variant={WhiteBar}
              text="Benefits & Features"
            />
          }
        />
        <MostPopular
          variant={CardVariant}
          heading={
            <HeadingTxt
              className="section-header xlg-font-header med-weight med-height"
              variant={BlueText}
              text="Comprehensive Everyday Plus"
            />
          }
          desc={
            <ParaText
              className="section-header xsml-weight sml-font-header card-height"
              variant={BlackText}
              text="Keep yourself fully protected with our most popular cover. We'll cover damage to your car, as well as damage you  cause to someone else's car or property."
            />
          }
          bar={
            <MiddleBar
              className="section-header med-weight med-font-header xsml-height add-margin"
              variant={BlueBar}
              text="MOST POPULAR"
            />
          }
        />
        <NormalCard
          variant={NormalVariant}
          heading={
            <HeadingTxt
              className="section-header lg-font-header sml-weight bt-height add-padding"
              variant={BlueText}
              text="Third Party, Fire & Theft"
            />
          }
          desc={
            <ParaText
              className="section-header xsml-weight sml-font-header add-top-padding card-height "
              text="Basic cover for you if you damage someone else’s property with your car"
            />
          }
          bar={
            <MiddleBar
              className="section-header med-weight bt-font-header xsml-height add-margin add-top-margin"
              variant={WhiteBar}
              text="Benefits & Features"
            />
          }
        />
      </div>
    </div>
  );
}
