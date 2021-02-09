import { render } from "@testing-library/react";
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header-nav">
      <nav className="navbar">
        <div className="logo">
          <a href="/">Movies Info</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
