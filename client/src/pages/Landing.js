import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.landing}>
      <h1 className={styles.title}>Henry Recipes</h1>
      <Link to="/recipes">
        <button className={styles.back} type="button">
          <span className={styles.front}>START</span>
        </button>
      </Link>
    </div>
  );
}
