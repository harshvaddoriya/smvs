import React from "react";
import Images from "../../assets/images/index";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={Images.Banner} alt="Header Banner" className={styles.banner} />
    </header>
  );
};

export default Header;
