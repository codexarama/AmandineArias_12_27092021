import React from 'react'
import propTypes from 'prop-types';

/**
 * Render the Banner component
 * @function Banner
 * @param {object} props
 * @param {string} props.logo > logo src
 * @param {string} props.message > welcome message
 * @returns {Reactnode} jsx injected in DOM
 */

export default function Banner({logo, message}) {
    return (
        <header>
        <img className="logo" src={logo} alt="logo sport see" />
        <h1 className="welcome-msg">{message}</h1>
      </header>
    )
}

/**
 * PropTypes Banner component
 */
 Banner.propTypes = {
  logo: propTypes.string.isRequired,
  message: propTypes.string.isRequired,
};
