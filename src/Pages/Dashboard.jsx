import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Erreur404 from './Erreur404';
import Navbar from '../Components/Navbar';
import EnConstruction from './EnConstruction';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import DailyActivity from '../Components/DailyActivity';
import Health from '../Components/Health';

import { useFetch } from '../Services/api';

import '../Styles/dashboard.css';

export default function Dashboard() {
  // GET PATH FOR NESTED ROUTES
  let { path } = useRouteMatch();

  // GET URL PARAMS
  let userId = useParams().id;

  const url = 'http://localhost:3000/user/';
  const { data, isLoading, hasError } = useFetch(`${url}${userId}`);

  // console.log(data);

    // USER INFOS
    const userInfos = data.userInfos
    const keyData = data.keyData

  return (
    <>
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
            {/* ALERT FOR UNDERCONSTRUCTION PAGES */}
            <Route path={`${path}/:topicId`} component={EnConstruction} />

            {/* DASHBOARD CONTENT */}
            <Route path={`${path}`}>
              <Sidebar />
              <main>
                <Header name={userInfos.firstName} />
                <section className="performances">
                  <DailyActivity />
                  <Health keyData={keyData}/>
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
