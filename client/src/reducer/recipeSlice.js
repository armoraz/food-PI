const initialState = {
  recipes: {},
  isLoading: false,
  errorOnLoad: false,
};

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case "ErrorStatus":
      return { ...state, errorOnLoad: action.payload };
    case "LoadingStatus":
      return { ...state, isLoading: action.payload };
    case "SearchRecipes":
      return { ...state, recipes: [...action.payload] };
    case "SetModal":
      return {
        ...state,
        modalIsOpen: action.payload,
      };
    default:
      return state;
  }
}
