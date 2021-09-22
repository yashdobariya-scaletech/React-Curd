import TextInput from "./TextInput";
import Dropdown from "./Dropdown";
import RadioButton from "./RadioButton";
import CheckboxInput from "./CheckboxInput";
import Textarea from "./Textarea";
import Button from "./Button";
import React from "react";

export default function Form(props) {
  return (
    <div className="form-wrap">
      <form className="form" onSubmit={props.onSubmit}>
        <div className="input-wrap">
          <TextInput
            lable="Company Name"
            fieldName="carName"
            fieldValue={props.data.carName}
            updateInputField={props.updateInputField}
          />
          {
            <p className="error">
              {props.checkErrorField.carName && props.errorField}
            </p>
          }
          <TextInput
            lable="Model Name"
            fieldName="modelName"
            fieldValue={props.data.modelName}
            updateInputField={props.updateInputField}
          />
          {
            <p className="error">
              {props.checkErrorField.modelName && props.errorField}
            </p>
          }
        </div>
        <Dropdown
          lable="Choose a car type:"
          fieldName="carType"
          fieldValue={props.data.carType}
          updateInputField={props.updateInputField}
        />
        {
          <p className="error">
            {props.checkErrorField.carType && props.errorField}
          </p>
        }

        <RadioButton
          lable="Type Of Car Fuel"
          fieldName="carFule"
          fieldValue={props.data.carFule}
          updateInputField={props.updateInputField}
        />
        {
          <p className="error">
            {props.checkErrorField.carFule && props.errorField}
          </p>
        }

        <CheckboxInput
          lable="Car Features List"
          fieldName="featureList"
          fieldValue={props.data.featureList}
          updateInputField={props.updateInputField}
        />
        {
          <p className="error">
            {props.checkErrorField.featureList && props.errorField}
          </p>
        }

        <Textarea
          lable="Car Overview"
          fieldName="carOverview"
          fieldValue={props.data.carOverview}
          updateInputField={props.updateInputField}
        />
        {
          <p className="error">
            {props.checkErrorField.carOverview && props.errorField}
          </p>
        }

        <Button />
      </form>
    </div>
  );
}
