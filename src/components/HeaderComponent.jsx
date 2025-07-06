import { NavLink, Link } from "react-router-dom";
import "./HeaderComponent.css";

function HeaderComponent() {
  return (
    <header className="header">
      <h1 className="title">Welcome!</h1>
      <nav>
        <ul className="link-list">
          <li>
            <NavLink className="link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/settings">Settings</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderComponent;