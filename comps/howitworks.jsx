"use client";

import { motion } from "framer-motion";
import styles from "./howitworks.module.css";

const steps = [
  "Book Your Test",
  "Sample Collection",
  "Laboratory Analysis",
  "Receive Results",
];

export default function HowItWorks() {
  return (
    <section className={styles.container}>
      <h2>Simple. Secure. Scientific.</h2>

      <div className={styles.steps}>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className={styles.step}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span>{i + 1}</span>
            <h3>{step}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
