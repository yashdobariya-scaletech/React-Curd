import React from "react";

export default function Textarea(props) {
  return (
    <div>
      <div className="form-item ">
        <label>{props.lable}</label>
        <textarea
          value={props.fieldName}
          onChange={(e) => props.updateInputField(props.fieldName, e)}
          rows="5"
          cols="30"
          maxLength="50"
        ></textarea>
      </div>
    </div>
  );
}
