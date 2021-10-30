import React from 'react';
import { useParams } from 'react-router-dom';
import propTypes from 'prop-types';

import Chargement from '../../Pages/Chargement';
import Erreur404 from '../../Pages/Erreur404';
import Inconnu from '../../Pages/Inconnu';

import caloriesIcon from '../../Assets/icon_calories.svg';
import proteinesIcon from '../../Assets/icon_proteins.svg';
import glucidesIcon from '../../Assets/icon_carbohydrates.svg';
import lipidesIcon from '../../Assets/icon_lipids.svg';

import Icons from '../UI/Icons';
import KeyData from './KeyData';

import { useFetch } from '../../Services/mockedApi';

import '../../Styles/aside.css';

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
export default function KeyDataFocus() {
  const nutrimentIcon = [
    caloriesIcon,
    proteinesIcon,
    glucidesIcon,
    lipidesIcon,
  ];
  const nutrimentName = ['Calories', 'Protéines', 'Glucides', 'Lipides'];

  // GET USER INFOS
  const userId = useParams().id;
  // GET FETCHED DATA
  const { data, isLoading, hasError } = useFetch(`${userId}`);
  // const { data, isLoading, hasError } = useFetch(`${userId}`.json);
  const userKeyData = data.keyData;

  return (
    <>
      {/* MANAGE loading CASES */}
      {isLoading ? (
        <Chargement />
      ) : hasError ? (
        <Erreur404 />
      ) : data ? (
        <>
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
                  unit={index === 0 ? 'kCal' : 'g'}
                  nutrimentName={nutrimentName[index]}
                />
              </div>
            ))}
          </aside>
        </>
      ) : (
        // DISPLAY UNKNOWN USER PAGE if userId doesn't exist
        <Inconnu />
      )}
    </>
  );
}

/**
 * PropTypes Health component
 */
KeyDataFocus.propTypes = {
  nutrimentIcon: propTypes.string,
  nutrimentName: propTypes.string,
  icon: propTypes.string,
  index: propTypes.number,
  keyData: propTypes.objectOf(propTypes.number),
};

/////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import propTypes from 'prop-types';

// import caloriesIcon from '../../Assets/icon_calories.svg';
// import proteinesIcon from '../../Assets/icon_proteins.svg';
// import glucidesIcon from '../../Assets/icon_carbohydrates.svg';
// import lipidesIcon from '../../Assets/icon_lipids.svg';

// import Icons from '../UI/Icons';
// import KeyData from './KeyData';

// import { useFetch } from '../../Services/api';

// import '../../Styles/aside.css';

// /**
//  * Render Health component
//  * @function Health
//  * @param {object} props
//  * @param {string} props.nutrimentName > nutriment name
//  * @param {string} props.icon > icon src
//  * @param {number} props.index > key number
//  * @param {object} keyData > nutriment count
//  * @returns {Reactnode} jsx injected in DOM
//  */
// export default function Health({ nutrimentIcon, nutrimentName, userKeyData }) {
//   nutrimentIcon = [caloriesIcon, proteinesIcon, glucidesIcon, lipidesIcon];
//   nutrimentName = ['Calories', 'Protéines', 'Glucides', 'Lipides'];
//   // GET USER INFOS

//   const userId = useParams().id;
//   console.log(userId);
//   let { data } = useFetch(`${userId}/key-data`);
//   console.log(data); // undefined

//   userKeyData ? (userKeyData = userKeyData.keyData) : (userKeyData = data);
// RETURN FULL COMPONENT BUT keydata = undefinied

//   return (
//     <>
//       {userKeyData ? (
//         <aside className="aside">
//           {nutrimentIcon.map((icon, index) => (
//             <div key={index} className="aside-content">
//               <Icons
//                 id={'icone-' + nutrimentName[index]}
//                 icon={icon}
//                 alt={'icone ' + nutrimentName[index]}
//               />
//               <KeyData
//                 keyData={userKeyData[Object.keys(userKeyData)[index]]}
//                 unit={index === 0 ? 'kCal' : 'g'}
//                 nutrimentName={nutrimentName[index]}
//               />
//             </div>
//           ))}
//         </aside>
//       ) : (
//         data
//       )}
//     </>
//   );
// }

// /**
//  * PropTypes Health component
//  */
// Health.propTypes = {
//   nutrimentIcon: propTypes.string,
//   nutrimentName: propTypes.string,
//   icon: propTypes.string,
//   index: propTypes.number,
//   keyData: propTypes.objectOf(propTypes.number),
// };
