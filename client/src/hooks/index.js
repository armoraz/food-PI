import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { errorHandler, loadingHandler } from "../actions";

export const useHTTP = function (requestConfig, action) {
  const dispatch = useDispatch();

  const getData = useCallback(
    async function () {
      dispatch(loadingHandler(true)); //Antes del request

      try {
        //Request
        const res = await fetch(requestConfig.url, {
          mode: "cors",
        });
        const data = await res.json();
        dispatch(action(data));
      } catch (e) {
        dispatch(errorHandler(e.message));
      }

      dispatch(loadingHandler(false));
    },
    [action, requestConfig.url, dispatch]
  );

  return getData;
};

export const useSortFilterVerification = function () {
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
};
