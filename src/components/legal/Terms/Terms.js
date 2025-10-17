import React from "react";
import styles from "./Terms.module.scss";

export default function Terms() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1>Terms of Service</h1>

        <section>
          <p>
            This website is managed by <strong>SHREE SWAMINARAYAN VADTAL GADI (SVG)</strong>. 
            Throughout this site, references such as “we”, “us”, or “our” denote Shree Swaminarayan Vadtal Gadi – (SVG).
          </p>

          <p>
            Shree Swaminarayan Mandir – SHREE SWAMINARAYAN GADI TRUST-VADTAL(SVG) provides this platform, including all content, tools, 
            and services, on the condition that you accept these terms, policies, and notices outlined herein.
          </p>

          <p>
            By accessing our site or making donations, you are engaging with our “Service” and agree to comply with these terms and conditions 
            (“Terms of Service” or “Terms”), including any additional rules or policies referenced or linked within this document. 
            These terms apply to all visitors, donors, and content contributors.
          </p>

          <p>
            Please review these Terms carefully before using the website. By continuing to access or interact with any part of this site, 
            you acknowledge and agree to these Terms. If you disagree with any part of these terms, you must refrain from using the site or its services.
          </p>

          <p>
            Any new tools, features, or updates added to the website will also be governed by these Terms of Service. 
            You can view the latest version of the Terms at any time on this page. 
            We may update or modify these Terms by posting changes on our website, and it is your responsibility to stay informed. 
            Continued use of the website after updates constitutes your acceptance of the changes.
          </p>
        </section>

        <h2>Third-Party Links</h2>
        <section>
          <p>
            Some content or services on this website may include materials from external third parties.
          </p>

          <p>
            Links to third-party websites may direct you outside of our platform. We are not responsible for evaluating the accuracy, 
            content, or reliability of these third-party sites, and we disclaim any liability for materials or services provided by them.
          </p>

          <p>
            Any transactions or interactions with third-party sites are conducted entirely at your own risk. 
            Please review their policies before engaging. Complaints or inquiries regarding third-party content should be directed to the respective provider.
          </p>
        </section>

        <h2>Prohibited Uses</h2>
        <section>
          <p>
            In addition to other restrictions outlined in these Terms, you must not use the website or its content to:
          </p>
          <ul>
            <li>Engage in unlawful activities</li>
            <li>Encourage or participate in illegal actions</li>
            <li>Violate any applicable local, state, or international laws or regulations</li>
            <li>Infringe upon our intellectual property or that of others</li>
            <li>Harass, abuse, defame, discriminate, or threaten anyone</li>
            <li>Provide false or misleading information</li>
            <li>Upload or spread malicious software or viruses</li>
            <li>Collect personal data of others without consent</li>
            <li>Send spam, phishing, or scrape the site</li>
            <li>Use the site for immoral or obscene purposes</li>
            <li>Bypass security measures of this site or connected platforms</li>
          </ul>
          <p>We reserve the right to suspend or terminate your access if you violate any of these restrictions.</p>
        </section>

        <h2>Changes to Terms of Service</h2>
        <section>
          <p>
            The latest version of the Terms of Service is always available on this page.
          </p>
          <p>
            We may modify, update, or replace any portion of these Terms at our discretion. 
            It is your responsibility to review the Terms periodically. 
            Continuing to use the website after any changes signifies your agreement to the updated Terms.
          </p>
        </section>
      </div>
    </div>
  );
}
