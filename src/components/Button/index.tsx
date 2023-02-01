import { FC } from "react";

import "./styles.css";

interface ButtonProps {
  link?: string;
  text: string;
  type: "button" | "link";
  target?: string;
}

export const Button: FC<ButtonProps> = ({
  type,
  text,
  link,
  target = "_blank",
}) => {
  return (
    <>
      {type === "button" ? (
        <div className="button">
          <button>{text}</button>
        </div>
      ) : (
        <div className="button">
          <a href={link} target={target}>
            {text}
          </a>
        </div>
      )}
    </>
  );
};
