import recipeReducer from "./recipeSlice";
import uiReducer from "./uiSlice";

export default function rootReducer(state = {}, action) {
  return {
    food: recipeReducer(state.food, action),
    ui: uiReducer(state.ui, action),
  };
}
