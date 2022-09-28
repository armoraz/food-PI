const initialState = {
  dataPreloaded: false,
  modalIsOpen: false,
  isLoading: false,
  errorOnLoad: null,
  filter: {
    disabled: true,
    status: false,
    selected: "filter by diet",
    default: "filter by diet",
    filtered: [],
  },
  sort: {
    byName: {
      status: false,
      default: "sort by name",
      sorted: [],
    },
    byScore: {
      status: false,
      default: "sort by score",
      sorted: [],
    },
    selected: "sort by name",
  },
};

export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, dataPreloaded: true };
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
    case "SET_DIETS":
      return {
        ...state,
        filter: {
          ...state.filter,
          disabled: false,
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
