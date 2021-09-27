import { createStore } from "redux";
import {
  ADD_CARS_DETAILS,
  UPDATE_CARS_DETAILS,
  DELETE_CARS_DETAILS,
} from "./action";

const crudActionReducer = (state = { carsList: [] }, action) => {
  switch (action) {
    case action.type === ADD_CARS_DETAILS:
      break;

    case action.type === UPDATE_CARS_DETAILS:
      break;

    case action.type === DELETE_CARS_DETAILS:
      break;

    default:
      return state;
  }

  // if (action.type === "add") {
  //   console.log("call");
  //   return {
  //     carsList: state.carsList.push(state),
  //   };
  // }

  // if (action.type === "update") {
  //   return;
  // }

  // if (action.type === "delete") {
  // }

  // return state;
};

const store = createStore(crudActionReducer);

export default store;
