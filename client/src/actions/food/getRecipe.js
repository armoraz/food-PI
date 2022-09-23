export default function getRecipe(data) {
  return {
    type: "GET_RECIPE",
    payload: data,
  };
}
