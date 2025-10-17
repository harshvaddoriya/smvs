import React from "react";
import styles from "./PrivacyPolicy.module.scss";

export default function PrivacyPolicy() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1>Privacy Policy</h1>

        <section>
          <p>
            <strong>SHREE SWAMINARAYAN GADI TRUST-VADTAL (SVG)</strong> respects your privacy and is committed to protecting your personal information. 
            All interactions with us are kept strictly confidential. We do not share your email address, phone number, or personal details with donors or any third parties without your consent.
          </p>

          <p>
            To safeguard the privacy of our donors and maintain trust, we follow clear policies regarding the use of personal information:
          </p>
          <ul>
            <li>Your personal information will never be disclosed or used without your explicit permission.</li>
            <li>We do not share donor information with other NGOs or organizations for financial or marketing purposes.</li>
            <li>Donors may request information about their donations at any time, and we will respond to such queries promptly.</li>
          </ul>
        </section>

        <h2>Security</h2>
        <section>
          <p>
            We take the security of our website visitors seriously and implement measures to protect your account and personal data. 
            However, no system is completely immune to unauthorized access. In case you suspect any unauthorized use of your account or notice a security breach, please contact us immediately.
          </p>
        </section>

        <h2>Accuracy and Timeliness of Information</h2>
        <section>
          <p>
            While we strive to provide accurate, complete, and up-to-date information on our website, we cannot guarantee that all content is free from errors or omissions. 
            Information on this site is intended for general reference only and should not be relied upon as the sole source for making decisions.
          </p>

          <p>
            Some content on this site may include historical information. By nature, historical data is not current and is provided only for reference purposes. 
            We reserve the right to update or modify content at any time, but we are not obligated to provide updates. It is your responsibility to check the website regularly for changes.
          </p>
        </section>

        <h2>Consent and Use of Information</h2>
        <section>
          <p>
            By using our website or providing personal information, you consent to the collection and use of information in accordance with this Privacy Policy. 
            We use your information solely to provide services, manage donations, and improve your experience on our platform.
          </p>
        </section>
      </div>
    </div>
  );
}
