import React from 'react';

/**
 * Render Icons component
 * @param {object} props
 * @param {blob} props.icon > icon src
 * @param {string} props.alt > icon alt text
 * @returns {jsx}
 */

 export default function Icons({ index, id, icon, alt }) {
  return (
      <img key={index} id={id} className="sidebar-icon aside-icon" src={icon} alt={alt} />
  );
}
