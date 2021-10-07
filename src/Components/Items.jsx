import React from 'react';

/**
 * Render Indicator component
 * @param {object} props
 * @param {blob} props.icon > icon src
 * @param {string} props.alt > icon alt text
 * @param {string} props.copyright > copyrigth text
 * @returns {Reactnode} jsx injected in DOM
 */

// export default function Items({ index, id, icon, alt }) {
export default function Items({ index, id, icon, alt }) {
  return (
    <div key={index} className="sidebar-item aside-item">
      <img id={id} className="sidebar-icon aside-icon" src={icon} alt={alt} />
    </div>
  );
}
