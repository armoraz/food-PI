const initialState = {
  recipes: [{ diets: [] }],
  recipe: { diets: [], instructions: [] },
  diets: [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan",
    "paleolithic",
    "primal",
    "whole 30",
    "pescatarian",
    "ketogenic",
    "fodmap friendly",
  ],
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPE":
      return { ...state, recipe: action.payload };
    case "SEARCH_RECIPES":
      return { ...state, recipes: [...action.payload] };
    case "SET_DIETS":
      return { ...state, diets: [...action.payload] };
    default:
      return state;
  }
}
