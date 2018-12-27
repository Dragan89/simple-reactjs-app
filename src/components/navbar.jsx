import React from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("Navbar - Render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="http://localhost:3000/">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
