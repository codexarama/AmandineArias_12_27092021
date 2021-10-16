import React from 'react';
import propTypes from 'prop-types';

import { Link } from 'react-router-dom';

import Avatar from '../../Assets/avatar.svg';

import '../../Styles/accueil.css';

/**
 * Render User component
 * @function User
 * @param {object} props
 * @param {string} props.id
 * @param {string} props.name
 * @returns {Reactnode} jsx injected in DOM
 */
export default function User({ id, name }) {

  return (
    <Link to={`/user/${id}`} className='user'>
      <img className="avatar" src={Avatar} alt="running icon" />
      <h3 className="user-name">{name}</h3>
    </Link>
  );
}

/**
 * PropTypes User component
 */
User.propTypes = {
  id: propTypes.number,
  Avatar: propTypes.string,
  name: propTypes.string.isRequired,
};