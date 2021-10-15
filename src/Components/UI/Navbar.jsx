import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import propTypes from 'prop-types';

import logo from '../../Assets/logo.svg';

import '../../Styles/navbar.css';

/**
 * Render the Navbar component
 * @function Navbar
 * @param {object} props
 * @param {string} props.logo > logo src
 * @param {string} props.url > url path
 * @returns {Reactnode} jsx injected in DOM
 */

export default function Navbar() {
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
              to={`${url}/Profil`}
            >
              Profil
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName={'active'}
              to={`${url}/Réglages`}
            >
              Réglages
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to={`${url}/Communauté`}
            >
              Communauté
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

/**
 * PropTypes Navbar component
 */
 Navbar.propTypes = {
  url: propTypes.string,
  logo: propTypes.string,
};
