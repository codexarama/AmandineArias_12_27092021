import React from 'react';
import propTypes from 'prop-types';

/**
 * Render the Header component
 * @function Header
 * @param {object} props
 * @param {string} props.name > user firstName
 * @returns {Reactnode} jsx injected in DOM
 */

export default function Header({ name }) {
  return (
    <header>
      <h1>
        Bonjour <span className="user-name">{name}</span>
      </h1>
      <h2 className="welcome-message">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </header>
  );
}

/**
 * PropTypes Header component
 */
 Header.propTypes = {
  name: propTypes.string,
};
