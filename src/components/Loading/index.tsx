import { FC } from "react";
import "./styles.css";

interface LoadingProps {
  open: boolean;
}

export const Loading: FC<LoadingProps> = ({ open }) => {
  return (
    <>
      {open && (
        <div className="loading">
          <div className="loading__spinner" />
          <div className="wave">👋</div>
          <div>
            <h2>
              Estamos validando la información para indicarte la mejor solución
              a la <strong className="highlight-yellow">Inverfobia</strong>
            </h2>
          </div>
        </div>
      )}
    </>
  );
};
