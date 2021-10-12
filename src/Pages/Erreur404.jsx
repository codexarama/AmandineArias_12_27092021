import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/UI/Banner';
import logo from '../Assets/logo.svg';
import '../Styles/accueil.css';
import '../Styles/alerte.css';

/**
 * Render Error component
 * @extends Component
 * @returns {Reactnode} jsx injected in DOM
 */

export default function Erreur404() {
  return (
    <main className="accueil">
      <Banner logo={logo} message="Code erreur" />
      <section className="alert-msg error-content">
        <p className="error-number">404</p>
        <p className="error-message oups">Oups !</p>
        <p className="error-message">La page que vous demandez n'existe pas.</p>
        <Link className="nav-link error-back" to="/">
          Retourner sur la page d’accueil
        </Link>
      </section>
    </main>
  );
}
