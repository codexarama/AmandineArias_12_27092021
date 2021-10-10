import React from 'react';

/**
 * Render Indicator component
 * @param {object} props
 * @param {blob} props.icon > icon src
 * @param {string} props.alt > icon alt text
 * @param {string} props.copyright > copyrigth text
 * @returns {Reactnode} jsx injected in DOM
 */

 export default function Items({ index, id, icon, alt }) {
  return (
      <img key={index} id={id} className="sidebar-icon aside-icon" src={icon} alt={alt} />
  );
}
