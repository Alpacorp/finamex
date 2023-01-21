import { FC } from "react";

import "./styles.css";

interface CtaProps {
  children: React.ReactNode;
}

export const Cta: FC<CtaProps> = ({ children }) => {
  return <div className="cta">{children}</div>;
};
