import { saveMoney } from "../../assets/images";
import "../../components/gc-styles.css";
import { Info } from "../Info/info";
import { ScrollDown } from "../ScrollDown";
import "./styles.css";

export const Hero = ({ children }: any) => {
  return (
    <section className="hero">
      <aside>
        <div className="container">
          <div className="main-message">
            <h3 className="highlight">
              adiós <span className="wave">👋</span>
            </h3>
            <h1>inverfobia</h1>
            <Info />
          </div>
          <div>{children}</div>
        </div>
      </aside>
    </section>
  );
};
