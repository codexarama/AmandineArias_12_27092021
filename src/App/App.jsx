import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accueil from '../Pages/Accueil';
import Dashboard from '../Pages/Dashboard';
import Erreur from '../Pages/Erreur404';
import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        {/* page ACCUEIL */}
        <Route exact path="/" component={Accueil} />

        {/* page DASHBOARD */}
        <Route path="/user/:id" component={Dashboard} />

        {/* page NOT FOUND */}
        <Route component={Erreur} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
