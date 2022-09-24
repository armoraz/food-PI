export default function setFilteredRecipes(data, selected) {
  return {
    type: "SET_FILTERED_RECIPES",
    payload: {
      data,
      selected,
    },
  };
}
