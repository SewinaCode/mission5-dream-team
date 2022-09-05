import NoBorderBtn from "../../components/Buttons/A-Tags/noBorderBtn";
import {
  blackTxt,
  smlBlueTxt,
} from "../../components/Buttons/variants/variants";
import "../header.css";

export default function HeaderNav() {
  return (
    <div className="spacing">
      <div className="headerNav">
        <NoBorderBtn
          className="mont-font no-underline sml-weight"
          text="Cars"
          variant={smlBlueTxt}
        />
        <NoBorderBtn
          className="mont-font no-underline sml-weight"
          text="Turner's Subscriptions"
          variant={smlBlueTxt}
        />
        <NoBorderBtn
          className="mont-font no-underline sml-weight"
          text="Trucks & Machinery"
          variant={smlBlueTxt}
        />
        <NoBorderBtn
          className="mont-font no-underline sml-weight"
          text="Damaged & End of Life"
          variant={smlBlueTxt}
        />
        <NoBorderBtn
          className="mont-font no-underline sml-weight"
          text="Motorcycles"
          variant={smlBlueTxt}
        />
        <NoBorderBtn
          className="mont-font no-underline sml-weight"
          text="General Goods"
          variant={smlBlueTxt}
        />
        <NoBorderBtn
          className="mont-font no-underline sml-weight"
          text="Buses, Caravans & Motorhomes"
          variant={smlBlueTxt}
        />
      </div>
      <div className="black-btns">
        <NoBorderBtn
          className="mont-font no-underline sml-weight"
          text="Contact"
          variant={blackTxt}
        />
        <NoBorderBtn
          className="mont-font no-underline sml-weight"
          text="中文"
          variant={blackTxt}
        />
      </div>
    </div>
  );
}
