import styles from "./Home.module.css";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className={styles.header}>
      <NavBar />
      <Cards />
    </div>
  );
}
