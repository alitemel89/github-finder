import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1 className="">
        <FaGithub style={{ float: "left", fontSize: 36 }} /> &nbsp;
        {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

export default Navbar;
