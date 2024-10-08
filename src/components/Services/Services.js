import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <div id="services" className="services section">
        <h3 className="services-header section-header">Our Services</h3>
        <p className="services-blurb section-blurb">
          We specialize in Medical, Legal, Office Supplies, Bank, Airports,
          General Deliveries. IMMEDIATE dispatch throughout South and Central
          Florida
        </p>
        <div className="services-card-wrap">
          <div className="services-card">
            <span className="services-card-content">
              <h4>Deliveries</h4>
              <p className="services-card-blurb">
                We provide both scheduled and on demand deliveries, 24 hours a
                day, 7 days a week. We can handle packages of any size or shape
                and quantity
              </p>
            </span>
          </div>
          <div className="services-card">
            <span className="services-card-content">
              <h4>Logistics</h4>
              <p className="services-card-blurb">
                Efficiency and reliability are the keys to any business. At{' '}
                <span>Express Messenger Service</span> we get your goods where
                they need to go on time!
              </p>
            </span>
          </div>
          <div className="services-card">
            <span className="services-card-content">
              <h4>Warehousing</h4>
              <p className="services-card-blurb">
                Secure warehouse space to store your off-site records, critical
                backup tapes, and inventory (on a short or long-term basis)
              </p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
