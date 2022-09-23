import { useHTTP } from "../hooks";
import { useParams } from "react-router-dom";
import { getRecipe } from "../actions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function RecipeDetails() {
  const { name, img, healthScore, diets, summary } = useSelector(
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
      <img src={img} alt=""></img>
      <h1>{name}</h1>
      <span>{healthScore}</span>
      <div>
        {diets.map((e, i) => {
          return <span key={i}>{e}</span>;
        })}
      </div>
      <p>{summary}</p>
    </div>
  );
}
