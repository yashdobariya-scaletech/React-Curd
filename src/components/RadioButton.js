import React from "react";

export default function RadioButton(props) {
  return (
    <div className="">
      <div className="form-item--radio">
        <label className="">{props.lable}</label>
        <label className="ml--radio">
          <input
            type="radio"
            name="carFule"
            value="petrol"
            checked={props.fieldValue === "petrol"}
            onChange={(e) => props.updateInputField(props.fieldName, e)}
          />
          Petrol
        </label>
        <label className="ml--radio">
          <input
            type="radio"
            name="carFule"
            value="diesel"
            checked={props.fieldValue === "diesel"}
            onChange={(e) => props.updateInputField(props.fieldName, e)}
          />
          Diesel
        </label>
        <label className="ml--radio">
          <input
            type="radio"
            name="carFule"
            value="electric"
            checked={props.fieldValue === "electric"}
            onChange={(e) => props.updateInputField(props.fieldName, e)}
          />
          Electric
        </label>
      </div>
    </div>
  );
}
