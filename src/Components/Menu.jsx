import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Assets/logo.svg';
import '../Styles/menu.css';

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo Sport See" />
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-evenly">
            <NavLink className="nav-link" activeClassName="active" to="/">
              Accueil
            </NavLink>
            <li className="nav-link">
              {/* <NavLink className="nav-link"  activeClassName="active" to="/profil"> */}
              Profil
              {/* </NavLink> */}
            </li>
            <li className="nav-link">
              {/* <NavLink className="nav-link"  activeClassName="active" to="/reglages"> */}
              Réglages
              {/* </NavLink> */}
            </li>
            <li className="nav-link">
              {/* <NavLink className="nav-link"  activeClassName="active" to="/communaute"> */}
              Communauté
              {/* </NavLink> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
