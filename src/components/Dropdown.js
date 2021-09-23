import React from "react";

export default function Dropdown(props) {
  return (
    <div className="form-item">
      <label htmlFor="">{props.lable}</label>
      <select
        value={props.fieldValue}
        onChange={(e) => props.updateInputField(props.fieldName, e)}
      >
        <option value="Hatchback">Hatchback</option>
        <option value="Sedan">Sedan</option>
        <option value="MPV">MPV</option>
        <option value="SUV">SUV</option>
        <option value="Convertible">Convertible</option>
        <option value="Sport Car">Sport Car</option>
        <option value="Electric">Electric</option>
      </select>
    </div>
  );
}
