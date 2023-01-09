import "./styles.css";
import "../../components/gc-styles.css";

export const Info = () => {
  return (
    <section className="info">
      <main>
        <div className="container">
          <p>
            La inverfobia es un{" "}
            <span className="highlight">padecimiento silencioso</span> que ataca
            a millones de mexicanos.
          </p>
          <p>
            No importa su estado financiero, género ni edad, sus síntomas están
            presentes en nuestro día a día y{" "}
            <span className="highlight">pueden manifestarse</span> de múltiples
            formas.
          </p>
          <p>
            <span className="highlight">
              La buena noticia es que la Inverfobia tiene cura.
            </span>{" "}
            Completa el siguiente formulario y descubre la solución específica
            para enfrentar sus síntomas.
          </p>
        </div>
      </main>
    </section>
  );
};
