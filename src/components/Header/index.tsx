import { FC } from "react";

import "../../components/component-styles.css";
import "./styles.css";

export const Header: FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <a className="link-logo" href="/">
            <h1 className="logo">
              <span className="highlight-gray">adios</span>inverfobia
              <span className="highlight-gray">.com</span>
            </h1>
          </a>
          <div className="bye">👋</div>
        </div>
      </nav>
    </header>
  );
};
