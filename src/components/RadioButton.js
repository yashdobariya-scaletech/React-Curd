import React from "react";

export default function RadioButton(props) {
  return (
    <div className="">
      <div className="form-item--radio">
        <label className="">{props.lable}</label>
        <label className="ml--radio">
          <input
            type="radio"
            value={props.value}
            onChange={(e) => this.updateInputField(props.fieldName, e)}
          />
          Petrol
        </label>
        <label className="ml--radio">
          <input
            type="radio"
            value={props.value}
            onChange={(e) => this.updateInputField(props.fieldName, e)}
          />
          Diesel
        </label>
        <label className="ml--radio">
          <input
            type="radio"
            value={props.value}
            onChange={(e) => this.updateInputField(props.fieldName, e)}
          />
          Electric
        </label>
      </div>
    </div>
  );
}
