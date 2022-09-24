import { useDispatch, useSelector } from "react-redux";
import { setFilteredRecipes, sortReset } from "../actions/index";

function Filter() {
  const { diets, recipes } = useSelector((state) => state.food);
  const { filter } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

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
