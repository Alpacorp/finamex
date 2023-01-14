import { FC } from "react";

import "./styles.css";

interface ButtonProps {
  type: "button" | "link";
  text: string;
  link?: string;
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
          <a href={link} target="_blank">
            {text}
          </a>
        </div>
      )}
    </>
  );
};
