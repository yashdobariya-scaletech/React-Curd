import React from "react";

export default function Table(props) {
  return (
    <div className="form-data-table">
      <table className="table">
        <caption>Form Data</caption>
        <th>Company Name</th>
        <th>Model Name</th>
        <th>Choose a car type</th>
        <th>Type Of Car Fule</th>
        <th>Car Features List</th>
        <th>Car Overview</th>
        <th>Actions</th>
        {props.data.map((car, index) => (
          <tr key={index}>
            <td>{car.carName}</td>
            <td>{car.modelName}</td>
            <td>{car.carType}</td>
            <td>{car.carFule}</td>
            <td>{car.featureList}</td>
            <td>{car.carOverview}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
