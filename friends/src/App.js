import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends.js';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <nav>
          <Link to='/login'>Login</Link>
          <Link to='/friends'>Friends</Link>
        </nav>
        <h1>Friends App</h1>
        <Switch>
          <PrivateRoute exact path='/friends' component={Friends} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;