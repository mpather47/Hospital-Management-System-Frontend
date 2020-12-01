import './App.css';
import React from 'react'
import UpdateDetails from './UpdateDetails';
import Login from './Login';
import Register from './Register';
import Main from './Main';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EmployeeLogin from './EmployeeLogin';
import Starter from './Starter';
import MainAdmin from './MainAdmin';


function App() {
  return (
    <Router>
       <div className="App">
       <Switch>
       <Route path="/Login" component={Login}/>
     
       <Route path="/Register" component={Register}/>
       <Route path="/Home" component={Main}/>
       <Route path="/AdminHome" component={MainAdmin}/>
       <Route path="/Starter" component={Starter}/>
       <Route path="/Employee" component={EmployeeLogin}/>

       </Switch>
    </div>  
    </Router>
   
  );
}

export default App;
