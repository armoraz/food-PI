import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

export default function Home() {
  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <Link className={styles.link} to="/">
          Back to Book Cover
        </Link>
        <h1 className={styles.title}>My Recipes</h1>
      </div>
      <SearchBar />
      <Filter />
      <Sort />
      <Cards />
    </div>
  );
}
