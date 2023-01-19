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
              No importa su estado financiero, género ni edad,{" "}
              <strong>
                sus síntomas están presentes en nuestro día a día{" "}
              </strong>{" "}
              y pueden manifestarse de múltiples formas.
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
