import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Erreur404 from './Erreur404';
import EnConstruction from './EnConstruction';
import Navbar from '../Components/UI/Navbar';
import Sidebar from '../Components/UI/Sidebar';
import Header from '../Components/UI/Header';
import Activity from '../Components/USER/Activity';
import Average from '../Components/USER/Average';
import Health from '../Components/USER/Health';
import Performance from '../Components/USER/Performance';

import { useFetch } from '../Services/api';

import '../Styles/dashboard.css';

export default function Dashboard() {
  // GET url PATH FOR NESTED ROUTES
  let { path } = useRouteMatch();

  // GET USER ID FROM URL PARAMS
  let userId = useParams().id;

  // GET FETCHED DATA
  const url = 'http://localhost:3000/user/';
  const { data, isLoading, hasError } = useFetch(`${url}${userId}`);
  // console.log(data);

  // GET USER INFOS
  const userInfos = data.userInfos;
  const keyData = data.keyData;

  return (
    <>
      {/* MANAGE loading CASES */}
      {isLoading ? (
        <span>Chargement en cours...</span>
      ) : hasError ? (
        <span>Oups, une erreur s'est produite.</span>
      ) : data === undefined ? (
        <Erreur404 />
      ) : (
        <>
          <Navbar />
          {/* NESTED ROUTES */}
          <Switch>
            {/* DISPLAY ALERT FOR UNDERCONSTRUCTION PAGES */}
            <Route path={`${path}/:topicId`} component={EnConstruction} />

            {/* DISPLAY DASHBOARD CONTENT */}
            <Route path={`${path}`}>
              <Sidebar />
              <main>
                <Header name={userInfos.firstName} />
                <section className="performances">
                  <section className="performances-details">
                    <Activity />
                    <Average />
                    <Performance/>
                  </section>
                  <Health keyData={keyData} />
                </section>
              </main>
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}

// Dashboard.propTypes = {
//   params: PropTypes.object.isRequired,
//   userId: PropTypes.number.isRequired,
//   data: PropTypes.object.isRequired
// }
