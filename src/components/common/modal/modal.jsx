import React, { Component } from "react";

import { Modal } from "react-bootstrap";

import './modal.css';

class ModalMy extends Component {
  state = {};
  render() {

    const {onShowModal,isOpen,onClose,user, workOrders} = this.props ;
    const firstName = user.firstName ;  
    const lastName = user.lastName ;    

    console.log(workOrders);
     


    return (
      <div>
         <div className="showWoBtn">
            <button onClick={onShowModal} className="mdc-button btn-sm btn">
                  Show all work orders
            </button>
         </div>
        <Modal  show={isOpen} onHide={onClose}>
          <Modal.Header className="mHeader" closeButton>
            <Modal.Title>{firstName+" "+lastName +" work orders"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{
            <ul>
                {workOrders.map(order => <li key={order._id}> {order._id}</li> )}   
             </ul> }
            </Modal.Body>
          <Modal.Footer>
            {/* <button className="btn btn-primary" onClick={onClose}>
              Close
            </button> */}
            <button className="btn mdc-button" onClick={onClose}>
              Go back
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalMy;
