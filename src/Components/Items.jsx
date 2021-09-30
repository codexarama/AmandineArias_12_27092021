import React from 'react';

/**
 * Render Indicator component
 * @param {object} props
 * @param {blob} props.icon > icon src
 * @param {string} props.alt > icon alt text
 * @param {string} props.copyright > copyrigth text
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Items({ icon, alt, copyright }) {
  return (
    <>
      {typeof copyright !== 'string' ? (
        <div className="sidebar-item">
          <img className="sidebar-icon" src={icon} alt={alt} />
        </div>
      ) : (
        <div className="copyright">
          <span>{copyright}</span>
        </div>
      )}
    </>
  );
}
