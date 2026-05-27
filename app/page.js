import Banner from "@/comps/banner";
import styles from "./page.module.css";
import About from "@/comps/about";
import Services from "@/comps/services";
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
