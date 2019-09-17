import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Login from './components/Login'
import Header from './components/Header'
import List from './components/List'
import home from './components/Home'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <div className="App">
      <Header />
      <PrivateRoute path={"/friends"} component={List} />
      <Route exact path={"/"} component={home} />
      <Route path={"/login"} component={Login} />


    </div>
  );
}

export default App;
