import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/alerte.css';

/**
 * Render Error component
 * @extends Component
 * @returns {Reactnode} jsx injected in DOM
 */

 export default function Erreur404() {
    return (
      <main className="error">
        <div className="error-content">
          <p className="error-number">404</p>
          <p className="error-message">
            Oups ! La page que vous demandez n'existe pas.
          </p>
        </div>
        <Link className="nav-link error-back" to="/">
          Retourner sur la page d’accueil
        </Link>
      </main>
    );
}