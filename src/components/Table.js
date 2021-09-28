import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Table() {
  const carsData = useSelector((state) => state);

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
