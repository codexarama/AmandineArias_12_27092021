import React from 'react';
import Menu from '../Components/Menu';
import Accueil from '../Components/Accueil';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
      <Menu />
      <Switch>
        <Route exact path="/" component={Accueil} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
