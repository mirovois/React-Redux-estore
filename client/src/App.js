import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Orders from './components/Orders';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
    <div className="app">
      <Header />
      <Switch>
        <Route path='/' exact component={Home}/> 
        <Route path='/basket/:id?' component={Basket}/> 
        <Route path='/checkout' component={Checkout}/> 
        <Route path='/payment' component={Payment}/> 
        <Route path='/orders' component={Orders} />
      </Switch>
    </div>
    </Provider>
  );
}

export default App;
