import React, { Component } from 'react';
import AdminNavbar from './common/adminNavbar';
import getAllUsers from "../services/users";
import { toast, ToastContainer } from "react-toastify";

import TableName from "./common/tableName";


class Users extends Component {
  state = { 
    users : null 
   }


   async componentDidMount() {
    try {
      const { data: users } = await getAllUsers();
      this.setState({ users: users });  

    } catch (error) {
      if (error.status === 400) {
        toast.error("database error!");
      }
    }
  }
       
  render() { 

    const {users} = this.state ;

    if (this.state.users === null) {
      return (
        
        <div>
          
          <AdminNavbar pageName="Users"/>
          <TableName tablename="Loading...." />
          <ToastContainer />
        </div>
      );
    }
   


    return ( 
      <div>
      <AdminNavbar pageName = "Users"  />
       <ul>
         {users.map(x=> 
           <li>{x.email}</li>
          )}
       </ul>
      </div>
     );
  }
}
 
export default Users;