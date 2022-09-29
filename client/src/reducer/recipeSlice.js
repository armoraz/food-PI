const initialState = {
  recipes: [],
  // recipes: [{ diets: [] }],
  recipe: { diets: [], instructions: [] },
  diets: [],
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPE":
      return { ...state, recipe: action.payload };
    case "SEARCH_RECIPES":
      return { ...state, recipes: [...action.payload] };
    case "SET_DIETS":
      return {
        ...state,
        recipes: action.payload.recipes,
        diets: action.payload.diets,
      };
    default:
      return state;
  }
}
