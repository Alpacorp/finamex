import "./styles.css";
import "../../components/gc-styles.css";

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="container">
          <a className="link-logo" href="/">
            <h1 className="logo">
              <span className="highlight">adios</span>inverfobia
              <span className="highlight">.com</span>
            </h1>
          </a>
        </div>
      </nav>
    </header>
  );
};
