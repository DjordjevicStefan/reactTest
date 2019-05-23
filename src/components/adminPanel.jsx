import React, { Component } from 'react'
import AdminNavbar from './common/adminNavbar';

import getAllWorkorders from "../fakeServices/workOrders" ;
import AdminTable from './semicommon/adminTable';

class AdminPanel extends Component {
  state = { 
    orders : [],
    btnStatus : "pending",
    sortColumn : { path:  "buildingNmb" , order : "asc" }
   }

  //// http request from the mongo database
  componentDidMount(){
    let initalOrders =  getAllWorkorders();
    this.setState({orders: initalOrders})
  }
  
  //// show correct order status
  handleChangeStatus =()=> {
       if (this.state.btnStatus === "pending") return (this.setState({btnStatus : "sent"}));
       if (this.state.btnStatus === "sent") return (this.setState({btnStatus : "pending"}));
  }

  //// sorting the table 
  handleSort = (path) => {
    
    if (this.state.sortColumn.path === path) {
      let order = (this.state.sortColumn.order === "asc") ? "desc" : "asc" ;
      this.setState({sortColumn: { path: path, order : order  }})
    } else {
      this.setState({sortColumn: { path: path, order : "asc"  }})
    }
  }

  render() { 
    return ( <div>
      <AdminNavbar pageName="admin panel" />
      <AdminTable sortColumn={this.state.sortColumn} onSort={this.handleSort} onChange={this.handleChangeStatus} status={this.state.btnStatus} allOrders={this.state.orders}/>
    </div> );
  }
}
 
export default AdminPanel;