"use client";

import { motion } from "framer-motion";
import styles from "./navbar.module.css";

export default function Navbar() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <nav className={styles.navbar}>
      {/* 🧬 LOGO */}
      <motion.div
        variants={zoomIn}
        initial="hidden"
        animate="show"
        className={styles.logo}
      >
        <img src="/images/molecular.png" alt="logo" className={styles.logo} />
      </motion.div>

      {/* 🔗 LINKS */}
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.nav_links}
      >
        <motion.li variants={slideIn}>Home</motion.li>
        <motion.li variants={slideIn}>About</motion.li>
        <motion.li variants={slideIn}>Services</motion.li>
        <motion.li variants={slideIn}>Contact</motion.li>
      </motion.ul>

      {/* 🎯 CTA */}
      <motion.button
        variants={zoomIn}
        initial="hidden"
        animate="show"
        className={styles.cta_btn}
      >
        Book Test
      </motion.button>
    </nav>
  );
}
