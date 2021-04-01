import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import { Home } from './components/Home';
import Order from './components/Order';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' exact component={Home}/> 
        <Route path='/order' component={Order}/> 
      </Switch>
    </div>
    </Provider>
  );
}

export default App;
