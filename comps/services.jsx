"use client";

import { motion } from "framer-motion";
import styles from "./services.module.css";

const services = [
  "Paternity Testing",
  "Maternity Testing",
  "Grandparent DNA Testing",
  "Sibling DNA Testing",
  "Aunt / Uncle Testing",
];

export default function Services() {
  return (
    <section className={styles.services_container}>
      <h2>Our DNA Testing Services</h2>

      <div className={styles.grid}>
        {services.map((service, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={styles.image_placeholder}>IMAGE</div>
            <h3>{service}</h3>
            <p>Accurate and reliable testing with strict confidentiality.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
