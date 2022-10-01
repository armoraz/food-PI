import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchRecipes, setDiets } from "../actions";
import { useHTTP } from "../hooks";
import style from "./SearchBar.module.css";
import { useSelector } from "react-redux";

export default function SearchBar() {
  const { isDietLoaded, isDataLoaded, isSearched } = useSelector(
    (state) => state.ui
  );
  const location = useLocation();
  const history = useHistory();
  const [input, setInput] = useState("");
  const getData = useHTTP({ url: `http://localhost:3001/diets` }, setDiets);
  const searchData = useHTTP(
    { url: `http://localhost:3001/recipes${location.search}` },
    searchRecipes
  );

  //ACA VA EL CODIGO PARA EVITAR REQUEST INNECESARIO

  //useLocation && useEffect
  useEffect(() => {
    if (location.search) searchData();
    else if (location.state !== "details") getData();
  }, [location.search, getData, searchData, location.state]);
  // if ((!isDataLoaded || !isDietLoaded) && !isSearched)

  console.log(location.state);
  function searchHandler(e) {
    e.preventDefault();
    if (input !== "") {
      history.push(`/recipes?name=${input}`);
      setInput("");
    }
    return null;
  }

  return (
    <div className={style.div}>
      <form onSubmit={searchHandler}>
        <input
          className={style.searchBar}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          name="name"
          placeholder="Recipes..."
        />
      </form>
    </div>
  );
}
