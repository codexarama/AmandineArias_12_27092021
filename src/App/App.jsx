import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from '../Pages/Accueil';

import { statsFocus } from '../Components/USER/StatsFocus';

import Dashboard from '../Pages/Dashboard';

import Chargement from '../Pages/Chargement';
import Inconnu from '../Pages/Inconnu';
import Erreur404 from '../Pages/Erreur404';

import './App.css';
import '../Styles/banner.css';

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
            strict={route.strict}
            children={
              <main className="data-focused">
                <route.focus />
              </main>
            }
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
