import React from "react";

export default function Table(props) {
  return (
    <div className="form-data-table">
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
        {props.data.map((car, index) => (
          <tbody>
            <tr key={index}>
              <td>{car.carName}</td>
              <td>{car.modelName}</td>
              <td>{car.carType}</td>
              <td>{car.carFule}</td>
              <td>{car.featureList.join(", ")}</td>
              <td>{car.carOverview}</td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    props.editCarDataHandle(index);
                  }}
                >
                  Edit
                </button>
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
