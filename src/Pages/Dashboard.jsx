import React, { useEffect, useState } from 'react';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../Components/Navbar';
import EnConstruction from './EnConstruction';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Health from '../Components/Health';
// import KeyData from '../Components/KeyData';
import { getUserById } from '../Services/api';
import '../Styles/dashboard.css';

export default function Dashboard() {
  const [data, setData] = useState({});

  // GET PATH FOR NESTED ROUTES
  let { path } = useRouteMatch();

  // GET URL PARAMS
  let params = useParams();
  let userId = params.id;
  // La propriété 'id' n'existe pas sur le type '{}'

  // const getData = async () => {
  //   const user = await getUserById(userId);
  //   return setData(user);
  // };

  useEffect(() => {
    getUserById(userId).then((user) => setData(user));
    // getData();
    // React Hook useEffect has a missing dependency: 'getData'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
  }, []);

  console.log(data);

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
            <Header name={data.userInfos.firstName} />
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

Dashboard.propTypes = {
  params: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired
}
