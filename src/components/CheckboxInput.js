import React from "react";

export default function CheckboxInput(props) {
  return (
    <div>
      <div className="form-item">
        <label className="">{props.lable}</label>
        <label className="ml mt">
          <input
            checked={props.fieldValue.sunroof}
            name="sunroof"
            type="checkbox"
            onChange={(e) => props.updateInputField(props.fieldName, e)}
          />
          Sunroof
        </label>

        <label className="ml">
          <input
            name="navigationSystem"
            type="checkbox"
            onChange={(e) => props.updateInputField(props.fieldName, e)}
            checked={props.fieldValue.navigationSystem}
          />
          Navigation System
        </label>

        <label className="ml">
          <input
            name="remoteStart"
            type="checkbox"
            onChange={(e) => props.updateInputField(props.fieldName, e)}
            checked={props.fieldValue.remoteStart}
          />
          Remote Start
        </label>

        <label className="ml">
          <input
            name="abs"
            type="checkbox"
            onChange={(e) => props.updateInputField(props.fieldName, e)}
            checked={props.fieldValue.abs}
          />
          ABS
        </label>

        <label className="ml">
          <input
            name="appleAndroid"
            type="checkbox"
            onChange={(e) => props.updateInputField(props.fieldName, e)}
            checked={props.fieldValue.appleAndroid}
          />
          Apple Carplay and Android Auto
        </label>
      </div>
    </div>
  );
}
