import "./styles.css";

export const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="container">
          <a href="/">
            <h1 className="logo">adiosalainverfobia</h1>
          </a>
          <ul>
            <li>home</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
