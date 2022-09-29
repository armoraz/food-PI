import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchRecipes, setDiets } from "../actions";
import { useHTTP } from "../hooks";
import style from "./SearchBar.module.css";
import { useSelector } from "react-redux";

export default function SearchBar() {
  const { isDietLoaded, isDataLoaded } = useSelector((state) => state.ui);
  const location = useLocation();
  const history = useHistory();
  const [input, setInput] = useState("");
  const getData = useHTTP({ url: `http://localhost:3001/diets` }, setDiets);
  const searchData = useHTTP(
    { url: `http://localhost:3001/recipes${location.search}` },
    searchRecipes
  );

  //useLocation && useEffect
  useEffect(() => {
    if (location.search) searchData();
    if (!isDataLoaded || !isDietLoaded) getData();
  }, [location.search, getData, isDataLoaded, isDietLoaded]);

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
