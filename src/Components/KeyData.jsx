import React from 'react';

export default function KeyData({ keyData, unit, nutrimentName, index }) {
  return (
    <ul className="aside-keyData">
      <li key={index}>{keyData + ' ' + unit}</li>
      <li key={nutrimentName}>{nutrimentName}</li>
    </ul>
  );
}
