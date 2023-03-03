import { FC, useContext, useEffect, useState } from "react";

import ScoreContext from "../../context/ScoreContext";

import { Fondos, Home, Pesos, Trading } from "../../assets/icons/";
import { CardResponse } from "../CardResponse";
import { Button } from "../Button";
import { Loading } from "../Loading";
import { Cta } from "../Cta";

import { scrollTo } from "../../utils";

import "../../components/component-styles.css";
import "./styles.css";

export const Responses: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pesos, setPesos] = useState<boolean>(false);
  const [fondos, setFondos] = useState<boolean>(false);
  const [trading, setTrading] = useState<boolean>(false);
  const [home, setHome] = useState<boolean>(false);

  const { score } = useContext(ScoreContext);

  const validatePesos = () => {
    if (score >= 3 && score <= 9) {
      setPesos(true);
    } else {
      setPesos(false);
    }
  };

  const validateFondos = () => {
    if (score >= 5 && score <= 9) {
      setFondos(true);
    } else {
      setFondos(false);
    }
  };

  const validateTrading = () => {
    if (score >= 7 && score <= 9) {
      setTrading(true);
    } else {
      setTrading(false);
    }
  };

  const validateHome = () => {
    if (score === 10) {
      setHome(true);
    } else {
      setHome(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    scrollTo();
    validatePesos();
    validateFondos();
    validateTrading();
    validateHome();
  }, [score]);

  return (
    <section className="responses">
      <Loading
        open={loading}
        text="Espera un momento mientras escribimos tu receta ..."
      />
      <div className="container">
        <CardResponse
          active={pesos}
          subtitle={
            "El miedo es normal, pero si paraliza tu dinero es síntoma de algo más. Tu          inverfobia es avanzada pero no te preocupes, el primer paso para curarla es"
          }
          title={"Finamex +Pesos"}
          description={
            "Deposita fácil tus ahorros, selecciona el plazo y verás qué ganancia obtienes de esa inversión. Sin miedo, sin complicaciones."
          }
          link={
            "https://www.finamex.com.mx/general/mas-pesos?utm_source=landing&utm_medium=inverfobiaV1&utm_campaign=resultado-pesos"
          }
        >
          <Pesos color={"#F9A826"} />
        </CardResponse>
        <CardResponse
          active={fondos}
          subtitle={
            "¡Aguas! Tu inverfobia es intermitente y podría hacer que te confundas con tus finanzas, pero juntos vamos a tratarla con"
          }
          title={"Finamex Fondos"}
          description={
            "¡Elige tu estrategia y ve lo fácil que crece tu dinero! Cada fondo tiene un mix de valores para comprar o vender como cualquier acción e invertir seguro."
          }
          link={
            "https://www.finamex.com.mx/general/fondos?utm_source=landing&utm_medium=inverfobiaV1&utm_campaign=resultado-fondos"
          }
        >
          <Fondos color={"#A2E68A"} />
        </CardResponse>
        <CardResponse
          active={trading}
          subtitle={
            "¡Wow! Casi la vences, pero la inverfobia todavía no te deja por completo. Olvídala con"
          }
          title={"Finamex Trading"}
          description={
            "Compra y vende tus acciones favoritas a nivel mundial y nosotros te ayudamos a obtener el mejor rendimiento. ¿Cuál inverfobia?"
          }
          link={
            "https://www.finamex.com.mx/general/finamex-trading/?utm_source=landing&utm_medium=inverfobiaV1&utm_campaign=resultado-trading"
          }
        >
          <Trading color={"#46D7FB"} />
        </CardResponse>
        <CardResponse
          active={home}
          subtitle={
            "¡La Inverfobia no puede contigo! Pero más vale prevenirla con"
          }
          title={"Finamex Patrimonial"}
          description={
            "Arma tu estrategia con nuestros expertos llevando tu rendimiento a lo más alto, y hazte inmune a la Inverfobia protegiendo tus activos en México y el mundo."
          }
          link={
            "https://www.finamex.com.mx/inversiones/estrategia-patrimonial/?utm_source=landing&utm_medium=inverfobiaV1&utm_campaign=resultado-patrimonio"
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
