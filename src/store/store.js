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
      const carsList = [...state.carsList];
      carsList.push(action.carData);
      return {
        ...state,
        carsList: carsList,
      };

    case UPDATE_CARS_DETAILS:
      return {
        ...state,
        carsList: action.carsList,
      };
    case DELETE_CARS_DETAILS:
      return {};

    default:
      return state;
  }
};

const store = createStore(
  crudActionReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
