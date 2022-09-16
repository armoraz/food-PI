const initialState = {
  isLoading: false,
  errorOnLoad: null,
  filter: {
    status: false,
    selected: "filtrar por dieta",
    default: "filtrar por dieta",
    filtered: [],
  },
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case "ERROR_STATUS":
      return { ...state, errorOnLoad: action.payload };
    case "LOADING_STATUS":
      return { ...state, isLoading: action.payload };
    case "SET_MODAL":
      return {
        ...state,
        modalIsOpen: action.payload,
      };
    case "SET_FILTERED_RECIPES":
      return {
        ...state,
        filter: {
          ...state.filter,
          status: action.payload.status,
          filtered: [...action.payload.data],
          selected: action.payload.selected,
        },
      };
    default:
      return state;
  }
}
