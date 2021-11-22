import propTypes from 'prop-types';

import { useParams } from 'react-router-dom';
import { useFetch } from '../../Services/api';
import InfosModel from '../../ClassModels/infosModel';

/**
 * Render the Header component
 * @function Header
 * @param {object} props
 * @param {string} props.userName > user firstName
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Header(userId) {
  // GET USER ID FROM URL PARAMS
  userId = useParams().id;

  // GET user SCORE data from FETCH
  const { data, isLoading, hasError } = useFetch(`${userId}`);
  // FORMATE user INFOS data with CLASS MODEL
  const formatedData = new InfosModel(data);
  const userName = formatedData.userInfos;
  // console.log(userName.firstName);

  function getName() {
    if (!isLoading) {
      console.log(userName.firstName);
      return userName.fistName;
    }
  }

  return (
    <header>
      {isLoading ? (
        <p className="loading-msg">...</p>
      ) : hasError ? (
        <p className="error-msg">erreur</p>
      ) : formatedData ? (
        <>
          <h1>
            Bonjour <span className="user-name" name={getName()} > </span>
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
  name: propTypes.string,
};

////////////////////////////////////////////////////
// import propTypes from 'prop-types';

// /**
//  * Render the Header component
//  * @function Header
//  * @param {object} props
//  * @param {string} props.name > user name
//  * @returns {Reactnode} jsx injected in DOM
//  */
// export default function Header({ name }) {
//   return (
//     <header>
//       <h1>
//         Bonjour <span className="user-name">{name}</span>
//       </h1>
//       <h2 className="welcome-message">
//         Félicitations ! Vous avez explosé vos objectifs hier 👏
//       </h2>
//     </header>
//   );
// }

// /**
//  * PropTypes Header component
//  */
// Header.propTypes = {
//   name: propTypes.string.isRequired,
// };
