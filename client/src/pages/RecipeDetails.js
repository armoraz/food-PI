import { useHTTP } from "../hooks";
import { useHistory, useParams } from "react-router-dom";
import { getRecipe } from "../actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./RecipeDetails.module.css";
import NavBar from "../components/NavBar";

let icon =
  "https://img.icons8.com/external-flaticons-flat-flat-icons/45/000000/external-nutrition-dieting-flaticons-flat-flat-icons.png";

export default function RecipeDetails() {
  const { isLoading, errorOnLoad } = useSelector((state) => state.ui);
  const { name, img, healthScore, diets, summary, instructions } = useSelector(
    (state) => state.food.recipe
  );
  const history = useHistory();
  const { id } = useParams();
  const getData = useHTTP(
    {
      url: `http://localhost:3001/recipes/${id}`,
    },
    getRecipe
  );

  //useEffect && useParams
  useEffect(() => getData(), [id, getData]);

  return (
    <div className={styles.info}>
      <NavBar />
      {!isLoading && (
        <div>
          <div className={styles.header}>
            <div className={styles.imgContainer}>
              <img src={img} alt=""></img>
            </div>
            <div className={styles.titleContainer}>
              <button onClick={(e) => history.push("/recipes")}>
                Back to Home
              </button>
              <h1>{name}</h1>
              <div>
                <span>
                  <img src={icon} alt="health score symbol"></img>
                </span>
                <span id={styles.score}>{healthScore}</span>
                <span id={styles.bScore}>/100</span>
              </div>
              <div className={styles.listDiets}>
                {diets.map((e, i) => {
                  return (
                    <span className={styles.itemListDiets} key={i}>
                      {e}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.summaryContainer}>
              <h2>Summary</h2>
              <p>{summary}</p>
            </div>
            <div className={styles.stepsContainer}>
              <h2>Steps</h2>
              <ol>
                {instructions.length > 0
                  ? instructions.map((e, index) => {
                      return <li key={index}>{e.step}</li>;
                    })
                  : "No instructions avaible for this recipe"}
              </ol>
            </div>
          </div>
        </div>
      )}
      {isLoading && <p>...Loading</p>}
      {!isLoading && errorOnLoad && <p>{errorOnLoad}</p>}
    </div>
  );
}
