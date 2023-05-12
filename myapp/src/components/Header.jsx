import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav className="bar">
      <h1>INBOUNDSYS ASSIGNMENT</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/login"}>Login</Link>
      </main>
    </nav>
  );
};

export default Header;
