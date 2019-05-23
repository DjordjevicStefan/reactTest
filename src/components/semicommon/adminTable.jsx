import React, { Component } from "react";
import {Link} from "react-router-dom"
import TableName from "../common/tableName";
import _ from "lodash";

const AdminTable = ({ allOrders, status, onChange, onSort, sortColumn }) => {
  //// filter orders by state prop
  let filteredOrders = allOrders.filter(order => order.status === status);

  //// sorting work oreders /// returns a arrey
  let sorted = _.orderBy(filteredOrders, [sortColumn.path], [sortColumn.order]);

  //// if work orders are empty  don't render the table
  if (allOrders.length === 0)
    return (
      <div>
        <p className="h4">There is no work orders at this moment</p>
      </div>
    );

   //// changing asc/desc arrow depending on the user interaction
  let arrowIcon = path => {
    if (sortColumn.path === path) {
      return (sortColumn.order === "asc") ? <i className="fa fa-sort-desc mr-2" /> : <i className="fa fa-sort-asc mr-2" /> ;
    }
  };

  return (
    <div className="container">
      <TableName tablename="Work orders" />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Select</th>
            <th
              className="click-th"
              onClick={() => onSort("buildingNmb")}
              scope="col"
            >
              {arrowIcon("buildingNmb")}
              Building number
            </th>
            <th
              className="click-th"
              onClick={() => onSort("apartmentNmb")}
              scope="col"
            >
              {arrowIcon("apartmentNmb")}
              Apartment number
            </th>
            <th className="click-th" 
            onClick={() => onSort("user")} 
            scope="col"
            >
              {arrowIcon("user")} 
              User
            </th>
            <th scope="col">
              <button onClick={onChange} className="btn btn-primary">
                show {status === "pending" ? "sent" : "pending "}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length === 0 ? (
            <tr>
              <td className="mt-3" colSpan="4">
                <p className="h6">There is 0 work orders whit this status </p>
              </td>
            </tr>
          ) : null}
          {sorted.map(order => (
            
            <tr key={order.id}>
              <td> <button className="mdc-button btn-sm btn">Select</button> </td>
              <td>{order.buildingNmb}</td>
              <td>{order.apartmentNmb}</td>
              <td> {order.user}</td> 
              <td>{order.status}</td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;


