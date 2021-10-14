import React from 'react';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Avatar from '../../Assets/avatar.svg';

import '../../Styles/accueil.css';

/**
 * Render Greeting component
 * @function Greeting
 * @param {object} props
 * @param {string} props.id
 * @param {string} props.name
 * @returns {JSX}
 */

export default function Greeting({ id, name }) {

  return (
    <Link to={`/user/${id}`} className='user'>
      <img className="avatar" src={Avatar} alt="running icon" />
      <h3 className="user-name">{name}</h3>
    </Link>
  );
}

/**
 * PropTypes for the Greeting component
 */
Greeting.propTypes = {
  firstName: propTypes.string.isRequired,
};