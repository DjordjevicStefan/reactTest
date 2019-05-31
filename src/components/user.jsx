import React, { Component } from "react";

import { getUser } from "../services/users";
import { toast, ToastContainer } from "react-toastify";
import AdminNavbar from "./common/adminNavbar";
import TableName from "./common/tableName";

import { Link } from "react-router-dom";

class User extends Component {
  state = {
    user: null
  };

  async componentDidMount() {
    try {
      const { data } = await getUser(this.props.match.params.id);
      this.setState({ user: data.user });
    } catch (error) {
      if (error.status === 400) {
        toast.error("database error!");
      }
    }
  }

  // handleLog = () => {
  //   console.log(this.state.user);

  // }

  handleFirstName = e => {
    const newUserState = { ...this.state.user };
    newUserState[e.target.name] = e.target.value;

    this.setState({ user: newUserState });

    console.log(this.state);
  };

  handleBack = () => {
    this.props.history.goBack() ;
  }

  render() {
    const { user } = this.state;

    if (user === null) {
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
        <AdminNavbar pageName={firstName + " " + lastName} />

        <div className="form-container">
          <div>
            <form className="form-css">
              <div className="form-group form-adj">
                <label htmlFor="firstName">
                  {" "}
                  <span className="h6">First name</span>{" "}
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  className="form-control form-control text-center"
                  type="text"
                  onChange={e => this.handleFirstName(e)}
                />
              </div>
              <div className="form-group form-adj">
                <label htmlFor="lastName">
                  <span className="h6">Last name</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  className="form-control form-control text-center"
                  type="text"
                  onChange={e => this.handleFirstName(e)}
                />
              </div>
              <div className="form-group form-adj">
                <label htmlFor="password">
                  <span className="h6">Password</span>
                </label>
                <input
                  id="password"
                  name="password"
                  value={password}
                  className="form-control form-control text-center"
                  type="password"
                  onChange={e => this.handleFirstName(e)}
                />
              </div>
              <div className="form-group form-adj">
                <label htmlFor="email">
                  <span className="h6">Email</span>
                </label>
                <input
                  id="email"
                  name="email"
                  value={email}
                  className="form-control form-control text-center"
                  type="text"
                  onChange={e => this.handleFirstName(e)}
                />
              </div>
              <div className="form-group form-adj">
                <label htmlFor="region">
                  <span className="h6">Region</span>
                </label>
                <input
                  id="region"
                  name="region"
                  value={region}
                  className="form-control form-control text-center"
                  type="text"
                  onChange={e => this.handleFirstName(e)}
                />
              </div>
              <div className="form-group form-adj">
                <button className="mdc-button btn-sm btn mb-1">
                  Show all work orders
                </button>
              </div>
            </form>
            <div className="row">
              <div className="col-6">
                <div onClick={() => this.handleBack()} className="btn-table-end">Back</div>
              </div>
              <div className="col-6">
                <div className="btn-table-end">Edit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
