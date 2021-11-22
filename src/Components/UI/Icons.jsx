import propTypes from 'prop-types';

/**
 * Render Icons component
 * @param {object} props
 * @param {number} props.index > key number
 * @param {string} props.id > icon identifier
 * @param {string} props.icon > icon source
 * @param {string} props.alt > icon alternative text
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
  key: propTypes.number.isRequired,
  id: propTypes.number.isRequired,
  icon: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};
