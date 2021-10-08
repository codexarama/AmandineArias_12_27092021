import React, { useEffect, useState } from 'react';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import EnConstruction from './EnConstruction';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Health from '../Components/Health';
// import KeyData from '../Components/KeyData';
import { getUserById } from '../Services/api';
import '../Styles/dashboard.css';

export default function Dashboard() {
  const [user, setUser] = useState({});

  // GET PATH FOR NESTED ROUTES
  let { path } = useRouteMatch();

  // GET URL PARAMS
  let params = useParams();

  useEffect(() => {
    // eslint-disable-next-line
   let userId = params.id;
    // React Hook useEffect has a missing dependency: 'params.id'. Either include it or remove the dependency array  react-hooks/exhaustive-deps

    getUserById(userId).then((data) => setUser(data));
    // eslint-disable-next-line
  }, []);

  console.log(user);

  return (
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
            <Header name={user.userInfos.firstName} />
            <section className="performances">
              <Health />
              {/* <KeyData data={user.keyData.calorieCount} /> */}
            </section>
          </main>
        </Route>
      </Switch>
    </>
  );
}
