import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../Assets/logo.svg';
import Banner from '../Components/UI/Banner';
import avatar from '../Assets/avatar.svg';

import '../Styles/banner.css';
import '../Styles/alerte.css';

/**
 * Render Inconnu component
 * @function Inconnu
 * @param {object} props
 * @param {string} props.logo > logo src
 * @param {string} props.avatar > avatar src
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Inconnu() {
  return (
    <main>
      <Banner logo={logo} message="Cet utilisateur n'est pas enregistré..." />
      <section className="alert-msg avatar">
        <img className="avatar" src={avatar} alt="avatar" />
        <Link className="nav-link error-back" to="/">
          Choisir un autre utilisateur
        </Link>
      </section>
    </main>
  );
}
