import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Table(props) {
  const carsData = useSelector((state) => state);
  console.log(carsData.carsList, "data");

  return (
    <div className="form-data-table">
      <div className="add-button-wr">
        <NavLink to="/form">
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
                <NavLink to="/form">
                  <button
                    type="button"
                    onClick={() => {
                      props.editCarDataHandle(index);
                    }}
                  >
                    Edit
                  </button>
                </NavLink>
                <button
                  type="button"
                  onClick={() => {
                    props.deleteCarDataHandle(index);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}
