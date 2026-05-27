import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerCard}>
        <div className={styles.footerTop}>
          <div className={styles.brandColumn}>
            <div className={styles.logoWrap}>
              <div className={styles.logoIcon}>
                <img src="/images/molecular.png" alt="logo" />
              </div>
              {/* <span className={styles.logoText}>DNA Molecular Diagnostics</span> */}
            </div>

            <p className={styles.description}>
              Providing accurate, confidential, and reliable DNA testing
              services to help families, individuals, and organizations make
              informed decisions.
            </p>

            <div className={styles.socials}>
              <a href="#" aria-label="Facebook">
                {/* <FacebookIcon size={18} /> */}
              </a>
              <a href="#" aria-label="Instagram">
                {/* <Instagram size={18} /> */}
              </a>
              <a href="#" aria-label="LinkedIn">
                {/* <Linkedin size={18} /> */}
              </a>
              <a href="#" aria-label="YouTube">
                {/* <Youtube size={18} /> */}
              </a>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div>
              <h4>Services</h4>
              <a href="#">Paternity Testing</a>
              <a href="#">Relationship Testing</a>
              <a href="#">Legal DNA Testing</a>
              <a href="#">Immigration DNA</a>
            </div>

            <div>
              <h4>Resources</h4>
              <a href="#">How It Works</a>
              <a href="#">FAQs</a>
              <a href="#">Blog</a>
              <a href="#">Book a Test</a>
            </div>

            <div>
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.footerBottom}>
          <p>© 2026 DNA Molecular Diagnostics. All rights reserved.</p>

          <div className={styles.contactLinks}>
            <span>{/* <Phone size={14} /> +263 000 000 000 */}</span>
            <span>{/* <Mail size={14} /> info@dnadiagnostics.co.zw */}</span>
            <span>{/* <MapPin size={14} /> Harare, Zimbabwe */}</span>
          </div>
        </div>
      </div>

      <h1 className={styles.bgText}>MOLECULAR</h1>
    </footer>
  );
}
