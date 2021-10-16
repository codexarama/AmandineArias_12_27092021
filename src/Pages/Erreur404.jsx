import React from 'react';
import { Link } from 'react-router-dom';

import Banner from '../Components/UI/Banner';
import logo from '../Assets/logo.svg';

import '../Styles/alerte.css';

/**
 * Render Error404 component
 * @function Erreur404
 * @param {object} props
 * @param {string} props.logo > logo src
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Erreur404() {
  return (
    <main>
      <Banner logo={logo} message="Code erreur" />
      <section className="alert-msg error-content">
        <p className="error-number">404</p>
        <p className="error-message error-oups">Oups !</p>
        <p className="error-message">La page que vous demandez n'existe pas.</p>
        <Link className="nav-link error-back" to="/">
          Retourner sur la page d’accueil
        </Link>
      </section>
    </main>
  );
}
