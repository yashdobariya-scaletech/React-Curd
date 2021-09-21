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
          <TextInput
            lable="Model Name"
            fieldName="modelName"
            fieldValue={props.data.modelName}
            updateInputField={props.updateInputField}
          />
        </div>
        <Dropdown
          lable="Choose a car type:"
          fieldName="carType"
          fieldValue={props.data.carType}
          updateInputField={props.updateInputField}
        />
        <RadioButton
          lable="Type Of Car Fuel"
          fieldName="carFule"
          fieldValue={props.data.carFule}
          updateInputField={props.updateInputField}
        />
        <CheckboxInput
          lable="Car Features List"
          fieldName="featureList"
          fieldValue={props.data.featureList}
          updateInputField={props.updateInputField}
        />
        <Textarea
          lable="Car Overview"
          fieldName="carOverview"
          fieldValue={props.data.carOverview}
          updateInputField={props.updateInputField}
        />
        <Button />
      </form>
    </div>
  );
}
