import { FC } from "react";

import { saveMoney } from "../../assets/images";

import "./styles.css";

export const HeroImage: FC = () => {
  return (
    <aside className="hero-image">
      <div>
        <img className="image" src={saveMoney} alt="Save money" />
      </div>
    </aside>
  );
};
