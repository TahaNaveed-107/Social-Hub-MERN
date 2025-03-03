import Header from "../../public/components/Header/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.page}></div>
    </>
  );
}
