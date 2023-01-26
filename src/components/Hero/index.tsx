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
            <h1>
              adios <br />
              inverfobia
            </h1>
            <Info />
          </div>
          <div>{children}</div>
        </div>
      </aside>
    </section>
  );
};
