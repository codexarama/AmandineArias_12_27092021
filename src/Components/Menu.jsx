import React from 'react';
import logo from '../Assets/logo.svg';

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">
          <img src={logo} alt="logo Sport See" />
        </span>
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
          <ul className="navbar-nav w-100 d-flex justify-content-evenly">
            <li className="nav-item">
              <span className="nav-link active" aria-current="page">
                Accueil
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Profil</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Réglages</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Communauté</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
