import React from 'react';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import EnConstruction from './EnConstruction';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import { mock } from '../__MOCK__/mockedData';
// import GetUserById from '../services/api';
// import { getUserById } from '../services/api';
import '../Styles/dashboard.css';

export default function Dashboard() {
  // GetUserById(12)
  // getUserById();

  let { path } = useRouteMatch();

  const user = useParams();
  const userId = parseInt(user.id);
  const current = mock.find((data) => data.id === userId);
  const { userInfos } = current;

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
            <Header name={userInfos.firstName} />
          </main>
        </Route>
      </Switch>
    </>
  );
}
