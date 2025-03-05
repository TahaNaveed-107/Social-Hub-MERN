import Header from "../../public/components/Header/page";
import Login from "./Login/page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Login />
      <div className={styles.page}></div>
    </>
  );
}
