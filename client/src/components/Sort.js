import { useDispatch, useSelector } from "react-redux";
import { sortByName, sortByScore } from "../actions";
import { useSortFilterVerification } from "../hooks";
import styles from "./Sort.module.css";

export default function Sort() {
  const { byName, byScore } = useSelector((state) => state.ui.sort);

  const ListOfRecipes = useSortFilterVerification();

  const sortOptionsByName = [
    {
      value: byName.default,
      text: "--Ordenar por nombre--",
      disabled: true,
    },
    { value: "Ascendente", text: "Ascendente", disabled: false },
    { value: "Descendente", text: "Descendente", disabled: false },
  ];

  const sortOptionsByScore = [
    {
      value: byScore.default,
      text: "--Ordenar por health score--",
      disabled: true,
    },
    { value: "Ascendente", text: "Ascendente", disabled: false },
    { value: "Descendente", text: "Descendente", disabled: false },
  ];

  const dispatch = useDispatch();

  function listSorter(sortBy) {
    const sortedList = ListOfRecipes.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      return 0;
    });

    return sortedList;
  }

  function sortByNameHandler(e) {
    let selected = e.target.value;
    const sortedList = listSorter("name");
    if (selected === "Ascendente") {
      dispatch(sortByName(sortedList, selected));
    }
    if (selected === "Descendente") {
      dispatch(sortByName(sortedList.reverse(), selected));
    }
    return;
  }

  function sortByScoreHandler(e) {
    let selected = e.target.value;
    const sortedList = listSorter("healthScore");
    if (selected === "Ascendente") {
      dispatch(sortByScore(sortedList, selected));
    }
    if (selected === "Descendente") {
      dispatch(sortByScore(sortedList.reverse(), selected));
    }
    return;
  }

  return (
    <div>
      <select
        className={styles.menu}
        value={byName.selected}
        onChange={sortByNameHandler}
      >
        {sortOptionsByName.map((option) => {
          return (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.text}
            </option>
          );
        })}
      </select>
      <select value={byScore.selected} onChange={sortByScoreHandler}>
        {sortOptionsByScore.map((option) => {
          return (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}
