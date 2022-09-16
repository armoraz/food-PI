import { useHistory } from "react-router-dom";
import { useState } from "react";
import { searchRecipes } from "../actions";
import { useHTTP } from "../hooks";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const history = useHistory();
  const [input, setInput] = useState("");
  const getData = useHTTP(
    { url: `http://localhost:3001/recipes?name=${input}` },
    searchRecipes
  );

  function searchHandler(e) {
    e.preventDefault();
    if (input !== "") {
      history.push(`/recipes?name=${input}`);
      getData();
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
