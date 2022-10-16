import { useHTTP } from "../hooks";
import { useHistory, useParams, Link } from "react-router-dom";
import { getRecipe } from "../actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./RecipeDetails.module.css";
import NavBar from "../components/NavBar";
import { ColorRing } from "react-loader-spinner";

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
      url: `${process.env.REACT_APP_API_URL}/recipes/${id}`,
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
              <Link to={{ pathname: "/recipes", state: "details" }}>
                <button type="button">Back to Home</button>
              </Link>
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
      {isLoading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      )}
      {!isLoading && errorOnLoad && <p>{errorOnLoad}</p>}
    </div>
  );
}
