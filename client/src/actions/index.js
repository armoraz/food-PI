export const errorHandler = function (data) {
  return {
    type: "ErrorStatus",
    payload: data,
  };
};

export const loadingHandler = function (data) {
  return {
    type: "LoadingStatus",
    payload: data,
  };
};

export const searchRecipes = function (data) {
  return {
    type: "SearchRecipes",
    payload: data,
  };
};

export const setModal = function (status) {
  if (status === "close") {
    return {
      type: "SetModal",
      payload: false,
    };
  }
  if (status === "open") {
    return {
      type: "SetModal",
      payload: true,
    };
  }
};
