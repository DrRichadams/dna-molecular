"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./banner.module.css";

export default function Banner() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.96]);

  return (
    <motion.section
      style={{ opacity, scale }}
      className={styles.banner_container}
    >
      {/* 🎥 VIDEO BACKGROUND */}
      <video className={styles.video_bg} autoPlay muted loop playsInline>
        <source src="/images/banner/banner.mp4" type="video/mp4" />
      </video>

      {/* 🧊 FULL GLASS OVERLAY */}
      <div className={styles.glass_overlay}></div>

      {/* 🌈 MOVING LIGHT SWEEP */}
      <div className={styles.light_sweep}></div>

      {/* 🧬 CONTENT */}
      <div className={styles.banner_content}>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Precision DNA Testing You Can Trust
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          Accurate, confidential, and scientifically advanced DNA diagnostics
          for individuals, families, and institutions.
        </motion.p>

        <motion.div
          className={styles.cta_group}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          <button className={styles.primary_btn}>Book a Test</button>
          <button className={styles.secondary_btn}>Learn More</button>
        </motion.div>
      </div>
    </motion.section>
  );
}
