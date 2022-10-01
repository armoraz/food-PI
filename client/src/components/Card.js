import styles from "./Card.module.css";
import { Link } from "react-router-dom";

let icon =
  "https://img.icons8.com/external-flaticons-flat-flat-icons/20/000000/external-nutrition-dieting-flaticons-flat-flat-icons.png";

export default function Card({ item }) {
  const { id, name, img, diets, healthScore } = item;
  return (
    <li className={styles.li}>
      <div className={styles.container}>
        <Link to={{ pathname: `/recipes/${id}`, state: "details" }}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={img} alt=""></img>
          </div>
          <div>
            <span className={styles.title}>{name}</span>
          </div>
        </Link>
        <div className={styles.cardInfo}>
          <span id={styles.score}>{healthScore}</span>
          <div className={styles.listDiets}>
            {diets.map((g, i) => {
              return (
                <span className={styles.itemListDiets} key={i}>
                  {g}{" "}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </li>
  );
}
