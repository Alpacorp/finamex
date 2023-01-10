import "./styles.css";
import "../../components/gc-styles.css";

export const Responses = () => {
  return (
    <section className="responses">
      <div className="container">
        <div className="service">
          <a href="#" target="_blank">
            <div>
              <h4 className="service-title">
                Tu alternativa de inversión es Finamex +Pesos
              </h4>
              <p className="service-description">
                Elige el plazo que más le convenga a lo que inviertas, teniendo
                siempre el control
              </p>
            </div>
          </a>
        </div>
        <div className="service">
          <a href="#" target="_blank">
            <h4 className="service-title">
              El producto ideal para ti es Finamex Fondos
            </h4>
            <p className="service-description">
              Pasa al siguiente nivel adquiriendo más de 30 Fondos de Inversión
              de Finamex y varias reconocidas instituciones
            </p>
          </a>
        </div>
        <div className="service">
          <a href="#" target="_blank">
            <h4 className="service-title">
              La solución que buscas es Finamex Trading
            </h4>
            <p className="service-description">
              Opera de manera fácil y segura en los mercados internacionales más
              importantes
            </p>
          </a>
        </div>
        <div className="service">
          <a href="#" target="_blank">
            <h4 className="service-title">
              Para tus necesidades de crecimiento, tu opción es Finamex
              Patrimonial
            </h4>
            <p className="service-description">
              Contruye una estrategia personal con la ayuda de nuestros expertos
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
