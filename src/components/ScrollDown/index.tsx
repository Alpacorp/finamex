import { FC } from "react";

import "./styles.css";

export const ScrollDown: FC = () => {
  return (
    <div
      className="scroll-down"
      title="Desliza para hacer tu test y saber qué tipo de inverfobia tienes"
    >
      <strong>
        Desliza para hacer tu test
        <br />y saber qué tipo de inverfobia tienes
      </strong>
      <div title="Scroll down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <title>Desplázate</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};
