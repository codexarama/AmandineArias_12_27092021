import React from 'react';
import Items from './Items';
import Calories from '../Assets/icon_calories.svg';
import Proteines from '../Assets/icon_proteins.svg';
import Glucides from '../Assets/icon_carbohydrates.svg';
import Lipides from '../Assets/icon_lipids.svg';
import '../Styles/aside.css';
// import KeyData from './KeyData';

const nutriments = [Calories, Proteines, Glucides, Lipides];

export default function Health({ nutrimentName }) {
  nutrimentName = ['calories', 'protéines', 'glucides', 'lipides'];

  return (
    <aside className="aside">
      {/* <div className="aside-content"> */}
      {nutriments.map((icon, index) => (
        <div key={index} className="aside-content">
          <Items
            id={'icone-' + nutrimentName[index]}
            icon={icon}
            alt={'icone ' + nutrimentName[index]}
          />
        </div>
      ))}
      {/* </div> */}
    </aside>
  );
}
