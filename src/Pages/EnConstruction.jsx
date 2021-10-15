import React from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';

import '../Styles/alerte.css'

/**
 * Render EnConstruction component
 * @function EnConstruction
 * @param {object} props
 * @param {id} props.id > user id number
 * @param {topicId} props.topicId > navbar topic name


 * @returns {Reactnode} jsx injected in DOM
 */

export default function EnConstruction(props) {

  // console.log(props);

  let { id, topicId } = useParams();

setTimeout(() => {
  props.history.push(`/user/${id}`)
}, 3000);

  return (
    <main>
      <h1 className="alert-msg">Page " {topicId} " en cours de construction</h1>
      <p className="alert-msg info-redirection">Redirection vers le tableau de bord dans 2s.</p>
    </main>
  );
}

/**
 * PropTypes EnConstruction component
 */
 EnConstruction.propTypes = {
  id: propTypes.number,
  topicId: propTypes.string,
};
