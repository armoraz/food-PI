import { useDispatch } from "react-redux";
import styles from "./Modal.module.css";
import { setModal } from "../actions";

export default function Modal({ title, content, darkBG }) {
  const dispatch = useDispatch();

  return (
    <div>
      {darkBG && (
        <div
          className={styles.darkBG}
          onClick={() => dispatch(setModal("CLOSE"))}
        />
      )}
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{title}</h5>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => dispatch(setModal("CLOSE"))}
          >
            X
          </button>
          {content && <div className={styles.modalContent}>{content}</div>}
        </div>
      </div>
    </div>
  );
}
