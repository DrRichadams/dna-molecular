import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Globe2,
  MessageCircleMore,
} from "lucide-react";

import styles from "./contact.module.css";

const contactItems = [
  {
    icon: Phone,
    title: "Phone Numbers",
    detail: "0787 068 015 / 0787 068 095",
    description: "Speak directly with our support and diagnostics team.",
  },
  {
    icon: Mail,
    title: "Email Address",
    detail: "moleculardiagnosticszim@gmail.com",
    description: "Send us inquiries, bookings, or consultation requests.",
  },
  {
    icon: MapPin,
    title: "Office Location",
    detail: "57 Central Avenue, Harare, Zimbabwe",
    description:
      "Visit our diagnostics office for appointments and consultations.",
  },
  {
    icon: Globe2,
    title: "Service Regions",
    detail: "Zimbabwe • SADC • UK • USA",
    description: "We provide services across multiple international regions.",
  },
  {
    icon: Clock3,
    title: "Availability",
    detail: "Appointments Available",
    description:
      "Flexible appointment scheduling for individuals and families.",
  },
  {
    icon: MessageCircleMore,
    title: "Client Support",
    detail: "Fast & Confidential Assistance",
    description: "Our team is ready to help guide you through the process.",
  },
];

export default function Contact() {
  return (
    <section className={styles.contact_section} id="contact">
      <div className={styles.bg_glow}></div>

      <div className={styles.header_area}>
        <span className={styles.section_tag}>Contact Us</span>

        <h2>We’re Here to Help You Every Step of the Way</h2>

        <p>
          Whether you need assistance with DNA testing, appointments, or general
          inquiries, our team is ready to assist you with professionalism and
          confidentiality.
        </p>
      </div>

      <div className={styles.contact_grid}>
        {contactItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={styles.contact_card}
              style={{ "--delay": `${index * 0.08}s` }}
            >
              <div className={styles.icon_box}>
                <Icon size={24} />
              </div>

              <h3>{item.title}</h3>

              <h4>{item.detail}</h4>

              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
