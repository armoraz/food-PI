import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDiets, setFilteredRecipes, sortReset } from "../actions/index";
import { useHTTP } from "../hooks";
import { Active, filterBox } from "./NavBar.module.css";

function Filter({ resetPage }) {
  const { diets, recipes } = useSelector((state) => state.food);
  const { filter } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const listDiets = diets.map((element) => {
    return element.name;
  });

  function filterByDietHandler(e) {
    dispatch(sortReset());
    resetPage();
    let selected = e.target.value;

    //Aplica filtrado
    const filteredRecipes = recipes.filter((e) => {
      return e.diets.includes(selected);
    });

    dispatch(setFilteredRecipes(filteredRecipes, selected));
  }

  return (
    <div className={filterBox}>
      <select
        className={`${filter.status ? Active : ""}`}
        value={filter.selected}
        disabled={filter.disabled}
        onChange={filterByDietHandler}
      >
        <option value={filter.default} disabled>
          --Filter by diet--
        </option>
        {listDiets.length > 0 &&
          listDiets.map((option, i) => {
            return (
              <option key={i} value={option}>
                {option.toUpperCase()}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default Filter;
