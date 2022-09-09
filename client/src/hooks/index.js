import { useDispatch } from "react-redux";
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
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });
        const data = await res.json();
        dispatch(action(data));
      } catch (e) {
        dispatch(errorHandler(e.message));
      }
    },
    [
      dispatch,
      requestConfig.url,
      requestConfig.method,
      requestConfig.headers,
      requestConfig.body,
      action,
    ]
  );

  return getData;
};
