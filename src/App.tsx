import React from 'react';
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import logo from './logo.svg';
import './App.css';

import LandingPage from "./views/LandingPage.js";
import Login from "./views/Login";
import Profile from "./views/Profile"
import Register from "./views/Register";
import Test from "./views/Test";

function App() {
  return (
      <Routes>
          <Route path={"/"} element={<LandingPage/>}/>
          <Route path= {"/register"} element={<Register/>} />
          <Route path= {"/login"} element={<Login/>} />
          <Route path= {"/profile"} element={<Profile/>} />
          <Route path= {"/test"} element={<Test/>} />
          {/*<Route exact path= {"/forgot"} component={ResetPassword} />*/}
          {/*<PrivateRoute path= {"/maps"} loggedIn={currentUser} component={GoogleMapSDK}  />*/}
          {/*<PrivateRoute path= {"/profile"} loggedIn={currentUser} component={Profile}  />*/}
      </Routes>
  );
}

export default App;
