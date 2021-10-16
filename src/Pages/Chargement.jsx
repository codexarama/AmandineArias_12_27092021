import React from 'react';

import logo from '../Assets/logo.svg';
import Banner from '../Components/UI/Banner';
import loader from '../Assets/loader.svg';

import '../Styles/banner.css';
import '../Styles/alerte.css';

/**
 * Render Chargement component
 * @function Chargement
 * @param {object} props
 * @param {string} props.logo > logo src
 * @param {string} props.loader > loader src
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Loader() {
  return (
    <main>
      <Banner logo={logo} message="En cours de chargement..." />
      <img className="alert-msg" src={loader} alt="loader" />
    </main>
  );
}
