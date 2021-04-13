import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";

class Navbar extends Component {
  static defaultProps = {
    title: "Github Finder",
  };
 
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1 className="">
          <FaGithub style={{ float: "left", fontSize: 36}} /> &nbsp;
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
