export const sortByName = function (data, selected) {
  return {
    type: "SORT_BY_NAME",
    payload: { data, selected },
  };
};

export const sortByScore = function (data, selected) {
  return {
    type: "SORT_BY_SCORE",
    payload: { data, selected },
  };
};
