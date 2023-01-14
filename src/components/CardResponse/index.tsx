import { FC } from "react";
import { AlertText } from "../AlterText";

import "./styles.css";

interface CardResponseProps {
  title: string;
  description: string;
  active: boolean;
  link: string;
  children: React.ReactNode;
}

export const CardResponse: FC<CardResponseProps> = ({
  children,
  title,
  description,
  active,
  link,
}) => {
  return (
    <div className={`service ${active ? "active" : ""}`}>
      <a href={link} target="_blank">
        <div className="service-icon">{children}</div>
        <div>
          <h4 className="service-title">{title}</h4>
          <p className="service-description">{description}</p>
        </div>
        {active && <AlertText />}
      </a>
    </div>
  );
};
