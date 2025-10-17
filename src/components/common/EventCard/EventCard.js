"use client";

import React from "react";
import styles from "./EventCard.module.scss";

export default function EventCard({ image, heading, content, side = "left" }) {
  const isRight = side === "right";

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.card} ${isRight ? styles.reverse : ""}`}>
        <div className={styles.left}>
          <img src={image} alt={heading} className={styles.image} />
        </div>
        <div className={styles.right}>
          <h3>{heading}</h3>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
