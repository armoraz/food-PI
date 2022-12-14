import { useDispatch, useSelector } from "react-redux";
import { sortByName, sortByScore } from "../actions";
import { useSortFilterVerification } from "../hooks";
import { Active, sortBox } from "./NavBar.module.css";

export default function Sort() {
  const { byName, byScore, selected } = useSelector((state) => state.ui.sort);
  const dispatch = useDispatch();

  //Traer lista filtrada
  const ListOfRecipes = useSortFilterVerification();

  //Opciones a elegir
  const sortOptions = [
    {
      value: byName.default,
      text: "--Sort by name--",
      disabled: true,
    },
    {
      value: "Ascendente Name",
      text: "From A to Z",
      disabled: false,
    },
    {
      value: "Descendente Name",
      text: "From Z to A",
      disabled: false,
    },
    {
      value: byScore.default,
      text: "--Sort by health score--",
      disabled: true,
    },
    {
      value: "Ascendente Score",
      text: "Descendent by hearlth score",
      disabled: false,
    },
    {
      value: "Descendente Score",
      text: "Ascendent by health score",
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
    <div className={sortBox}>
      <select
        className={`${byName.status || byScore.status ? Active : ""}`}
        value={selected}
        onChange={sortHandler}
      >
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
