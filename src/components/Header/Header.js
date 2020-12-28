import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ themeToggler, theme }) => {
  return (
    <header>
      <nav className="nav container">
        <Link to="/">
          <h1>Where in the World?</h1>
        </Link>
        <div
          onClick={themeToggler}
          className="moon"
          style={{ cursor: "pointer" }}
        >
          <i className={theme === "light" ? "far fa-moon" : "fas fa-moon"}></i>
          <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
