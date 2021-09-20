import React from "react";

export default function Dropdown(props) {
  return (
    <div className="form-item">
      <label htmlFor="">{props.lable}</label>
      <select
        value={props.fieldName}
        onChange={(e) => this.updateInputField(props.fieldName, e)}
      >
        <option value="hatchback">Hatchback</option>
        <option value="sedan">Sedan</option>
        <option value="mpv">MPV</option>
        <option value="suv">SUV</option>
        <option value="convertible">Convertible</option>
        <option value="sport-car">Sport Car</option>
        <option value="electric">Electric</option>
      </select>
    </div>
  );
}
