import Banner from "@/comps/banner";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner />
    </div>
  );
}
