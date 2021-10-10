import React from 'react';

export default function KeyData(index, unitType, nutrimentName) {
  return (
    <div key={index} className="aside-keyData">
      <p>{index + ' ' + unitType}</p>
      <p>{nutrimentName}</p>
    </div>
  );
}
