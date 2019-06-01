import React, { Component } from "react";


const Input = props => {
  return (
    <div>
    <div className={`form-group form-adj`}>
      <label htmlFor={props.name}>
        <span className="h6">{props.label}</span>{" "}
      </label>
      <input
        id={props.name}
        name={props.name}
        value={props.value}
        className="form-control form-control text-center"
        type={props.type || "text"}
        onChange={props.onChange}
      />
      { props.error && <div className="alert-danger">{props.error}</div>}
    </div>
     
    </div>
    
  );
};

export default Input;
