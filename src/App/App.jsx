import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from '../Pages/Accueil';

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

export default function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        {/* HOME page */}
        <Route exact path="/" component={Accueil} />

        {/* DATA FOCUSED page */}
        <Route exact path="/user/:id/activity">
          <main className="data-focused data-focused--activity">
            <DailyActivity />
          </main>
        </Route>
        <Route exact path="/user/:id/average-sessions">
          <main className="data-focused">
            <Average />
          </main>
        </Route>
        <Route exact path="/user/:id/activities">
          <main className="data-focused">
            <Performance />
          </main>
        </Route>
        <Route exact path="/user/:id/today-score">
          <main className="data-focused">
            <Score />
          </main>
        </Route>
        <Route exact path="/user/:id/key-data">
          <main className="data-focused">
            <Health />
          </main>
        </Route>

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
