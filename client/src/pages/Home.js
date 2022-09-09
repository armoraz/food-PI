import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        <Link className={styles.link} to="/">
          Back to Book Cover
        </Link>
        {/* <Link className={styles.link} onClick={getRecipes} to="/recipes"> */}
        <h1 className={styles.title}>My Recipes</h1>
        {/* </Link> */}
      </div>
      <SearchBar />
      {/* <button
        className={styles.back}
        onClick={(e) => dispatch(setModal("open"))}
        type="button"
      >
        <span className={styles.front}>AGREGAR RECETA</span>
      </button>
      {modalIsOpen && <Modal />} */}
      <Cards />
    </div>
  );
}
