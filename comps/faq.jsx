"use client";

import { useState } from "react";
import styles from "./faq.module.css";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    "How accurate are the tests?",
    "How long do results take?",
    "Is my data confidential?",
  ];

  return (
    <section className={styles.container}>
      <h2>Frequently Asked Questions</h2>

      {faqs.map((q, i) => (
        <div key={i} onClick={() => setOpen(i)}>
          <h4>{q}</h4>
          {open === i && <p>Answer goes here...</p>}
        </div>
      ))}
    </section>
  );
}
