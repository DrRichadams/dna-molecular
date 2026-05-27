import Image from "next/image";
import { ShieldCheck, Microscope, HeartHandshake, Globe2 } from "lucide-react";
import styles from "./about.module.css";

const features = [
  {
    icon: ShieldCheck,
    title: "Confidential",
    text: "Every case is handled with privacy, sensitivity, and professional care.",
  },
  {
    icon: Microscope,
    title: "Scientific Accuracy",
    text: "Advanced molecular testing supported by reliable diagnostic processes.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centered",
    text: "We guide individuals, families, and institutions through every step.",
  },
  {
    icon: Globe2,
    title: "International Reach",
    text: "Serving Zimbabwe, SADC, the United Kingdom, and the United States.",
  },
];

export default function About() {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.bg_glow}></div>

      <div className={styles.about_grid}>
        <div className={styles.visual_area}>
          <div className={styles.image_card}>
            <Image
              src="/images/about-banner.png"
              alt="Female doctor taking a DNA saliva swab from an elderly gentleman"
              fill
              sizes="(max-width: 620px) 100vw, (max-width: 980px) 90vw, 45vw"
              className={styles.about_image}
            />

            <div className={styles.image_overlay}></div>

            <div className={styles.floating_card}>
              <span>DNA</span>
              <strong>Precision Testing</strong>
              <small>Accurate. Private. Reliable.</small>
            </div>
          </div>

          <div className={styles.stats_card}>
            <div>
              <strong>4+</strong>
              <span>Regions Served</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Confidential Process</span>
            </div>
          </div>
        </div>

        <div className={styles.content_area}>
          <span className={styles.section_tag}>About Us</span>

          <h2>
            Trusted DNA Diagnostics Built on Science, Care, and Confidentiality
          </h2>

          <p className={styles.lead_text}>
            DNA Molecular Diagnostics International provides advanced DNA
            testing services for individuals, families, legal matters, and
            institutions across Zimbabwe, the SADC region, the United Kingdom,
            and the United States.
          </p>

          <p>
            We combine molecular science with a deeply human approach. Every
            sample, result, and client interaction is treated with accuracy,
            integrity, and discretion.
          </p>

          <div className={styles.feature_grid}>
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className={styles.feature_card}
                  key={item.title}
                  style={{ "--delay": `${index * 0.1}s` }}
                >
                  <Icon size={21} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
