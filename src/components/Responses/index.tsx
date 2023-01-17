import { FC, useContext, useEffect, useState } from "react";

import ScoreContext from "../../context/ScoreContext";

import { Fondos, Home, Pesos, Trading } from "../../assets/icons/";
import { CardResponse } from "../CardResponse";
import { Button } from "../Button";

import "../../components/component-styles.css";
import "./styles.css";
import { Loading } from "../Loading";

export const Responses: FC = () => {
  const [color, setColor] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [pesos, setPesos] = useState<boolean>(false);
  const [fondos, setFondos] = useState<boolean>(false);
  const [trading, setTrading] = useState<boolean>(false);
  const [home, setHome] = useState<boolean>(false);

  const { score } = useContext(ScoreContext);

  const validatePesos = () => {
    if (score >= 1 && score <= 7) {
      setPesos(true);
      setColor("#F9A826");
    } else {
      setPesos(false);
    }
  };

  const validateFondos = () => {
    if (score >= 8 && score <= 11) {
      setFondos(true);
      setColor("#A2E68A");
    } else {
      setFondos(false);
    }
  };

  const validateTrading = () => {
    if (score >= 12 && score <= 15) {
      setTrading(true);
      setColor("#46D7FB");
    } else {
      setTrading(false);
    }
  };

  const validateHome = () => {
    if (score >= 16) {
      setHome(true);
      setColor("#8FA4E3");
    } else {
      setHome(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    scrollToTop();

    validatePesos();
    validateFondos();
    validateTrading();
    validateHome();
  }, [score]);

  return (
    <section className="responses">
      <Loading open={loading} />
      <div className="container">
        <CardResponse
          active={pesos}
          title={"Tu alternativa de inversión es Finamex +Pesos"}
          description={
            "Elige el plazo que más le convenga a lo que inviertas, teniendo siempre el control"
          }
          link={"https://www.finamex.com.mx/general/mas-pesos"}
        >
          <Pesos color={pesos ? color : ""} />
        </CardResponse>
        <CardResponse
          active={fondos}
          title={"El producto ideal para ti es Finamex Fondos"}
          description={
            "Pasa al siguiente nivel adquiriendo más de 30 Fondos de Inversión de Finamex y varias reconocidas instituciones"
          }
          link={"https://www.finamex.com.mx/general/fondos"}
        >
          <Fondos color={fondos ? color : ""} />
        </CardResponse>
        <CardResponse
          active={trading}
          title={"La solución que buscas es Finamex Trading"}
          description={
            "Opera de manera fácil y segura en los mercados internacionales más importantes"
          }
          link={"https://www.finamex.com.mx/general/finamex-trading/"}
        >
          <Trading color={trading ? color : ""} />
        </CardResponse>
        <CardResponse
          active={home}
          title={
            "Para tus necesidades de crecimiento, tu opción es Finamex Patrimonial"
          }
          description={
            "Construye una estrategia personal con la ayuda de nuestros expertos"
          }
          link={
            "https://www.finamex.com.mx/inversiones/estrategia-patrimonial/"
          }
        >
          <Home color={home ? color : ""} />
        </CardResponse>
      </div>
      <Button
        type="link"
        link="https://www.finamex.com.mx/"
        text="Más Información"
      />
    </section>
  );
};
