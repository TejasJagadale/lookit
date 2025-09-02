import React from "react";
import "../styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p>Last Updated: September 02, 2025</p>
      </div>

      <div className="privacy-content">
        <div className="privacy-intro">
          <p>
            Please read this Privacy Policy very carefully. This contains
            important information about Your rights and obligations. This
            Privacy Policy applies to the LooKit which is owned by
            MPeoples Business Solutions Private Limited.
          </p>
          <p>
            By downloading, installing, using or by registering Your profile
            with the App, You are consenting to the use, collection, transfer,
            storage, disclosure and other uses of Your information in the manner
            set out in this Privacy Policy.
          </p>
        </div>

        <section className="policy-section">
          <h2>Information We Collect</h2>

          <div className="subsection">
            <h3>1. Personal Information:</h3>
            <p>
              We may collect personal information, such as your name and email
              address, when you voluntarily provide it for purposes such as
              newsletter subscriptions or user accounts.
            </p>
          </div>

          <div className="subsection">
            <h3>2. Non-Personal Information:</h3>
            <p>
              We may also collect non-personal information, such as browser
              type, IP address, and the pages you visit on our site. This
              information is collected to improve the functionality and
              performance of our website.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <h2>How We Use Your Information</h2>

          <div className="subsection">
            <h3>1. Personalization:</h3>
            <p>
              We may use your personal information to personalize your
              experience on our website, such as providing tailored content and
              recommendations.
            </p>
          </div>

          <div className="subsection">
            <h3>2. Communication:</h3>
            <p>
              With your consent, we may use your email address to send you
              newsletters, updates, and relevant information about our services.
            </p>
          </div>

          <div className="subsection">
            <h3>3. Analytics:</h3>
            <p>
              Non-personal information is collected for analytical purposes,
              helping us understand how visitors interact with our site and
              improve its performance.
            </p>
          </div>

          <div className="subsection">
            <h3>4. Cookies and Tracking Technologies:</h3>
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience on our website. You can choose to disable cookies
              through your browser settings, but please note that this may
              affect the functionality of certain features.
            </p>
          </div>

          <div className="subsection">
            <h3>5. Third-Party Links:</h3>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these external
              sites. Please review the privacy policies of these sites before
              providing any personal information.
            </p>
          </div>

          <div className="subsection">
            <h3>6. Your Choices:</h3>
            <p>
              You have the right to opt-out of receiving promotional
              communications from us and can update or delete your personal
              information by contacting us at mpeoplesofficial@gmail.com.
            </p>
          </div>

          <div className="subsection">
            <h3>7. Third Party Privacy Policies</h3>
            <p>
              Mpeoples Business Soluctions Pvt Ltd, Privacy Policy does not
              apply to other advertisers or websites. Thus, we are advising you
              to consult the respective Privacy Policies of these third-party ad
              servers for more detailed information. It may include their
              practices and instructions about how to opt-out of certain
              options. You can choose to disable cookies through your individual
              browser options. To know more detailed information about cookie
              management with specific web browsers, it can be found at the
              browsers respective websites.
            </p>
          </div>
        </section>

        <section className="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Terms and
            Conditions, do not hesitate to contact us at
            mpeoplesofficial@gmail.com
          </p>

          <div className="contact-info">
            <h3>Address</h3>
            <p>
              MPeoples Business Solutions Pvt Ltd, <br /> No 56/3-1 Ranga Nagar,{" "}
              <br /> 3rd Cross Street, Suramangalam, <br /> Salem-636005.
              <br />
              PHONE - +91 8508508590
            </p>
          </div>
        </section>

        <div className="effective-date">
          <p>These terms and conditions are effective as of 2024-09-02.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
