import React from 'react';
import propTypes from 'prop-types';

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
  keyData: propTypes.number.isRequired,
  unit: propTypes.string.isRequired,
  nutrimentName: propTypes.string.isRequired,
};