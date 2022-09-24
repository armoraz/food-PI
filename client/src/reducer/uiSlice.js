const initialState = {
  isLoading: false,
  errorOnLoad: null,
  filter: {
    status: false,
    selected: "filtrar por dieta",
    default: "filtrar por dieta",
    filtered: [],
  },
  sort: {
    byName: {
      status: false,
      default: "ordenar por nombre",
      sorted: [],
    },
    byScore: {
      status: false,
      default: "ordenar por score",
      sorted: [],
    },
    selected: "ordenar por nombre",
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
          status: true,
          filtered: action.payload.data,
          selected: action.payload.selected,
        },
      };
    case "SORT_BY_NAME":
      return {
        ...state,
        sort: {
          ...state.sort,
          byScore: {
            //Reinicio del ordenamiento byScore
            ...state.sort.byScore,
            status: false,
            sorted: [],
          },
          byName: {
            //Establenciendo el ordenamiento byName
            ...state.sort.byName,
            status: true,
            sorted: [...action.payload.data],
          },
          selected: action.payload.selected,
        },
      };
    case "SORT_BY_SCORE":
      return {
        ...state,
        sort: {
          ...state.sort,
          byName: {
            //Reinicio del ordenamiento byName
            ...state.sort.byName,
            status: false,
            sorted: [],
          },
          byScore: {
            //Estableciendo el ordenamiento byScore
            ...state.sort.byScore,
            status: true,
            sorted: [...action.payload.data],
          },
          selected: action.payload.selected,
        },
      };
    case "SORT_RESET":
      return {
        ...state,
        sort: {
          byName: {
            ...state.sort.byName,
            status: false,
            sorted: [],
          },
          byScore: {
            ...state.sort.byScore,
            status: false,
            sorted: [],
          },
          selected: "ordenar por nombre",
        },
      };
    default:
      return state;
  }
}
