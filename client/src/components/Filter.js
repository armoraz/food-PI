import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDiets, setFilteredRecipes, sortReset } from "../actions/index";
import { useHTTP } from "../hooks";

function Filter() {
  const { diets, recipes } = useSelector((state) => state.food);
  const { filter } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const getDiets = useHTTP(
    {
      url: `http://localhost:3001/diets`,
    },
    setDiets
  );

  useEffect(() => getDiets(), [getDiets]);

  if (!diets || diets.includes("No diets found")) {
  }

  function filterByDietHandler(e) {
    dispatch(sortReset());
    let selected = e.target.value;

    //Aplica filtrado
    const filteredRecipes = recipes.filter((e) => {
      return e.diets.includes(selected);
    });

    dispatch(setFilteredRecipes(filteredRecipes, selected));
  }

  return (
    <div>
      <select
        value={filter.selected}
        disabled={filter.disabled}
        onChange={filterByDietHandler}
      >
        <option value={filter.default} disabled>
          --Filtrar por genero--
        </option>
        {diets.map((option, i) => {
          return (
            <option key={i} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Filter;
