import Banner from "@/comps/banner";
import styles from "./page.module.css";
import About from "@/comps/about";
import Services from "@/comps/services";
import Footer from "@/comps/footer";
import FAQ from "@/comps/faq";
import Contact from "@/comps/contacts";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
