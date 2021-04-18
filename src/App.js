import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Signin from './components/SignIn/SignIn';
import Signup from './components/Signup/Signup';
import Dashboard from "./ClientDashboard/Dashboard";
import Userhome from "./ClientDashboard/pages/Userhome";
import Cart from "./ClientDashboard/pages/cart";
import Allprices from './ClientDashboard/pages/all_prices';
import Weather from './ClientDashboard/pages/weather';
import './App.css';

function App() {
  return (
    <div className="App">
    <Switch> 
      <Route path="/login" exact component={Signin}/>
      <Route path="/signup" exact component={Signup}/>  
      <Route path="/dashboard" exact component={Dashboard}/>
      <Route path="/" exact component={Home}/>
    </Switch>
    </div>
  );
}

export default App;
