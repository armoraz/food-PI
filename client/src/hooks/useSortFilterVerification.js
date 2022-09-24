import { useSelector } from "react-redux";

export default function useSortFilterVerification() {
  const { filter, sort } = useSelector((state) => state.ui);
  const { recipes } = useSelector((state) => state.food);

  const ListOfRecipes = [...recipes];

  if (filter.status) {
    ListOfRecipes.splice(0, ListOfRecipes.length, ...filter.filtered);
  }
  if (sort.byName.status) {
    ListOfRecipes.splice(0, ListOfRecipes.length, ...sort.byName.sorted);
  }
  if (sort.byScore.status) {
    ListOfRecipes.splice(0, ListOfRecipes.length, ...sort.byScore.sorted);
  }

  return ListOfRecipes;
}
