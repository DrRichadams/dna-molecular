import styles from "./faq.module.css";

const faqs = [
  {
    question: "What is DNA Molecular Diagnostics International?",
    answer:
      "DNA Molecular Diagnostics International is a provider of advanced DNA testing services for individuals, healthcare professionals, organizations, and institutions.",
  },
  {
    question: "Where is DNA Molecular Diagnostics located?",
    answer: "The company is located at 57 Central Avenue, Harare, Zimbabwe.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve clients across Zimbabwe, the SADC region, the United Kingdom, and the United States.",
  },
  {
    question: "What DNA testing services do you offer?",
    answer:
      "We offer paternity testing, maternity testing, prenatal paternity testing, sibling testing, grandparent testing, immigration DNA testing, Y-Chromosome testing, mtDNA sequencing, and relationship DNA testing.",
  },
  {
    question: "Do you offer paternity DNA testing?",
    answer:
      "Yes. We offer father-versus-child DNA testing for both peace-of-mind and legal purposes.",
  },
  {
    question: "Do you offer maternity DNA testing?",
    answer:
      "Yes. We offer mother-versus-child DNA testing to help confirm biological maternity.",
  },
  {
    question: "Can testing be done if the alleged father is unavailable?",
    answer:
      "Yes. If the biological parent is not available, other relationship tests may be considered, including grandparent, sibling, aunt, or uncle DNA testing.",
  },
  {
    question: "Do you offer prenatal DNA testing?",
    answer:
      "Yes. Prenatal DNA testing is available while the mother is still pregnant. According to the company profile, the pregnancy should be at least 9 weeks old, and this test is done in Harare by appointment.",
  },
  {
    question: "Do you offer gender detection before birth?",
    answer:
      "Yes. Gender detection testing is available before the baby is born.",
  },
  {
    question: "How can I contact DNA Molecular Diagnostics?",
    answer:
      "You can contact the company by phone on 0787 068 015 or 0787 068 095, or by email at moleculardiagnosticszim@gmail.com.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.faq_section} id="faq">
      <div className={styles.bg_glow}></div>

      <div className={styles.header_area}>
        <span className={styles.section_tag}>FAQs</span>
        <h2>Frequently Asked Questions</h2>
        <p>
          Clear answers about our DNA testing services, service areas, testing
          options, and how to get started.
        </p>
      </div>

      <div className={styles.faq_grid}>
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            className={styles.faq_card}
            style={{ "--delay": `${index * 0.07}s` }}
          >
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
