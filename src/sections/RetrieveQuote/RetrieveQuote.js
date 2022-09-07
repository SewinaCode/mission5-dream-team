import React from "react";
import Buttons from "../components/Buttons/Buttons";
import "./intro-section.css";
import {
  GreenBorderBtn,
  GreenFillBtn,
} from "../components/Buttons/variants/variants";


export default function Introduction() {
  return (
    <>
      <section className="bg-carImg">
        <section className="text-section">
          <div className="text">
            <h1 className="inter-font">Car Insurance</h1>
            <h2 className="openSans-font">
              Insure your car from the car experts. It’s quick, easy and
              affordable.
            </h2>
          </div>
          <Buttons
            className="inter-font borderbtn quote-btns big-letter-space greenborder"
            variant={GreenBorderBtn}
            text="RETRIEVE QUOTE"
          />
          <Buttons
            className="inter-font filledbtns quote-btns green"
            variant={GreenFillBtn}
            text="GET A QUOTE"
          />
        </section>
      </section>
    </>
  );
}