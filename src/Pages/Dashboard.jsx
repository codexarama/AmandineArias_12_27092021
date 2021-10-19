import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';

import Chargement from './Chargement';
import Erreur404 from './Erreur404';
import Inconnu from './Inconnu';

import EnConstruction from './EnConstruction';
import Navbar from '../Components/UI/Navbar';
import Sidebar from '../Components/UI/Sidebar';
import Header from '../Components/UI/Header';
import Activity from '../Components/USER/Activity';
import Average from '../Components/USER/Average';
import Health from '../Components/USER/Health';
import Performance from '../Components/USER/Performance';
import Score from '../Components/USER/Score';

import { useFetch } from '../Services/api';

import '../Styles/dashboard.css';

/**
 * Render Dashboard page component
 * @function Dashboard
 * @param {number} userId > user id number
 * @param {string} path > url current path
 * @param {string} url > url new path
 * @param {object} props
 * @param {object} props.data > user infos || error object || error (data loading failure)
 * @param {boolean} props.data > props.data exists ? y/n
 * @param {boolean} isLoading > props.data is an error object ? y/n
 * @param {boolean} hasError > props.data loading has failed ? y/n
 * @param {string} userInfos > user firstName
 * @param {number} keyData > user health indicators
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Dashboard(userId, userInfos, keyData) {
  // GET url PATH FOR NESTED ROUTES
  let { path } = useRouteMatch();
  // console.log(useRouteMatch());

  // GET USER ID FROM URL PARAMS
  userId = useParams().id;
  // console.log(useParams());

  // GET FETCHED DATA
  const { data, isLoading, hasError } = useFetch(`${userId}`);

  return (
    <>
      {/* MANAGE loading CASES */}
      {isLoading ? (
        <Chargement />
      ) : hasError ? (
        <Erreur404 />
      ) : data ? (
        <>
          <Navbar />
          <Sidebar />
          {/* NESTED ROUTES */}
          <Switch>
            {/* DISPLAY ALERT FOR UNDERCONSTRUCTION PAGES */}
            <Route path={`${path}/:topicId`} component={EnConstruction} />
            {/* DISPLAY DASHBOARD CONTENT */}
            <Route path={`${path}`}>
              <main className="dashboard">
                <Header userName={data} />
                <section className="performances">
                  <section className="performances-details">
                    <Activity />
                    <Average />
                    <Performance />
                    <Score />
                  </section>
                  <Health userKeyData={data} />
                </section>
              </main>
            </Route>
          </Switch>
        </>
      ) : (
        // DISPLAY UNKNOWN USER PAGE if userId doesn't exist
        <Inconnu />
      )}
    </>
  );
}
