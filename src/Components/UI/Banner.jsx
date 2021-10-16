import React from 'react';
import { Link } from 'react-router-dom';

import propTypes from 'prop-types';

import SportSee from '../../Assets/SportSee.svg';

/**
 * Render the Banner component
 * @function Banner
 * @param {object} props
 * @param {string} props.logo > logo src
 * @param {string} props.message > welcome message
 * @returns {Reactnode} jsx injected in DOM
 */

export default function Banner({ logo, message }) {
  return (
    <header className="banner">
      <Link className="banner-brand" to="/">
        <img className="logo" src={logo} alt="logo sport see" />
        <img className="brand" src={SportSee} alt="logo Sport See" />
      </Link>
      <h1 className="msg">{message}</h1>
    </header>
  );
}

/**
 * PropTypes Banner component
 */
Banner.propTypes = {
  logo: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
};
