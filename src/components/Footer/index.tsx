import { FC } from "react";

import { appleStore, finamexLogoDark, googlePlay } from "../../assets/images";

import "./styles.css";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <img src={finamexLogoDark} alt="logo finamex" />
        </div>
        <div className="description">
          <p>
            Finamex no ofrece créditos de ningún tipo. La oferta de productos
            son los mencionados en esta pagina.
          </p>
          <p>
            Finamex Casa de Bolsa con domicilio en: Javier Barros Sierra 495,
            Piso 16, Colonia Santa Fe, Delegación Álvaro Obregón, Código Postal
            01219, en la Ciudad de México, México.
          </p>
          <p>
            Términos y Condiciones:{" "}
            <a
              href="https://www.finamex.com.mx/Terminos-Y-Condiciones/Terminos-Y-Condiciones"
              target="_blank"
            >
              https://www.finamex.com.mx/Terminos-Y-Condiciones/Terminos-Y-Condiciones
            </a>
          </p>
          <p>Finamex Casa de Bolsa © {new Date().getFullYear()}</p>
          <div className="stores">
            <figure className="app-store">
              <a
                href="https://apps.apple.com/mx/app/finamex/id1522057093"
                target="_blank"
              >
                <img src={appleStore} alt="Disponible en App Store" />
              </a>
            </figure>
            <figure className="google-play">
              <a
                href="https://play.google.com/store/apps/details?id=com.finamex.online&hl=es_MX&gl=US"
                target="_blank"
              >
                <img src={googlePlay} alt="Disponible en Google Play" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </footer>
  );
};
