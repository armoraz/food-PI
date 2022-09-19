export default function loadingHandle(data) {
  return {
    type: "LOADING_STATUS",
    payload: data,
  };
}
