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
import InfosModel from '../../ClassModels/infosModel';

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
export default function Health(userId) {
  // GET user ID
  userId = useParams().id;

  // GET user INFOS data from FETCH
  const { data, isLoading, hasError } = useFetch(`${userId}`);
  // FORMATE user INFOS data with CLASS MODEL
  const formatedData = new InfosModel(data);
  const userKeyData = formatedData.keyData;

  const nutrimentIcon = [
    caloriesIcon,
    proteinesIcon,
    glucidesIcon,
    lipidesIcon,
  ];

  const nutrimentName = ['Calories', 'Protéines', 'Glucides', 'Lipides'];

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
Health.propTypes = {
  userId: propTypes.string,
  nutrimentIcon: propTypes.string,
  nutrimentName: propTypes.string,
  icon: propTypes.string,
  index: propTypes.number,
  keyData: propTypes.objectOf(propTypes.number),
};
