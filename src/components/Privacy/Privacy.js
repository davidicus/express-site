import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <section className="privacy section">
      <div className="privacy-wrap">
        <Link to={`/`} className="privacy-back-link">
          {`<- Go Back`}
        </Link>
        <h2 id="privacy" className="section-header">
          Privacy Policy
        </h2>
        <p>Privacy Policy for XpressMessenger.com</p>
        <p>Effective Date: July 4, 2024</p>
        <p>
          Thank you for choosing Express Messenger. This Privacy Policy outlines
          how we collect, use, disclose, and protect your information when you
          visit our website [https://www.xpressmessenger.com/] (the "Site") and
          use our services.
        </p>
        <h3 className="section-sub-header">1. Information We Collect</h3>
        <p>We collect information in the following ways:</p>
        <h3 className="section-sub-header">1.1 Information You Provide:</h3>
        <p>
          When you register on our site, place an order, or fill out a form, we
          may collect personal information such as your name, email address,
          mailing address, phone number, or payment information.
        </p>
        <h3 className="section-sub-header">
          1.2 Information Automatically Collected:
        </h3>
        <p>
          When you visit our Site, we may automatically collect certain
          information about your device, including your IP address, browser
          type, referring/exit pages, and operating system.
        </p>
        <h3 className="section-sub-header">2. Use of Information</h3>
        <p>We use the information we collect for the following purposes:</p>
        <ul className="section-list">
          <li>
            To personalize your experience and to allow us to deliver the type
            of content and product offerings in which you are most interested.
          </li>
          <li>To improve our website in order to better serve you.</li>
          <li>To process transactions.</li>
          <li>
            To send periodic emails regarding your order or other products and
            services.
          </li>
        </ul>
        <h3 className="section-sub-header">3. Protection of Information</h3>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information when you place an order or enter, submit, or
          access your personal information.
        </p>
        <h3 className="section-sub-header">
          4. Disclosure of Information to Third Parties
        </h3>
        <p>
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information. This does not include trusted
          third parties who assist us in operating our website, conducting our
          business, or servicing you, so long as those parties agree to keep
          this information confidential.
        </p>
        <h3 className="section-sub-header">5. Cookies</h3>
        <p>
          We may use cookies to understand and save your preferences for future
          visits, keep track of advertisements, and compile aggregate data about
          site traffic and site interaction so that we can offer better site
          experiences and tools in the future.
        </p>
        <h3 className="section-sub-header">6. Your Consent</h3>
        <p>By using our site, you consent to our website privacy policy.</p>
        <h3 className="section-sub-header">7. Changes to our Privacy Policy</h3>
        <p>
          If we decide to change our privacy policy, we will post those changes
          on this page. Policy changes will apply only to information collected
          after the date of the change.
        </p>
        <h3 className="section-sub-header">8. Contacting Us</h3>
        <p>
          If there are any questions regarding this privacy policy, you may
          contact us using the information below:
        </p>
        <p>
          Express Messenger Service <br />
          123 NW 13th St. <br />
          Boca Raton, FL 33432 <br />
          <a href="tel:18776516024">(877) 651-6024</a>
          <br />
          <a href="mailto:info@xpressmessenger.com">info@xpressmessenger.com</a>
        </p>
      </div>
    </section>
  );
};

export default Privacy;
