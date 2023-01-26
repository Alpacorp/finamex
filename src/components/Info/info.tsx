import { FC } from "react";

import "../../components/component-styles.css";
import "./styles.css";

export const Info: FC = () => {
  return (
    <section className="info">
      <main>
        <div>
          <div className="content">
            <p>
              <strong>El miedo a invertir que paraliza tu dinero </strong>
              sin importar estado financiero, género, ni edad.
            </p>
            <p>
              <strong>
                Es un padecimiento silencioso presente en nuestro día a día
              </strong>{" "}
              que se manifiesta de múltiples formas y ataca a millones de
              mexicanos.
            </p>
            <p>
              <strong className="highlight-yellow">
                La buena noticia es que la Inverfobia tiene cura.
              </strong>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};
