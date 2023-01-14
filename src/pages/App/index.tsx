import { FC, useContext } from "react";

import ScoreContext from "../../context/ScoreContext";

import { Target } from "../Target";
import { Cta } from "../../components/Cta/Cta";
import { Form } from "../../components/Form";
import { Hero } from "../../components/Hero";
import { HeroImage } from "../../components/HeroImage";
import { ScrollDown } from "../../components/ScrollDown/index";

import "../../global-styles.css";

export const App: FC = () => {
  const { score } = useContext(ScoreContext);

  return (
    <>
      {score === 0 ? (
        <div>
          <Hero>
            <HeroImage />
          </Hero>
          <Cta>
            <ScrollDown />
          </Cta>
          <Form />
        </div>
      ) : (
        <Target />
      )}
    </>
  );
};
