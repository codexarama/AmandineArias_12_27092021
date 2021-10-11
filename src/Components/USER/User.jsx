import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../Assets/avatar.svg';
import '../../Styles/accueil.css';

export default function User({ id, name }) {

  return (
    <Link to={`/user/${id}`} className='user'>
      <img className="avatar" src={Avatar} alt="running icon" />
      <h3 className="user-name">{name}</h3>
    </Link>
  );
}
