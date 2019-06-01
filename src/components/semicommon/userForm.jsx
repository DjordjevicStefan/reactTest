import React, { Component } from "react";
import Input from "../common/input";

class UserForm extends Component {
  // state = {};

  render() {
    const {
      firstName,
      onChange,
      onBack,
      lastName,
      region,
      password,
      email,
      onSubmit
    } = this.props;

    return (
      <div>
        <div className="form-container">
          <div>
            <form onSubmit={onSubmit} className="form-css">
              <Input
                error={this.props.error}
                label="First name"
                name="firstName"
                value={firstName}
                onChange={onChange}
              />
               <Input
                label="Last name"
                name="lastName"
                value={lastName}
                onChange={onChange}
              />
               <Input
                label="Password"
                name="password"
                value={password}
                onChange={onChange}
                type="password"
              />
               <Input
                label="Email"
                name="email"
                value={email}
                onChange={onChange}
              />
               <Input
                label="Region"
                name="region"
                value={region}
                onChange={onChange}
                
              />
              <div className="form-group form-adj-last">
                <button className="mdc-button btn-sm btn mb-1">
                  Show all work orders
                </button>
              </div>

              <div className="row">
              <div className="col-6">
                <button onClick={onBack} className="btn-form-submit">
                  Back
                </button>
              </div>
              <div className="col-6">
                <button className="btn-form-submit">{(email==="") ? "Add new user" : "Edit user" }</button>
              </div>
            </div>
            </form>
           
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;
