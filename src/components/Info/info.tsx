import "./styles.css";
import "../../components/gc-styles.css";

export const Info = () => {
  return (
    <section className="info">
      <main>
        <div className="container">
          <div className="content">
            <p>
              La inverfobia es un{" "}
              <span className="highlight">padecimiento silencioso</span> que
              ataca a{" "}
              <span className="highlight-yellow">millones de mexicanos.</span>
            </p>
            <p>
              No importa su estado financiero, género ni edad,{" "}
              <span className="highlight-yellow">
                {" "}
                sus síntomas están presentes
              </span>{" "}
              en nuestro día a día y{" "}
              <span className="highlight">pueden manifestarse</span> de
              múltiples formas.
            </p>
            <p>
              <span className="highlight">
                La buena noticia es que la Inverfobia tiene cura.
              </span>{" "}
              Completa el siguiente formulario y{" "}
              <span className="highlight-yellow">descubre la solución</span>{" "}
              específica para enfrentar sus síntomas.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};
