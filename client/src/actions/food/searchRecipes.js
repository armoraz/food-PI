export default function searchRecipes(data) {
  return {
    type: "SEARCH_RECIPES",
    payload: data,
  };
}
