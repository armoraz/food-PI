import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, img, id, diets }) {
  return (
    <li className={styles.li}>
      <Link to={`/recipes/${id}`}>
        <img className={styles.img} src={img} alt=""></img>
        <div>
          <h3>{name}</h3>
        </div>
      </Link>
      <div>
        {diets.map((g, i) => {
          return <span key={i}>{g} </span>;
        })}
      </div>
    </li>
  );
}
