import React from 'react';
import propTypes from 'prop-types';

import caloriesIcon from '../../Assets/icon_calories.svg';
import proteinesIcon from '../../Assets/icon_proteins.svg';
import glucidesIcon from '../../Assets/icon_carbohydrates.svg';
import lipidesIcon from '../../Assets/icon_lipids.svg';
import '../../Styles/aside.css';

import Icons from '../UI/Icons';
import KeyData from './KeyData';

/**
 * Render Health component
 * @function Health
 * @param {object} props
 * @param {string} props.nutrimentName > nutriment name
 * @param {string} props.icon > icon src
 * @param {number} props.index > key number
 * @param {object} keyData > nutriment count
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Health({ nutrimentIcon, nutrimentName, userKeyData }) {
  nutrimentIcon = [caloriesIcon, proteinesIcon, glucidesIcon, lipidesIcon];
  nutrimentName = ['Calories', 'Protéines', 'Glucides', 'Lipides'];
  // GET USER INFOS
  userKeyData = userKeyData.keyData

  return (
    <aside className="aside">
      {nutrimentIcon.map((icon, index) => (
        <div key={index} className="aside-content">
          <Icons
            id={'icone-' + nutrimentName[index]}
            icon={icon}
            alt={'icone ' + nutrimentName[index]}
          />
          <KeyData
            keyData={userKeyData[Object.keys(userKeyData)[index]]}
            unit={index === 0 ? "kCal" : "g"}
            nutrimentName={nutrimentName[index]}
          />
        </div>
      ))}
    </aside>
  );
}

/**
 * PropTypes Health component
 */
Health.propTypes = {
  nutrimentIcon: propTypes.string,
  nutrimentName: propTypes.string,
  icon: propTypes.string,
  index: propTypes.number,
  keyData: propTypes.objectOf(propTypes.number).isRequired,
};