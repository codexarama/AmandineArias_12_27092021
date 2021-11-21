import propTypes from 'prop-types';

/**
 * Render KeyData component
 * @function KeyData
 * @param {object} props
 * @param {number} props.keyData > nutriment count
 * @param {string} props.unit > nutriment unit
 * @param {string} props.nutrimentName > nutriment name
 * @param {number} props.index > key number
 * @returns {Reactnode} jsx injected in DOM
 */
export default function KeyData({ keyData, unit, nutrimentName, index }) {
  return (
    <ul className="aside-keyData">
      <li key={index}>{keyData + ' ' + unit}</li>
      <li key={nutrimentName}>{nutrimentName}</li>
    </ul>
  );
}

/**
 * PropTypes Health component
 */
 KeyData.propTypes = {
  keyData: propTypes.number,
  unit: propTypes.string.isRequired,
  nutrimentName: propTypes.string.isRequired,
  index: propTypes.number,
};