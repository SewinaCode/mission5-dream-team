import React from "react";
import {
  NormalCard,
  MiddleBar,
  MostPopular,
  Features,
  Cons,
  Benefit,
} from "../components/card-comp";
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
  Grey,
} from "../components/variants-comp/comp-variants";
import "./policy-sec.css";
import "../components/card-comp.css";
import Buttons from "../components/Buttons/Buttons";
import { GreenFillBtn } from "../components/Buttons/variants/variants";

export default function Policies() {
  return (
    <div className="section-pad" style={Grey}>
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
          lists={
            <ul className="list-styling content-padding">
              <li className="list-padding">
                <Features variant={BlackText} text="Transport cover" />
              </li>
              <li className="list-padding">
                <Features variant={BlackText} text="Replacement car cover" />
              </li>
              <li className="list-padding">
                <Features
                  variant={BlackText}
                  text="Damage by uninsured drivers"
                />
              </li>
              <li className="list-padding">
                <Cons
                  variant={BlackText}
                  text="Emergency travel, accommodation and
                        repairs"
                />
              </li>
              <li className="list-padding">
                <Cons variant={BlackText} text="Towing and storage costs" />
              </li>
            </ul>
          }
          options={
            <Benefit
              lists={
                <ul className="list-styling default-pad-remove">
                  <li className="">
                    <Features
                      variant={BlackText}
                      text="Free windowscreen and glass replacement"
                    />
                  </li>
                </ul>
              }
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
          lists={
            <ul className="list-styling content-padding">
              <li className="list-padding">
                <Features
                  variant={BlackText}
                  text="Transport and trailer cover "
                />
              </li>
              <li className="list-padding">
                <Features
                  variant={BlackText}
                  text="Windscreen and window glass cover"
                />
              </li>
              <li className="list-padding">
                <Features
                  variant={BlackText}
                  text="Replacement of stolen keys and recoding of locks"
                />
              </li>
              <li className="list-padding">
                <Features
                  variant={BlackText}
                  text="Lifetime guarantee on repairs we arrange"
                />
              </li>
              <li className="list-padding">
                <Features
                  variant={BlackText}
                  text="Emergency travel, accommodation and
repairs"
                />
              </li>
              <li className="list-padding">
                <Features variant={BlackText} text="Towing and storage costs" />
              </li>
              <li className="list-padding">
                <Features variant={BlackText} text="Replacement car covers" />
              </li>
            </ul>
          }
          options={
            <Benefit
              lists={
                <ul className="list-styling default-pad-remove">
                  <li className="">
                    <Features
                      variant={BlackText}
                      text="Hire car after an event"
                    />
                  </li>
                  <li className="list-padding">
                    <Features variant={BlackText} text="Roadside assistance" />
                  </li>
                  <li>
                    <Features
                      variant={BlackText}
                      text="Free windowscreen and glass replacement"
                    />
                  </li>
                </ul>
              }
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
          lists={
            <ul className="list-styling content-padding">
              <li className="list-padding">
                <Features
                  variant={BlackText}
                  text="Transport and trailer cover"
                />
              </li>
              <li className="list-padding">
                <Cons
                  variant={BlackText}
                  text="Windscreen and window glass cover"
                />
              </li>
              <li className="list-padding">
                <Features
                  variant={BlackText}
                  text="Replacement of stolen keys and recoding of locks"
                />
              </li>
              <li className="list-padding">
                <Features
                  variant={BlackText}
                  text="Emergency travel, accommodation and
                  repairs"
                />
              </li>
              <li className="list-padding">
                <Features variant={BlackText} text="Towing and storage costs" />
              </li>
              <li className="list-padding">
                <Features variant={BlackText} text="Replacement car cover" />
              </li>
            </ul>
          }
          options={
            <Benefit
              lists={
                <ul className="list-styling default-pad-remove">
                  <li className="">
                    <Features
                      variant={BlackText}
                      text="Free windowscreen and glass replacement"
                    />
                  </li>
                </ul>
              }
            />
          }
        />
      </div>
      <Buttons
        className="inter-font filledbtns quote-btns green"
        variant={GreenFillBtn}
        text="GET A QUOTE"
      />
    </div>
  );
}
