import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from '../Pages/Accueil';
import Dashboard from '../Pages/Dashboard';
import Erreur404 from '../Pages/Erreur404';
import Chargement from '../Pages/Chargement';
import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        {/* HOME page */}
        <Route exact path="/" component={Accueil} />

        {/* DASHBOARD page */}
        <Route path="/user/:id" component={Dashboard} />

        {/* LOADING page */}
        <Route path="/chargement" component={Chargement} />
        
        {/* NOT FOUND page */}
        <Route path="*" component={Erreur404} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
