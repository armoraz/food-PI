export default function setModal(status) {
  if (status === "CLOSE") {
    return {
      type: "SET_MODAL",
      payload: false,
    };
  }
  if (status === "OPEN") {
    return {
      type: "SET_MODAL",
      payload: true,
    };
  }
}
