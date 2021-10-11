import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import logo from '../../Assets/logo.svg';
import '../../Styles/navbar.css';

export default function Menu() {
  let { url } = useRouteMatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo Sport See" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-evenly">
            <Link className="nav-link" to="/">
              Accueil
            </Link>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to={`${url}/profil`}
            >
              Profil
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName={'active'}
              to={`${url}/réglages`}
            >
              Réglages
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to={`${url}/communauté`}
            >
              Communauté
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
