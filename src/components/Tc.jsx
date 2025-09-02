import React from "react";
import "../styles/TermsAndConditions.css";

const Tc = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms and Conditions</h1>
        <p className="effective-date">Effective Date: 02/09/2025</p>
      </div>

      <div className="terms-content">
        <div className="intro-section">
          <p>
            Welcome to LooKit By accessing or using our website
            https://mpeoples.in/ and our services, you agree to these Terms and
            Conditions. Please read these Terms carefully.
          </p>
        </div>

        <section className="terms-section">
          <h2>Acceptance Terms</h2>
          <p>
            By using our Site and Services, you agree to follow these Terms. If
            you do not agree, please do not use our Site or Services. We may
            update these Terms from time to time, and your continued use of our
            Site and Services is acceptance of any changes.
          </p>
        </section>

        <section className="terms-section">
          <h2>Use of Our Services</h2>
          <p>
            If you create an account, you are responsible for maintaining the
            confidentiality of your account credentials and for all activities
            that occur under your account. Notify us immediately if you suspect
            any issues or unauthorized use of your account.
          </p>
        </section>

        <section className="terms-section">
          <h2>Intellectual Property</h2>
          <div className="subsection">
            <h3>Ownership:</h3>
            <p>
              All content and materials on our Site, including text, graphics,
              logos, and software, are the property of Mpeoples business
              solution or its licensors and are protected by intellectual
              property laws.
            </p>
          </div>
          <div className="subsection">
            <h3>License:</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable license to
              access and use our Site and Services for personal or internal
              business purposes. You may not repost, distribute, or create the
              same as our work from our content without prior written consent.
            </p>
          </div>
        </section>

        <section className="terms-section">
          <h2>Third-Party Links</h2>
          <p>
            Our Site may contain links to third party websites or services. We
            are not responsible for the content of third parties. Accessing
            these links is at your own risk, and we encourage you to review
            their terms and privacy policies.
          </p>
        </section>

        <section className="terms-section">
          <h2>Limitation of Liability</h2>
          <p>
            LooKit is not liable for any indirect, incidental, special,
            consequence, or damages arising from or related to your use of our
            Site or Services. Our total liability is limited to the amount you
            have paid for our Services, if any.
          </p>
        </section>

        <section className="terms-section">
          <h2>Disclaimer of Warranties</h2>
          <p>
            Our Site and Services are provided "as is" and "as available"
            without warranties of any kind, either express or implied. We do not
            warrant that our Site or Services will be uninterrupted or error
            free, or that defects will be corrected.
          </p>
        </section>

        <section className="terms-section">
          <h2>Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our Site
            and Services at any time, without notice, for any reason, including
            if we believe you have violated these Terms.
          </p>
        </section>

        <section className="terms-section">
          <h2>Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of our country, without regard to its conflict of law
            principles. Any disputes arising from these Terms or your use of our
            Site and Services shall be resolved in the courts located in India.
          </p>
          <p>
            If any provision of these Terms is found to be invalid or
            unenforceable, the remaining provisions will remain in full force
            and effect.
          </p>
        </section>

        <section className="contact-section">
          <h2>Contact Information</h2>
          <p>
            If you have any questions or concerns about these Terms and
            conditions please contact us at:
          </p>
          <div className="contact-details">
            <h3>Mpeoples Business Solution Private Limited</h3>
            <p>
              MPeoples Business Solutions Pvt Ltd, <br /> No 56/3-1 Ranga Nagar, <br /> 3rd
              Cross Street, Suramangalam, <br /> Salem-636005.
            </p>
            <p className="contact-email">mpeoplesofficial@gmail.com</p>
            <p className="contact-phone">8508508590</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tc;
