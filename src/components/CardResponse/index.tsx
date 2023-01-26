import { FC } from "react";
import { AlertText } from "../AlterText";

import "./styles.css";

interface CardResponseProps {
  active: boolean;
  children: React.ReactNode;
  description: string;
  link: string;
  subtitle: string;
  title: string;
}

export const CardResponse: FC<CardResponseProps> = ({
  active = true,
  children,
  description,
  link,
  subtitle,
  title,
}) => {
  return (
    <div className={`service ${active ? "active" : "disabled"}`}>
      <a href={link} target="_blank">
        <div className="service-icon">{children}</div>
        <div>
          <span className="service-subtitle">{subtitle}</span>
          <h4 className="service-title">{title}</h4>
          <p className="service-description">{description}</p>
        </div>
        {active && <AlertText />}
      </a>
    </div>
  );
};
