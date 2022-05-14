import React from 'react';
import boxCart from '../../img/courierPushingCart.jpeg';
import driver from '../../img/driver.jpeg';

const About = () => (
  <div id="about" className="about section">
    <p className="about-text section-blurb">
      <span className="about-text__bold">Express Messenger Service</span> has
      been meeting the "On Demand" and "Scheduled" delivery requirements of top
      Florida businesses since 1985!
    </p>
    <div className="about-photo">
      <span>
        Our contractors are TSA approved and approved by the Federal Aviation
        Administration (FAA) for the Indirect Air Carrier Standard Security
        Program (IACSSP).
      </span>
      <img src={boxCart} alt="delivery man" />
    </div>
    <div className="about-photo-secondary">
      <span>
        All contractors are uniformed and OSHA trained. Ready to go 24 hours a
        day 7 days a week.
      </span>
      <img src={driver} alt="delivery man with clip board" />
    </div>
  </div>
);

export default About;
