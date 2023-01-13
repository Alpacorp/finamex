import { saveMoney } from "../../assets/images";
import "./styles.css";

export const HeroImage = () => {
  return (
    <aside className="hero-image">
      <div className="container">
        <img className="image" src={saveMoney} alt="Save money" />
      </div>
    </aside>
  );
};
