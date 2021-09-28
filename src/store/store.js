import { createStore } from "redux";
import {
  ADD_CARS_DETAILS,
  UPDATE_CARS_DETAILS,
  DELETE_CARS_DETAILS,
} from "./action";

const initialState = { carsList: [] };

const crudActionReducer = (state = initialState, action) => {
  console.log(action, "act");
  console.log(state, "sate");
  switch (action.type) {
    case ADD_CARS_DETAILS:
      console.log([...state.carsList, action.carData], "log");
      return {
        ...state,
        carsList: [...state.carsList, action.carData],
      };

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
