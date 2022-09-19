import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  const { id, name, img, diets, healthScore } = item;
  return (
    <li className={styles.li}>
      <Link to={`/recipes/${id}`}>
        <img className={styles.img} src={img} alt=""></img>
        <div>
          <h3>{name}</h3>
        </div>
      </Link>
      <h3>{healthScore}</h3>
      <div>
        {diets.map((g, i) => {
          return <span key={i}>{g} </span>;
        })}
      </div>
    </li>
  );
}
