import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1 className="">
        <FaGithub style={{ float: "left", fontSize: 36 }} /> &nbsp;
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

export default Navbar;
