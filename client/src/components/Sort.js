import { useDispatch, useSelector } from "react-redux";
import { sortByName, sortByScore } from "../actions";
import { useSortFilterVerification } from "../hooks";
import styles from "./Sort.module.css";

export default function Sort() {
  const { byName, byScore, selected } = useSelector((state) => state.ui.sort);
  const dispatch = useDispatch();

  //Traer lista filtrada
  const ListOfRecipes = useSortFilterVerification();

  //Opciones a elegir
  const sortOptions = [
    {
      value: byName.default,
      text: "--Ordenar por nombre--",
      disabled: true,
    },
    {
      value: "Ascendente Name",
      text: "Ascendente por Nombre",
      disabled: false,
    },
    {
      value: "Descendente Name",
      text: "Descendente por Nombre",
      disabled: false,
    },
    {
      value: byScore.default,
      text: "--Ordenar por health score--",
      disabled: true,
    },
    {
      value: "Ascendente Score",
      text: "Ascendente por Score",
      disabled: false,
    },
    {
      value: "Descendente Score",
      text: "Descendente por Score",
      disabled: false,
    },
  ];

  //Funcion ordenadora
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

  function sortHandler(e) {
    let selected = e.target.value;
    //Caso ordenar por nombre
    if (selected.includes("Name")) {
      const sortedList = listSorter("name");
      if (selected === "Ascendente Name") {
        dispatch(sortByName(sortedList, selected));
      }
      if (selected === "Descendente Name") {
        dispatch(sortByName(sortedList.reverse(), selected));
      }
      return;
    }
    //Caro ordenar por score
    if (selected.includes("Score")) {
      const sortedList = listSorter("healthScore");
      if (selected === "Ascendente Score") {
        dispatch(sortByScore(sortedList, selected));
      }
      if (selected === "Descendente Score") {
        dispatch(sortByScore(sortedList.reverse(), selected));
      }
      return;
    }
  }

  return (
    <div>
      <select className={styles.menu} value={selected} onChange={sortHandler}>
        {sortOptions.map((option) => {
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
