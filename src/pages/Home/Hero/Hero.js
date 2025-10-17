"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Video1 from "@assets/videos/video1.mp4";
import Video2 from "@assets/videos/video2.mp4";
import Video3 from "@assets/videos/video3.mp4";

import styles from "./Hero.module.scss";

const videos = [Video1, Video2, Video3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % videos.length);

  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper}>
        {videos.map((video, index) => (
          <motion.video
            key={index}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className={`${styles.video} ${current === index ? styles.active : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: current === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          />
        ))}

        <div className={`${styles.arrow} ${styles.left}`} onClick={handlePrev}>
          &#10094;
        </div>
        <div className={`${styles.arrow} ${styles.right}`} onClick={handleNext}>
          &#10095;
        </div>

        <div className={styles.dots}>
          {videos.map((_, index) => (
            <span
              key={index}
              className={current === index ? styles.active : ""}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
