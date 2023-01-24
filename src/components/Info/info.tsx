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
              La <strong>inverfobia</strong> es un padecimiento silencioso que
              ataca a millones de mexicanos.
            </p>
            <p>
              <strong>Es un miedo a invertir que paraliza tu dinero </strong>
              sin importar estado financiero, género ni edad, que está en
              nuestro día a día y se manifiesta de múltiples formas.
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
