import Banner from "@/comps/banner";
import styles from "./page.module.css";
import About from "@/comps/about";
import Services from "@/comps/services";
import HowItWorks from "@/comps/howitworks";
import Why from "@/comps/whychooseus";
import Contact from "@/comps/contact";
import FAQ from "@/comps/faq";
import Footer from "@/comps/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
