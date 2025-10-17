import React from 'react';
import styles from './Footer.module.scss';
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import Images from "../../assets/images/index";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.column}>
          <a href="/" className={styles.link}>
            <img src={Images.Logo} alt="Logo" className={styles.logo} />
          </a>
        </div>

        <div className={styles.column}>
          <p className={styles.heading}>Connect with SVG</p>
          <div className={styles.socialIcons}>
            <a href="https://www.youtube.com/SwaminarayanVadtalGadiOfficial?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/Indym_balvibhag/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/swaminarayanvadtalgadi/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://x.com/vadtalgadi" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.policyLinks}>
            <a href="/legal/terms-and-condition">Terms & Conditions</a>
            <a href="/legal/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Lndym-balvibhag, All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
