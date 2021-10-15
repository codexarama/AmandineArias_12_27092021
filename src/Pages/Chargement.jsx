import React from 'react';

import logo from '../Assets/logo.svg';
import Banner from '../Components/UI/Banner';
import loader from '../Assets/loader.svg';

import '../Styles/banner.css';
import '../Styles/alerte.css';

export default function Loader() {
  return (
    <main className="loader">
      <Banner logo={logo} message="En cours de chargement..." />
      <img className="alert-msg" src={loader} alt="loader" />
    </main>
  );
}
