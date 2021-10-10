import React from 'react';
import Items from './Items';
import Calories from '../Assets/icon_calories.svg';
import Proteines from '../Assets/icon_proteins.svg';
import Glucides from '../Assets/icon_carbohydrates.svg';
import Lipides from '../Assets/icon_lipids.svg';
import '../Styles/aside.css';

import { mock } from '../Services/genericData';
import KeyData from './KeyData';

const nutriments = [Calories, Proteines, Glucides, Lipides];

export default function Health({ nutrimentName, keyData, userId, unitType, unit }) {
  nutrimentName = ['Calories', 'Protéines', 'Glucides', 'Lipides'];

  // keyData = mock[userId].keyData;
  // keyData = mock.map((userId) => userId.keyData);
  // console.log(keyData);

  unitType = ['kCal', 'g', 'g', 'g'];

  // unitType  = (index, unit) =>  !index === 0 ? (unit === 'g') : (unit === 'kCal')
  // console.log(unitType(0, unit));

  return (
    <aside className="aside">
      {nutriments.map((icon, index, unit) => (
        <div key={index} className="aside-content">
          <Items
            id={'icone-' + nutrimentName[index]}
            icon={icon}
            alt={'icone ' + nutrimentName[index]}
          />

          {/* < KeyData
            index={index}
            unitType={unitType[index]}
            nutrimentName={nutrimentName[index]}
            /> */}

          <div className="aside-keyData">
            <p>{index + ' ' + unitType[index]}</p>
            <p>{nutrimentName[index]}</p>

            {/* <p>{index + ' ' + unitType(index, unit)}</p> */}
            
          </div>
        </div>
      ))}
    </aside>
  );
}
