"use client";

import { motion } from "framer-motion";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2>Get Tested. Get Answers.</h2>

        <p>Visit us at 57 Central Avenue, Harare or book your test today.</p>

        <button className={styles.cta}>Book Appointment</button>
      </motion.div>
    </section>
  );
}
