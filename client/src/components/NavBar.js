import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Sort from "./Sort";
import Modal from "../components/Modal";
import Form from "./Form";
import styles from "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../actions";
import Pagination from "./Pagination";

export default function NavBar(props) {
  const { modalIsOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    <div className={styles.nav}>
      <div className={styles.titleContainer}>
        <Link className={styles.link} to="/">
          Back to Book Cover
        </Link>
        <h1 className={styles.title}>My Recipes</h1>
      </div>
      <SearchBar />
      <button
        className={styles.add}
        onClick={(e) => dispatch(setModal("OPEN"))}
      >
        AGREGAR RECETA
      </button>
      {modalIsOpen && (
        <Modal darkBG={true} title={"AGREGANDO RECETA"} content={<Form />} />
      )}
      <div className={styles.filter}>
        <Filter />
        <Sort />
      </div>
      <Pagination props={props} />
    </div>
  );
}
