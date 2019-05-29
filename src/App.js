import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.css';

import './App.css';


import AdminPanel from './components/adminPanel';
import Users from './components/users';


function App() {
  return (
    <div className="App">
       <Switch>
        
         <Route path="/admin" exact component={AdminPanel} />
         <Route path="/users"  component={Users} />
       </Switch>
        
      
    </div>
  );
}

export default App;
