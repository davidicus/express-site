import React, { Component, Fragment } from "react";

class Modal extends Component {
  render() {
    const { shown, handleClick, type } = this.props;
    const deliveryFormElements = (
      <Fragment>
        <label htmlFor="name" className="modal-form-label">
          Full Name
          <input id="name" type="input" className="modal-form-input" />
        </label>
        <label htmlFor="phone" className="modal-form-label">
          Phone Number
          <input id="phone" type="input" className="modal-form-input" />
        </label>
        <label htmlFor="pickupAddress" className="modal-form-label">
          Pickup Address
          <input id="pickupAddress" type="input" className="modal-form-input" />
        </label>
        <label htmlFor="deliveryAddress" className="modal-form-label">
          Delivery Address
          <input
            id="deliveryAddress"
            type="input"
            className="modal-form-input"
          />
        </label>
        <button className="modal-form-submit">Next</button>
      </Fragment>
    );
    const driverFormElements = (
      <Fragment>
        <label htmlFor="firstName" className="modal-form-label">
          First Name
          <input id="firstName" type="input" className="modal-form-input" />
        </label>
        <label htmlFor="lastName" className="modal-form-label">
          Last Name
          <input id="lastName" type="input" className="modal-form-input" />
        </label>
        <label htmlFor="address" className="modal-form-label">
          Address
          <input id="address" type="input" className="modal-form-input" />
        </label>
        <button className="modal-form-submit">Next</button>
      </Fragment>
    );
    return shown ? (
      <div className={`modal ${type}`}>
        <span
          className="modal-exit-toggle modal-toggle"
          onClick={handleClick}
          data-type="modal"
        />
        <div className="modal-wrapper">
          <h3 className="modal-header">
            {type === "delivery" ? "Schedule A Delivery" : "Become A Driver"}
          </h3>
          <p className="modal-header-blurb">
            {type === "delivery" ? "In 3 easy steps" : ""}
          </p>
          <form className="modal-form">
            {type === "delivery" ? deliveryFormElements : driverFormElements}
          </form>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
