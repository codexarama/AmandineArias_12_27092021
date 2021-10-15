import React from 'react';
import propTypes from 'prop-types';

/**
 * Render Icons component
 * @param {object} props
 * @param {number} props.index > key number
 * @param {string} props.id > icon id
 * @param {string} props.icon > icon src
 * @param {string} props.alt > icon alt text
 * @returns {Reactnode} jsx injected in DOM
 */

 export default function Icons({ index, id, icon, alt }) {
  return (
      <img key={index} id={id} className="sidebar-icon aside-icon" src={icon} alt={alt} />
  );
}

/**
 * PropTypes Icons component
 */
 Icons.propTypes = {
  key: propTypes.number,
  id: propTypes.string,
  icon: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};
