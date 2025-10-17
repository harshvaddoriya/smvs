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
          <img src={Images.Logo} alt="Logo" className={styles.logo} />
          <div className={styles.socialIcons}>
            <a href="https://www.youtube.com/SwaminarayanVadtalGadiOfficial?sub_confirmation=1" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/swaminarayanvadtalgadi_/" target="_blank" rel="noopener noreferrer">
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

        <div className={styles.column}></div>

        <div className={styles.column}>
          <div className={styles.policyLinks}>
            <a href="/terms-and-condition">Terms & Conditions</a>
            <a href="/privacy-policy">Privacy Policy</a>
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
