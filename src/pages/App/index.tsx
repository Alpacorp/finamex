import { FC, useContext, useEffect, useState } from "react";

import ScoreContext from "../../context/ScoreContext";

import { Target } from "../Target";
import { Cta } from "../../components/Cta";
import { Form } from "../../components/Form";
import { Hero } from "../../components/Hero";
import { ScrollDown } from "../../components/ScrollDown/index";
import { Loading } from "../../components/Loading";

import { typeDevice } from "../../utils";

import "../../global-styles.css";

export const App: FC = () => {
  const { score, setDetectedDevice } = useContext(ScoreContext);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setDetectedDevice(typeDevice());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Loading open={loading} />
      {score === 0 ? (
        <div>
          <Hero></Hero>
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
