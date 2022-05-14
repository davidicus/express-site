import React from 'react';
import fma from '../../img/fma.jpg';

const Contact = () => (
  <section id="contact" className="contact section">
    <div className="contact-wrap">
      <div className="contact-wrap-left">
        <h3 className="section-header">Let's Talk</h3>
        <p className="contact-blurb section-blurb">
          For the most reliable service in South Florida. Guaranteed. Anything,
          Anywhere, Anytime.
        </p>
        <a className="contact-link" href="mailto:xpressmessenger@aol.com">
          Contact us
        </a>
      </div>
      <div className="contact-wrap-right">
        <a className="contact-number" href="tel:8776516024">
          (877) 651 - 6024
        </a>
        <p className="contact-addy">
          123 NW 13th St.
          <span>Boca Raton, FL 33432</span>
        </p>
        <a href="http://www.floridamessenger.org/">
          <img src={fma} alt="Florida Messenger Association" />
        </a>

        <a
          className="contact-review-link"
          href="https://g.page/r/CThdCVNZHxrWEAI/review"
        >
          Add a <span>review</span> on Google for <br /> a <b>FREE</b> local
          delivery
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
