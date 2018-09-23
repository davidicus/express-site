import React, { Component } from "react";

class Rates extends Component {
  render() {
    return (
      <div id="rates" className="rates">
        <h3 className="rates-header">Our Rates</h3>
        <p className="rates-blurb">
          We offer the lowest rates in the business while still supplying first
          rate service up and down the east coast.
        </p>
        <div className="rates-table">
          <p
            className="rates-table-item insurance"
            data-price="$1.50 per delivery"
          >
            Insurance
          </p>
          <p
            className="rates-table-item waitingTime"
            data-price="$0.40 per min / $24.00 per hour"
          >
            Waiting Time
          </p>
          <p
            className="rates-table-item weight"
            data-price="$0.08 per pound / first 20lbs free"
          >
            Weight
          </p>
          <p
            className="rates-table-item boxTruck"
            data-price="$
$65.00 per hour / 2 hour minimum"
          >
            Box Truck
          </p>
          <p
            className="rates-table-item cancellations"
            data-price="$10.00 minimum"
          >
            Cancellations
          </p>
          <p
            className="rates-table-item airportFee"
            data-price="$8.00 additional"
          >
            Airport Fee
          </p>
        </div>
      </div>
    );
  }
}

export default Rates;
