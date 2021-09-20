import React from "react";

const TextInput = (props) => {
  return (
    <div className="form-item wh">
      <label>{props.lable}</label>
      <input
        className="form-item--bigWidth"
        type="text"
        name={props.fieldName}
        value={props.fieldValue}
        onChange={(e) => props.updateInputField(props.fieldName, e)}
        placeholder="Enter company name"
      />
    </div>
  );
};

export default TextInput;
