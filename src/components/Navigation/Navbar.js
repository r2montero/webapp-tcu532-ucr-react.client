import React, { Component } from "react";
import { Link } from "react-router-dom";
import {IoExitSharp} from 'react-icons/io5';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {" "}
              TCU Economia Solidaria{" "}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/materiales">Materiales</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/temas">Temas</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Salir <IoExitSharp/></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
