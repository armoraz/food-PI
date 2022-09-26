import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import { getRecipes } from "./actions";
import { useHTTP } from "./hooks";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  let preloaded = useSelector((state) => state.ui.dataPreloaded);
  // const getData = useHTTP({ url: `http://localhost:3001/recipes` }, getRecipes);

  // useEffect(() => {
  //   if (!preloaded) {
  //     getData();
  //   }
  // }, [getData, preloaded]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/recipes" render={() => <Home />} />
        <Route exact path="/recipes/:id" render={() => <RecipeDetails />} />
      </Switch>
    </div>
  );
}

export default App;
