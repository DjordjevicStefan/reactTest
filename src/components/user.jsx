import React, { Component } from "react";
import { getUser } from "../services/users";

import { toast, ToastContainer } from "react-toastify";
import Joi from "joi" ;

import AdminNavbar from "./common/adminNavbar";
import TableName from "./common/tableName";


import UserForm from "./semicommon/userForm";

class User extends Component {
  state = {
    user: {
      _id : "",
      email : "" ,
      password : "" ,
      firstName : "" ,
      lastName : "",
      region : "" 
    },
    errors : {
      
    },
    load : false 
  };

 

  async componentDidMount() {
     const userId = this.props.match.params.id ;
     if (userId === "new") {
       this.setState({load : true})
       return ;
     }


    try {
      const { data } = await getUser(this.props.match.params.id);
      this.setState(() => ({
        user: data.user,
        load: true
      }));
    } catch (error) {
      if (error.status === 400) {
        toast.error("database error!");
      }
    }
  }


  handleBack = () => {
    this.props.history.goBack();
  };

  handleInputChange = e => {
    const newUserState = { ...this.state.user };
    newUserState[e.target.name] = e.target.value;

    this.setState({ user: newUserState });
    console.log(this.state);
  };


  validateInputField = () => {

  }
 

  validate = () => {
    
  }

  handleSubmit = (e) => {
     e.preventDefault();

     const error = this.validate() ;
     
     console.log("submited");
     
  }

  render() {
    
    if (this.state.load === false) {
      return (
        <div>
          <AdminNavbar pageName="User" />
          <TableName tablename="Loading...." />
          <ToastContainer />
        </div>
      );
    }

    const { firstName, lastName, email, password, region } = this.state.user;

    return (
      <div>
        <AdminNavbar pageName={ (this.props.match.params.id === "new") ?  "New user"  : firstName + " " + lastName} />
        <UserForm
          
          firstName={firstName}
          lastName={lastName}
          email={email}
          password={password}
          region={region}
          onChange={this.handleInputChange}
          onBack={this.handleBack}
          onSubmit ={this.handleSubmit}
        />
      </div>
    );
  }
}

export default User;
