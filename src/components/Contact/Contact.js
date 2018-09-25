import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact section">
        <div className="contact-wrap">
          <div className="contact-wrap-left">
            <h3 className="section-header">Let's Talk</h3>
            <p className="contact-blurb section-blurb">
              For the most reliable service in South Florida. Gauranteed
            </p>
            <a className="contact-link" href="mailto:redrose15@aol.com">
              Contact us
            </a>
          </div>
          <div className="contact-wrap-right">
            <a className="contact-number" href="tel:5616441552">
              (561) 644 - 1552
            </a>
            <p className="contact-addy">
              1234 Boca Rd.
              <span>Boca Raton, FL 33432</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
