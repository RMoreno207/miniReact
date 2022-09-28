import React, { Component } from "react";
import { userContext } from "../../../context/userContext"; //Contexto de usuario
import { Link } from 'react-router-dom';
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className={"nav-bar"}>
        <Link to="/home">Home</Link>
        <Link to="/form">Form</Link>
        <Link to="/list">News</Link>
        {/* Mostrar nombre de usuario introducido por input desde la home */}
        <userContext.Consumer>
          {({ logout, user }) => user ?
            <span>
              Bienvenido  {user} !!&nbsp;
              <button variant="contained" size="small" onClick={logout}>
                Logout
              </button>
            </span>
            : ""
          }
        </userContext.Consumer>
      </nav>
    )
  }
}

export default Nav;
