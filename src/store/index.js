import { createStore } from "redux";

const initialState = {
  carsList: [
    {
      carName: "yash",
      modelName: "fawqw",
      carType: "Sport Car",
      featureList: ["sunroof"],
      carFule: "petrol",
      carOverview: "gdfgdf",
    },
  ],
};

const crudActionReducer = (state = initialState, action) => {
  if (action.type === "add") {
    return;
  }
  if (action.type === "edit") {
    return;
  }
  if (action.type === "update") {
    return;
  }
  if (action.type === "delete") {
  }
  return state;
};

const store = createStore(crudActionReducer);

export default store;
