import { FC } from "react";

import "../../components/component-styles.css";
import "./styles.css";

export const Header: FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <a className="link-logo" href="/">
            <h2 className="logo">
              adiosinverfobia
              <span className="highlight">.com</span>
            </h2>
          </a>
        </div>
      </nav>
    </header>
  );
};
