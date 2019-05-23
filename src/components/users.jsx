import React, { Component } from 'react';
import AdminNavbar from './common/adminNavbar';
import {getUserWorkOrders} from "../fakeServices/users" ;


class Users extends Component {
  // state = {  }
  render() { 

    let test = getUserWorkOrders(1);
     
    console.log(test);
    


    return ( 
      <div>
      <AdminNavbar pageName = "Users" />
      <h1>heloooo</h1>
      </div>
     );
  }
}
 
export default Users;