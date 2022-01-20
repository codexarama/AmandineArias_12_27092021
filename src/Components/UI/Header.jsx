import propTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/mockedApi';
import InfosModel from '../../ClassModels/infosModel';

/**
 * Render the Header component
 * @function Header
 * @param {object} props
 * @param {string} props.name > user name
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Header(userId) {
  // GET USER ID FROM URL PARAMS
  userId = useParams().id;

  // GET user SCORE data from FETCH
  const { data, isLoading, hasError } = useFetch(`${userId}.json`);
  // FORMATE user INFOS data with CLASS MODEL
  const formatedData = new InfosModel(data);

  return (
    <header className="user-header">
      {isLoading ? (
        <p className="loading-msg">...</p>
      ) : hasError ? (
        <p className="error-msg">erreur</p>
      ) : formatedData ? (
        <>
          <h1>
            Bonjour <span className="user-name">{formatedData.userInfos.firstName}</span>
          </h1>
          <h2 className="welcome-message">
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </h2>
        </>
      ) : null}
    </header>
  );
}

/**
 * PropTypes Header component
 */
Header.propTypes = {
  userId: propTypes.number,
};
