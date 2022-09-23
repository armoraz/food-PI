import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { errorHandler, loadingHandler } from "../actions";

export default function useHTTP(requestConfig, action) {
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
}
