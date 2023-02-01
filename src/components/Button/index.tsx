import { FC } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

interface ButtonProps {
  link?: string;
  text: string;
  type: "button" | "link";
}

export const Button: FC<ButtonProps> = ({ type, text, link }) => {
  return (
    <>
      {type === "button" ? (
        <div className="button">
          <button>{text}</button>
        </div>
      ) : (
        <div className="button">
          <Link to={`${link}`}>{text}</Link>
        </div>
      )}
    </>
  );
};
