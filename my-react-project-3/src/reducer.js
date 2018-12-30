import { createStore } from "redux";

const settings = (state = { settings: { name: "Stranger" } }, action) => {
  if (action.type === "setName") return { settings: { name: action.name } };
  return state;
};

const store = createStore(settings);

export default store;
