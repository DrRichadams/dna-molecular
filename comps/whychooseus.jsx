"use client";

import { motion } from "framer-motion";
import styles from "./whychooseus.module.css";

const points = [
  "High Accuracy Results",
  "Strict Confidentiality",
  "Professional Expertise",
  "International Reach",
  "Fast Turnaround Time",
];

export default function Why() {
  return (
    <section className={styles.container}>
      <h2>Why Clients Trust Us</h2>

      <div className={styles.grid}>
        {points.map((point, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {point}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
