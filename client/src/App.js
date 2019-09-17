import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Header from './components/Header'
import List from './components/List'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route path={"/friends"} component={List} />

    </div>
  );
}

export default App;
