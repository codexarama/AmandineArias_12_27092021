import React from 'react'
import propTypes from 'prop-types';

/**
 * Render the Banner component
 * @function Banner
 * @param {object} props
 * @param {blob} props.logo > logo src
 * @param {string} props.message > welcome message
 * @returns {JSX}
 */

export default function Banner({logo, message}) {
    return (
        <header>
        <img className="logo" src={logo} alt="logo sport see" />
        <h1 className="welcome-msg">{message}</h1>
      </header>
    )
}

// PROPTYPES
Banner.propTypes = {
  message: propTypes.string.isRequired,
};
