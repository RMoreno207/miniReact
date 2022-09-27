import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className={"nav-bar"}>
        <Link to="/home">Home</Link>
        <Link to="/form">Form</Link>
        <Link to="/list">News</Link>
      </nav>
    )
  }
}

export default Nav;
