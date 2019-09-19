import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import Login from './components/Login'
import Header from './components/Header'
import List from './components/List'
import AddFriend from './components/AddFriend'
import PrivateRoute from './components/PrivateRoute'

function App(props) {

  const [friend, setFriend] = useState()
  const [updateBoolean, setUpdateBoolean] = useState()

  const getIdForPut = (friend) => {
    setFriend(friend)
    setUpdateBoolean(true)
    props.history.push("/addfriend");
  }

  const hideUpdate = () => {
    setUpdateBoolean(false)
  }

  return (
    <div className="App">
      <h1>You are all my friend!</h1>
      <Header />
      <PrivateRoute
        path={"/friends"}
        getIdForPut={getIdForPut}
        component={List}
      />
      <PrivateRoute
        path={"/addfriend"}
        component={AddFriend}
        setFriend={setFriend}
        updateFriend={friend}
        updateBoolean={updateBoolean}
        hideUpdate={hideUpdate}
      />
      {/* pass id back down to add friend to do update form */}
      <Route path={"/login"} component={Login} />
    </div>
  );
}

export default App;
