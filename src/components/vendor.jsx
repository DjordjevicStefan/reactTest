import React, { Component } from 'react'
import {getVendor} from "../services/vendor"

import { toast, ToastContainer } from "react-toastify";

import AdminNavbar from "./common/adminNavbar";
import TableName from "./common/tableName";

export class Vendor extends Component {
   state = {
     vendor : {
       firstName : "" ,
       lastName : "" ,
       email : "" ,
       profession : "",
       calendar : []
     },
     load : false 
   }


   //// fetch vendor data from database
  async componentDidMount() {
    const userId = this.props.match.params.id;
    if (userId === "new") {
      this.setState({ load: true });
      return;
    }

     const { data : vendor } = await getVendor(userId) ;
     console.log(vendor);
     
      if (vendor.error) {
         toast.error("Database error,vendor not found");
         return ;
      } ;
      this.setState(() => ({
            vendor: vendor,
            load: true
      }));
       


     


    // try {
    //   const { data: orders } = await getAllWorkorders();
    //   if (orders.error) {
    //     toast.error(orders.error);
    //   }
    //   this.setState({ orders: orders });


    //   const { data } = await getUser(this.props.match.params.id);
    //   this.setState(() => ({
    //     user: data.user,
    //     load: true
    //   }));
    // } catch (error) {
    //   if (error.status === 400 || error.status) {
    //     toast.error("database error!");
    //   }
    // }
  }


  render() {
    const {load} = this.state ;
     
    if (load === false) {
      return (
        <div>
          <AdminNavbar pageName="Vendor" />
          <TableName tablename="Loading...." />
          <ToastContainer />
        </div>
      );
    }
    
    const {vendor, firstName, lastName} = this.state.vendor ;
    

    return (
      <div>
        <ToastContainer />
        <AdminNavbar
          pageName={
            this.props.match.params.id === "new"
              ? "New user"
              : firstName + " " + lastName
          }
        />

      </div>
    )
  }
}

export default Vendor ;



