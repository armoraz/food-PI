import recipeReducer from "./recipeSlice";

export default function rootReducer(state = {}, action) {
  return {
    recipes: recipeReducer(state.recipes, action),
  };
}
