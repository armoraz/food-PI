import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Sort from "./Sort";
import styles from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { setModal } from "../actions";
import Pagination from "./Pagination";

export default function NavBar(props) {
  const dispatch = useDispatch();

  //resetPage
  const { resetPage } = props;

  return (
    <div className={styles.nav}>
      <div className={styles.titleContainer}>
        <Link className={styles.link} to="/">
          Back to Book Cover
        </Link>
        <Link to="/recipes">
          <h1 className={styles.title}>--- My Recipes ---</h1>
        </Link>
      </div>
      <SearchBar />
      <button
        className={styles.add}
        onClick={(e) => dispatch(setModal("OPEN"))}
      >
        ADD NEW RECIPE
      </button>
      <div className={styles.filter}>
        <Filter resetPage={resetPage} />
        <Sort />
      </div>
      <Pagination props={props} />
    </div>
  );
}
