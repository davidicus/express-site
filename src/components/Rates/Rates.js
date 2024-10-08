import React from 'react';
import warehouse from '../../img/panoWarehouse.jpeg';

const Rates = () => (
  <div id="rates" className="rates section">
    <div>
      <h3 className="rates-header section-header">Our Rates</h3>
      <p className="rates-blurb section-blurb">
        We offer the lowest rates in the business while still supplying first
        rate service up and down the east coast. Up to 50% off for new
        customers!
      </p>
    </div>
    <img src={warehouse} className="rates-photo" alt="warehouse" />
    <a id="rates" className="contact-number" href="tel:8776516024">
      Call to get pricing. (877) 651 - 6024.
    </a>
    {/* <div className="rates-table">
          <div className="rates-table-group">
            <p
              className="rates-table-item insurance"
              data-price="$1.50 per delivery"
            >
              <span>Insurance</span>
              <span>...........</span>
              <span>$1.50 per delivery</span>
            </p>
            <p
              className="rates-table-item waitingTime"
              data-price="$0.40 per min / $24.00 per hour"
            >
              <span>Waiting Time</span>
              <span>...........</span>
              <span>$0.40 per min / $24.00 per hour</span>
            </p>
            <p
              className="rates-table-item weight"
              data-price="$0.08 per pound / first 20lbs free"
            >
              <span>Weight</span>
              <span>...........</span>
              <span>$0.08 per pound / first 20lbs free</span>
            </p>
          </div>
          <div className="rates-table-group">
            <p
              className="rates-table-item boxTruck"
              data-price="$
  $65.00 per hour / 2 hour minimum"
            >
              <span>Box Truck</span>
              <span>...........</span>
              <span>$ $65.00 per hour / 2 hour minimum</span>
            </p>
            <p
              className="rates-table-item cancellations"
              data-price="$10.00 minimum"
            >
              <span>Cancellations</span>
              <span>...........</span>
              <span>$10.00 minimum</span>
            </p>
            <p
              className="rates-table-item airportFee"
              data-price="$8.00 additional"
            >
              <span>Airport Fee</span>
              <span>...........</span>
              <span>$8.00 additional</span>
            </p>
          </div>
        </div> */}
  </div>
);

export default Rates;
