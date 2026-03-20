"use client";

import { motion } from "framer-motion";
import styles from "./about.module.css";

export default function About() {
  return (
    <section className={styles.about_container}>
      <motion.div
        className={styles.about_content}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About DNA Molecular Diagnostics</h2>

        <p>
          DNA Molecular Diagnostics International is a leading provider of
          advanced DNA testing services, serving clients across Zimbabwe, the
          SADC region, the United Kingdom, and the United States.
        </p>

        <p>
          We combine cutting-edge molecular science with a deep commitment to
          accuracy, confidentiality, and client care. Every result is handled
          with precision and integrity.
        </p>
      </motion.div>

      {/* 🖼️ IMAGE PLACEHOLDER */}
      <motion.div
        className={styles.about_image}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        IMAGE HERE
      </motion.div>
    </section>
  );
}
