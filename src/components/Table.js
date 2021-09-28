import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { UPDATE_CARS_DETAILS, DELETE_CARS_DETAILS } from "../store/action";

export default function Table() {
  const carsData = useSelector((state) => state);
  console.log(carsData.carsList, "data");

  // const dispatch = useDispatch();

  // const editCarDataHandle = (index) => {
  //   console.log(index, "ide");
  //   dispatch({ type: UPDATE_CARS_DETAILS, id: index });
  //   // const carData = { ...this.state.carsList[index] };

  //   // this.setState({
  //   //   carData,
  //   //   selectedIndex: index,
  //   //   isEdit: true,
  //   // });
  // };

  // const deleteCarDataHandle = (index) => {
  //   dispatch({ type: DELETE_CARS_DETAILS, id: index });

  //   // const carsList = [...this.state.carsList];
  //   // carsList.splice(index, 1);
  //   // this.setState({
  //   //   carsList,
  //   // });
  // };

  return (
    <div className="form-data-table">
      <div className="add-button-wr">
        <NavLink to="/form/add">
          <button>Add Data </button>
        </NavLink>
      </div>
      <table className="table">
        <caption>Form Data</caption>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Model Name</th>
            <th>Choose a car type</th>
            <th>Type Of Car Fule</th>
            <th>Car Features List</th>
            <th>Car Overview</th>
            <th>Actions</th>
          </tr>
        </thead>
        {carsData.carsList.map((car, index) => (
          <tbody>
            <tr key={index}>
              <td>{car.carName}</td>
              <td>{car.modelName}</td>
              <td>{car.carType}</td>
              <td>{car.carFule}</td>
              <td>{car.featureList.join(", ")}</td>
              <td>{car.carOverview}</td>
              <td>
                <button type="button">
                  <NavLink to={`/form/edit/${index}`}>Edit</NavLink>
                </button>
                <button type="button">Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
