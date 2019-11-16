import React from "react";
import Search from "./Search";

const Navbar = ({ NavbarSearchProps }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">
          {" "}
          <i className="fab fa-github icone"></i>Github User Finder
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <Search SearchProps={NavbarSearchProps} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
