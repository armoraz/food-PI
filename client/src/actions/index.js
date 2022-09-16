export const errorHandler = function (data) {
  return {
    type: "ERROR_STATUS",
    payload: data,
  };
};

export const loadingHandler = function (data) {
  return {
    type: "LOADING_STATUS",
    payload: data,
  };
};

export const searchRecipes = function (data) {
  return {
    type: "SEARCH_RECIPES",
    payload: data,
  };
};

export const setDiets = function (data) {
  return {
    type: "SET_DIETS",
    payload: data,
  };
};

export const setFilteredRecipes = function (data, selected) {
  return {
    type: "SET_FILTERED_RECIPES",
    payload: {
      data,
      selected,
      status: true,
    },
  };
};

export const setModal = function (status) {
  if (status === "CLOSE") {
    return {
      type: "SET_MODAL",
      payload: false,
    };
  }
  if (status === "OPEN") {
    return {
      type: "SET_MODAL",
      payload: true,
    };
  }
};
