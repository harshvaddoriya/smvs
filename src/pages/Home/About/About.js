import React from 'react';
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.mainContainer}>
        <div className={styles.innerContainer}>
             <h2>Shree Swaminarayan Sampraday LNDYM - Bal Vibhag</h2>

             <div className={styles.firstContent}>
                <p>LNDYM is the youth wing of Shree Swaminarayan Vadtal Gadi, dedicated to nurturing spiritual values, discipline, and service among youth.
                Guided by H.H. Acharya Shree Ajendraprasadji Maharaj, it inspires young minds to live with devotion and purpose.</p>
             </div>

             <div className={styles.activity}>
                <h3>{}</h3>
             </div>
        </div>
    </section>
  )
}

export default About