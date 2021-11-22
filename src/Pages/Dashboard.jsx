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
import Performance from '../Components/USER/Performance';
import Score from '../Components/USER/Score';
import Health from '../Components/USER/Health';

import { useFetch } from '../Services/api';

import '../Styles/dashboard.css';

/**
 * Render Dashboard page component
 * @function Dashboard
 * @param {number} userId > user id number
 * @param {string} path > url current path
 * @param {object} data > user infos || error object || error (data loading failure)
 * @param {boolean} data > data exists ? y/n
 * @param {boolean} isLoading > data is an error object ? y/n
 * @param {boolean} hasError > data loading has failed ? y/n
 * @returns {Reactnode} jsx injected in DOM
 */
export default function Dashboard(userId) {
  // GET url PATH FOR NESTED ROUTES
  let { path } = useRouteMatch();

  // GET user ID from URL PARAMS
  userId = useParams().id;

  // GET user INFOS data from FETCH
  const { data, isLoading, hasError } = useFetch(`${userId}`);
  // console.log(data);

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
                <Header />
                <section className="performances">
                  <section className="performances-details">
                    <Activity />
                    <Average />
                    <Performance />
                    <Score />
                  </section>
                  <Health />
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

// import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
// import { useFetch } from '../Services/mockedApi';

// import InfosModel from '../ClassModels/infosModel';

// import Chargement from './Chargement';
// import Erreur404 from './Erreur404';
// import Inconnu from './Inconnu';

// import EnConstruction from './EnConstruction';
// import Navbar from '../Components/UI/Navbar';
// import Sidebar from '../Components/UI/Sidebar';
// import Header from '../Components/UI/Header';
// import Activity from '../Components/USER/Activity';
// import Average from '../Components/USER/Average';
// import Performance from '../Components/USER/Performance';
// import Score from '../Components/USER/Score';
// import Health from '../Components/USER/Health';

// import '../Styles/dashboard.css';

// /**
//  * Render Dashboard page component
//  * @function Dashboard
//  * @param {number} userId > user id number
//  * @param {string} path > url current path
//  * @param {object} data > user infos || error object || error (data loading failure)
//  * @param {boolean} data > data exists ? y/n
//  * @param {boolean} isLoading > data is an error object ? y/n
//  * @param {boolean} hasError > data loading has failed ? y/n
//  * @returns {Reactnode} jsx injected in DOM
//  */
// export default function Dashboard(userId) {
//   // GET url PATH FOR NESTED ROUTES
//   let { path } = useRouteMatch();
//   // console.log(useRouteMatch());

//   // GET user ID from URL PARAMS
//   userId = useParams().id;

//   // GET user INFOS data from FETCH
//   const { data, isLoading, hasError } = useFetch(`${userId}.json`); // CHARGEMENT INFINI - Array.lenght = 0
//   // FORMATE user INFOS data with CLASS MODEL
//   const formatedData = new InfosModel(data);
//   const userName = formatedData.userInfos;

//   return (
//     <>
//       {/* MANAGE API response CASES */}
//       {isLoading ? (
//         <Chargement />
//       ) : hasError ? (
//         <Erreur404 />
//       ) : formatedData ? (
//         <>
//           <Navbar />
//           <Sidebar />
//           {/* NESTED ROUTES */}
//           <Switch>
//             {/* DISPLAY ALERT FOR UNDERCONSTRUCTION PAGES */}
//             <Route path={`${path}/:topicId`} component={EnConstruction} />
//             {/* DISPLAY DASHBOARD CONTENT */}
//             <Route path={`${path}`}>
//               <main className="dashboard">
//                 <Header name={userName.firstName} />
//                 <section className="performances">
//                   <section className="performances-details">
//                     <Activity />
//                     <Average />
//                     <Performance />
//                     <Score />
//                   </section>
//                   <Health />
//                 </section>
//               </main>
//             </Route>
//           </Switch>
//         </>
//       ) : (
//         // DISPLAY UNKNOWN USER PAGE if userId doesn't exist
//         <Inconnu />
//       )}
//     </>
//   );
// }
