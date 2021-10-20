import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from '../Pages/Accueil';

import logo from '../Assets/logo.svg';
import Banner from '../Components/UI/Banner';
import DailyActivity from '../Components/USER/Activity';
import Average from '../Components/USER/Average';
import Performance from '../Components/USER/Performance';
import Score from '../Components/USER/Score';
import Health from '../Components/USER/Health';

import Dashboard from '../Pages/Dashboard';

import Chargement from '../Pages/Chargement';
import Inconnu from '../Pages/Inconnu';
import Erreur404 from '../Pages/Erreur404';

import './App.css';
import '../Styles/banner.css';

const statsFocus = [
  {
    path: '/user/:id/activity',
    exact: true,
    main: () => (
      <main className="data-focused">
        <Banner logo={logo} message="Activité quotidienne" />
        <section
          style={{
            marginTop: '12rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '75%',
          }}
        >
          <DailyActivity />
        </section>
      </main>
    ),
  },
  {
    path: '/user/:id/average-sessions',
    exact: true,
    main: () => (
      <main className="data-focused">
        <Banner logo={logo} message="Sessions moyennes" />
        <section
          style={{
            marginTop: '12rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Average className="focus" />
        </section>
      </main>
    ),
  },
  {
    path: '/user/:id/activities',
    exact: true,
    main: () => (
      <main className="data-focused">
        <Banner logo={logo} message="Performances" />
        <section
          style={{
            marginTop: '12rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Performance />
        </section>
      </main>
    ),
  },
  {
    path: '/user/:id/today-score',
    exact: true,
    main: () => (
      <main className="data-focused">
        <Banner logo={logo} message="Score du jour" />
        <section
          style={{
            marginTop: '12rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Score />
        </section>
      </main>
    ),
  },
  {
    path: '/user/:id/key-data',
    exact: true,
    main: () => (
      <main className="data-focused">
        <Banner logo={logo} message="Indicateurs physiologiques" />
        <section
          style={{
            marginTop: '12rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Health />
        </section>
      </main>
    ),
  },
];

export default function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        {/* HOME page */}
        <Route exact path="/" component={Accueil} />

        {/* DATA FOCUSED page */}
        {statsFocus.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}

        {/* DASHBOARD page */}
        <Route path="/user/:id" component={Dashboard} />

        {/* LOADING page */}
        <Route path="/chargement" component={Chargement} />

        {/* UNKNOWN USER page */}
        <Route path="/user/:id?" component={Inconnu} />

        {/* NOT FOUND page */}
        <Route path="*" component={Erreur404} />
      </Switch>
    </BrowserRouter>
  );
}
