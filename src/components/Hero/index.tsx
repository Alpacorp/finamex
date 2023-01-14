import { FC } from "react";

import { Info } from "../Info/info";

import "../../components/component-styles.css";
import "./styles.css";

interface HeroProps {
  children: React.ReactNode;
}

export const Hero: FC<HeroProps> = ({ children }) => {
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
