import React from 'react';
import Icons from '../UI/Icons';
import caloriesIcon from '../../Assets/icon_calories.svg';
import proteinesIcon from '../../Assets/icon_proteins.svg';
import glucidesIcon from '../../Assets/icon_carbohydrates.svg';
import lipidesIcon from '../../Assets/icon_lipids.svg';
import '../../Styles/aside.css';

import KeyData from './KeyData';

const nutriments = [caloriesIcon, proteinesIcon, glucidesIcon, lipidesIcon];

export default function Health({ nutrimentName, keyData }) {
  nutrimentName = ['Calories', 'Protéines', 'Glucides', 'Lipides'];

  return (
    <aside className="aside">
      {nutriments.map((icon, index) => (
        <div key={index} className="aside-content">
          <Icons
            id={'icone-' + nutrimentName[index]}
            icon={icon}
            alt={'icone ' + nutrimentName[index]}
          />
          <KeyData
            keyData={keyData[Object.keys(keyData)[index]]}
            unit={index === 0 ? "kCal" : "g"}
            nutrimentName={nutrimentName[index]}
          />
        </div>
      ))}
    </aside>
  );
}
