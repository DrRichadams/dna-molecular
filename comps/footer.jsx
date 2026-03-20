"use client";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>DNA Molecular Diagnostics</h3>
        <p>Precision. Confidentiality. Trust.</p>
      </div>

      <div>
        <p>57 Central Avenue</p>
        <p>Harare, Zimbabwe</p>
      </div>

      <div>
        <p>© 2026 All Rights Reserved</p>
      </div>
    </footer>
  );
}
