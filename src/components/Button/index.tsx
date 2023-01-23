import { FC } from "react";

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
          <a href={link} target="_blank">
            {text}
          </a>
        </div>
      )}
    </>
  );
};
