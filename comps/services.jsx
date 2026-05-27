import {
  Baby,
  HeartHandshake,
  UsersRound,
  UserRoundCheck,
  ShieldCheck,
} from "lucide-react";
import styles from "./services.module.css";

const services = [
  {
    title: "Paternity Testing",
    text: "Reliable DNA testing to help confirm biological fatherhood with privacy and care.",
    icon: Baby,
  },
  {
    title: "Maternity Testing",
    text: "Accurate testing to confirm biological motherhood for personal or legal needs.",
    icon: HeartHandshake,
  },
  {
    title: "Grandparent DNA Testing",
    text: "Useful when a direct parent is unavailable for testing.",
    icon: UsersRound,
  },
  {
    title: "Sibling DNA Testing",
    text: "Determine whether two individuals share one or both biological parents.",
    icon: UserRoundCheck,
  },
  {
    title: "Aunt / Uncle Testing",
    text: "Helpful relationship testing when parent-child testing is not possible.",
    icon: ShieldCheck,
  },
];

export default function Services() {
  return (
    <section className={styles.services_section} id="services">
      <div className={styles.bg_glow}></div>

      <div className={styles.header_area}>
        <span className={styles.section_tag}>Our Services</span>
        <h2>DNA Testing Services Designed for Clarity and Confidence</h2>
        <p>
          From paternity testing to extended family relationship analysis, our
          services are handled with accuracy, confidentiality, and professional
          care.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className={styles.card}
              style={{ "--delay": `${index * 0.1}s` }}
            >
              <div className={styles.icon_box}>
                <Icon size={26} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <div className={styles.card_footer}>
                <span>Confidential</span>
                <span>Accurate</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
