type Actions = {
  type: "SET_ON" | "SET_OFF";
};

export default function inputReducer(state: boolean, action: Actions) {
  switch (action.type) {
    case "SET_ON":
      return (state = true);
    case "SET_OFF":
      return (state = false);
    default:
      return state;
  }
}
