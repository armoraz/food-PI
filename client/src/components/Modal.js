import { useDispatch } from "react-redux";
import styles from "./Modal.module.css";
import { setModal } from "../actions";
import Form from "./Form";

export default function Modal() {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={styles.darkBG}
        onClick={() => dispatch(setModal("close"))}
      />{" "}
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>AGREGANDO RECETA</h5>{" "}
          </div>{" "}
          <button
            className={styles.closeBtn}
            onClick={() => dispatch(setModal("close"))}
          >
            X
          </button>{" "}
          <div className={styles.modalContent}>
            <Form />
          </div>{" "}
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}></div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
