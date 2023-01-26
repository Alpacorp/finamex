import { FC, useContext, useEffect, useState } from "react";

import ScoreContext from "../../context/ScoreContext";

import { Fondos, Home, Pesos, Trading } from "../../assets/icons/";
import { CardResponse } from "../CardResponse";
import { Button } from "../Button";
import { Loading } from "../Loading";

import "../../components/component-styles.css";
import "./styles.css";
import { Cta } from "../Cta";

export const Responses: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pesos, setPesos] = useState<boolean>(false);
  const [fondos, setFondos] = useState<boolean>(false);
  const [trading, setTrading] = useState<boolean>(false);
  const [home, setHome] = useState<boolean>(false);

  const { score } = useContext(ScoreContext);

  const validatePesos = () => {
    if (score >= 1 && score <= 7) {
      setPesos(true);
    } else {
      setPesos(false);
    }
  };

  const validateFondos = () => {
    if (score >= 8 && score <= 11) {
      setFondos(true);
    } else {
      setFondos(false);
    }
  };

  const validateTrading = () => {
    if (score >= 12 && score <= 15) {
      setTrading(true);
    } else {
      setTrading(false);
    }
  };

  const validateHome = () => {
    if (score >= 16) {
      setHome(true);
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
      <Loading
        open={loading}
        text="Espera un momento mientras escribimos tu receta"
      />
      <div className="container">
        <CardResponse
          active={pesos}
          subtitle={"Tu cura contra la inverfobia es"}
          title={"Finamex +Pesos"}
          description={
            "Invierte desde $100 y despídete de la inverfobia tomando el control de tu dinero."
          }
          link={
            "https://www.finamex.com.mx/general/mas-pesos?utm_source=landing-page&utm_id=inverfobia"
          }
        >
          <Pesos color={"#F9A826"} />
        </CardResponse>
        <CardResponse
          active={fondos}
          subtitle={"Tu tratamiento ideal es"}
          title={"Finamex Fondos"}
          description={
            "Cura la inverfobia con más de 30 fondos en una estrategia que tu mismo puedes crear en nuestra app."
          }
          link={
            "https://www.finamex.com.mx/general/fondos?utm_source=landing-page&utm_id=inverfobia"
          }
        >
          <Fondos color={"#A2E68A"} />
        </CardResponse>
        <CardResponse
          active={trading}
          subtitle={"La solución indicada para ti es"}
          title={"Finamex Trading"}
          description={
            "La inverfobia se va cuando te vuelves dueño de acciones en los mercado más importantes."
          }
          link={
            "https://www.finamex.com.mx/general/finamex-trading/?utm_source=landing-page&utm_id=inverfobia"
          }
        >
          <Trading color={"#46D7FB"} />
        </CardResponse>
        <CardResponse
          active={home}
          subtitle={"Alíviate de la inverfobia con"}
          title={"Finamex Patrimonial"}
          description={
            "Nuestros expertos analizan lo mejor para ti y te ofrecen las soluciones para olvidarte de la inverfobia para siempre."
          }
          link={
            "https://www.finamex.com.mx/inversiones/estrategia-patrimonial/?utm_source=landing-page&utm_id=inverfobia"
          }
        >
          <Home color={"#8FA4E3"} />
        </CardResponse>
      </div>
      <Cta>
        <Button
          type="link"
          link="https://www.finamex.com.mx/?utm_source=landing-page&utm_id=inverfobia"
          text="Conoce más de Finamex"
        />
      </Cta>
    </section>
  );
};
