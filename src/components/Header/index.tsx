import { FC } from "react";
import { Link } from "react-router-dom";

import { finamexLogo } from "../../assets/images";

import "../../components/component-styles.css";
import "./styles.css";

export const Header: FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <a className="link-logo" href="/">
            <img src={finamexLogo} alt="logo" />
          </a>
        </div>
      </nav>
    </header>
  );
};
