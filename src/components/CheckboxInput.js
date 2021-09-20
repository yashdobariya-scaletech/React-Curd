import React from "react";

export default function CheckboxInput(props) {
  return (
    <div>
      <div className="form-item">
        <label className="">{props.lable}</label>
        <label className="ml mt">
          <input
            name="sunroof"
            type="checkbox"
            onChange={(e) => this.updateInputField(props.fieldName, e)}
            checked={""}
          />
          Sunroof
        </label>

        <label className="ml">
          <input
            name="navigationSystem"
            type="checkbox"
            id=""
            onChange={(e) => this.updateInputField(props.fieldName, e)}
            checked={""}
          />
          Navigation System
        </label>

        <label className="ml">
          <input
            name="remoteStart"
            type="checkbox"
            id=""
            onChange={(e) => this.updateInputField(props.fieldName, e)}
            checked={""}
          />
          Remote Start
        </label>

        <label className="ml">
          <input
            name="abs"
            type="checkbox"
            id=""
            onChange={(e) => this.updateInputField(props.fieldName, e)}
            checked={""}
          />
          ABS
        </label>

        <label className="ml">
          <input
            name="appleAndroid"
            type="checkbox"
            id=""
            onChange={(e) => this.updateInputField(props.fieldName, e)}
            checked={""}
          />
          Apple Carplay and Android Auto
        </label>
      </div>
    </div>
  );
}
