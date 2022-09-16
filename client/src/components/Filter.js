import { useDispatch, useSelector } from "react-redux";
import { setFilteredRecipes } from "../actions/index";

function Filter() {
  const { recipes, diets } = useSelector((state) => state.food);
  const { filter } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  function filterByDietHandler(e) {
    let selected = e.target.value;

    const filteredRecipes = recipes.filter((e) => {
      return e.diets.includes(selected);
    });

    dispatch(setFilteredRecipes(filteredRecipes, selected));
  }

  return (
    <div>
      <select value={filter.selected} onChange={filterByDietHandler}>
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
