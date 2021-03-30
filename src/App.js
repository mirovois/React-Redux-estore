import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { Home } from './components/Home';
import Order from './components/Order';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={Home}/> 
        <Route path='/order' component={Order}/> 
      </Switch>
    </div>
  );
}

export default App;
