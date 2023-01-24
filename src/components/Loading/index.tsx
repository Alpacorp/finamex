import { FC } from "react";
import "./styles.css";

interface LoadingProps {
  open: Boolean;
  text?: string;
}

export const Loading: FC<LoadingProps> = ({ open, text }) => {
  return (
    <>
      {open && (
        <div className="loading">
          <div className="loading-spinner" />
          <div>
            <h2>{text ? text : "Cargando..."}</h2>
          </div>
        </div>
      )}
    </>
  );
};
