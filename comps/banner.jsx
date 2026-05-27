import Link from "next/link";
import { ShieldCheck, Microscope, Clock } from "lucide-react";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <section className={styles.banner_container}>
      <video className={styles.video_bg} autoPlay muted loop playsInline>
        <source src="/images/banner/banner.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay}></div>
      <div className={styles.dna_glow}></div>
      <div className={styles.light_sweep}></div>

      <div className={styles.banner_content}>
        <div className={styles.badge}>
          <span></span>
          Trusted DNA Diagnostics in Zimbabwe
        </div>

        <h1>Accurate DNA Testing for Life’s Most Important Answers</h1>

        <p>
          Confidential, reliable, and scientifically backed DNA diagnostics for
          individuals, families, legal matters, and institutions.
        </p>

        <div className={styles.cta_group}>
          <a
            href="https://wa.me/263787068015?text=Hello%20DNA%20Molecular%20Diagnostics,%20I%20would%20like%20to%20book%20a%20DNA%20test."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primary_btn}
          >
            Book a Test
          </a>

          <Link href="#services" className={styles.secondary_btn}>
            View Services
          </Link>
        </div>

        <div className={styles.trust_grid}>
          <div className={styles.trust_card}>
            <ShieldCheck size={20} />
            <span>Confidential Results</span>
          </div>

          <div className={styles.trust_card}>
            <Microscope size={20} />
            <span>Advanced Testing</span>
          </div>

          <div className={styles.trust_card}>
            <Clock size={20} />
            <span>Fast Turnaround</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom_fade}></div>
    </section>
  );
}
