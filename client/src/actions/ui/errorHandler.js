export default function errorHandler(data) {
  return {
    type: "ERROR_STATUS",
    payload: data,
  };
}
