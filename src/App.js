import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.css';

import './App.css';


import AdminPanel from './components/adminPanel';
import Users from './components/users';

import User from './components/user';


function App() {
  return (
    <div className="App">
       <Switch>
        
        
         <Route path="/admin/users/:id"  component={User} />
         <Route path="/admin/users"  component={Users} />
         <Route path="/admin"  component={AdminPanel} />
        
         {/* <Redirect to="/admin" /> */}
       </Switch>
        
      
    </div>
  );
}

export default App;
