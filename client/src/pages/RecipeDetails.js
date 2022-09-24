import { useHTTP } from "../hooks";
import { useParams } from "react-router-dom";
import { getRecipe } from "../actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./RecipeDetails.module.css";

export default function RecipeDetails() {
  const { isLoading, errorOnLoad } = useSelector((state) => state.ui);
  const { name, img, healthScore, diets, summary, instructions } = useSelector(
    (state) => state.food.recipe
  );
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
    <div>
      {!isLoading && (
        <div>
          <img src={img} alt=""></img>
          <h1>{name}</h1>
          <span>{healthScore}</span>
          <div>
            {diets.map((e, i) => {
              return <span key={i}>{e}</span>;
            })}
          </div>
          <h2>Summary</h2>
          <p className={styles.summaryContainer}>{summary}</p>
          <div>
            <h2>Steps</h2>
            <ol>
              {instructions.map((e) => {
                return <li>{e.step}</li>;
              })}
            </ol>
          </div>
        </div>
      )}
      {isLoading && <p>...Loading</p>}
      {!isLoading && errorOnLoad && <p>{errorOnLoad}</p>}
    </div>
  );
}
