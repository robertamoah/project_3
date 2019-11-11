import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import DashBoard from "./pages/dashboard/index"

import Login from "./pages/login/index"
// import './App.css';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
<Router>


    <div className="App">

<Switch>


<Route path="/" exact component ={Login} />


<Route path="/dashboard" exact component ={DashBoard} />


</Switch>   



    </div>
  </Router>

  );
}

export default App;
