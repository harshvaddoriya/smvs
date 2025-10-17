import React from "react";
import styles from "./Organization.module.scss";
import images from "../../../assets/images";

const logos = [images.LNDYM, images.LNDMM, images.USA, images.UK, images.CANADA];

const Organization = () => {
    return (
        <section className={styles.organization}>
            <h2>Our Organization</h2>
            <div className={styles.logoContainer}>
                {logos.map((logo, index) => (
                    <div key={index} className={styles.logoBox}>
                        <img src={logo} alt={`Logo ${index}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Organization;
