import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Store} from './store/Index';
import './App.css';
import React from 'react';
import {Nav} from './components/Nav';
import {Home } from './components/Home';
import {Cart} from './components/Cart';
import {Details} from './components/Details';

 const App = () => {
  return (
    <Router>
      <Provider store={Store}>
      <Nav />
      <Route path='/' exact component={Home} />
      <Route path='/cart' exact component={Cart} />
      <Route path='/details/:id' exact component={Details} />
      </Provider>
    </Router>
  )
}

export default App;

