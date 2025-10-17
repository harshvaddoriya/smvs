import React, { useState, useEffect } from "react";
import styles from "./EventCard.module.scss";

export default function EventCard({ images = [], heading, content, side = "left" }) {
  const isRight = side === "right";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return; 
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${isRight ? styles.reverse : ""}`}>
        <div className={styles.left}>
          <img
            src={images[currentImageIndex]}
            alt={heading}
            className={styles.image}
          />
        </div>
        <div className={styles.right}>
          <h3>{heading}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
