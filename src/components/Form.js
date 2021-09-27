import TextInput from "./TextInput";
import Dropdown from "./Dropdown";
import RadioButton from "./RadioButton";
import CheckboxInput from "./CheckboxInput";
import Textarea from "./Textarea";
import Button from "./Button";
// import React from "react";

import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carData: {
        carName: "",
        modelName: "",
        carType: "Sport Car",
        featureList: [],
        carFule: "",
        carOverview: "",
      },
      selectedIndex: "",
      isEdit: false,
      checkErrorField: {
        carName: false,
        modelName: false,
        carType: false,
        carFule: false,
        featureList: false,
        carOverview: false,
      },
    };
  }

  submitHandle = (e) => {
    e.preventDefault();
    const carData = { ...this.state.carData };
    console.log(carData);
    // const carData = { ...this.state.carData };
    // const isEdit = this.state.isEdit;
    // console.log(isEdit, "is");
    // const selectedIndex = this.state.selectedIndex;

    // if (isEdit) {
    //   carsList[selectedIndex] = carData;
    // } else {
    //   carsList.push(carData);
    // }

    // this.setState({
    //   carsList,
    //   isEdit: false,
    //   carData: {
    //     carName: "",
    //     modelName: "",
    //     carType: "Sport Car",
    //     featureList: [],
    //     carFule: "",
    //     carOverview: "",
    //   },
    // });
  };

  resetHandle = () => {
    this.setState({
      carData: {
        carName: "",
        modelName: "",
        carType: "",
        featureList: [],
        carFule: "",
        carOverview: "",
      },
    });
  };

  updateInputField = (fieldname, e) => {
    const carData = { ...this.state.carData };
    const target = e.target;
    let name = target.name;
    const value = target.value;
    const featureList = [...carData.featureList];
    if (
      target.type === "text" ||
      target.type === "textarea" ||
      target.type === "select-one" ||
      target.type === "radio"
    ) {
      carData[fieldname] = value;
    }

    if (target.type === "checkbox") {
      if (!featureList.includes(name)) {
        featureList.push(name);
      } else {
        featureList.splice(name, 1);
      }
    }
    carData.featureList = featureList;

    this.setState({
      carData,
    });
  };

  render() {
    return (
      <div className="form-wrap">
        <form className="form" onSubmit={this.submitHandle}>
          <div className="input-wrap">
            <TextInput
              lable="Company Name"
              fieldName="carName"
              fieldValue={this.state.carData.carName}
              updateInputField={this.updateInputField}
            />
            {
              <p className="error">
                {!this.state.checkErrorField.carName &&
                  this.state.checkErrorField.errorField}
              </p>
            }
            <TextInput
              lable="Model Name"
              fieldName="modelName"
              fieldValue={this.state.carData.modelName}
              updateInputField={this.updateInputField}
            />
            {
              <p className="error">
                {!this.state.checkErrorField.modelName &&
                  this.state.checkErrorField.errorField}
              </p>
            }
          </div>
          <Dropdown
            lable="Choose a car type:"
            fieldName="carType"
            fieldValue={this.state.carData.carType}
            updateInputField={this.updateInputField}
          />
          {
            <p className="error">
              {!this.state.checkErrorField.carType &&
                this.state.checkErrorField.errorField}
            </p>
          }

          <RadioButton
            lable="Type Of Car Fuel"
            fieldName="carFule"
            fieldValue={this.state.carData.carFule}
            updateInputField={this.updateInputField}
          />
          {
            <p className="error">
              {!this.state.checkErrorField.carFule &&
                this.state.checkErrorField.errorField}
            </p>
          }

          <CheckboxInput
            lable="Car Features List"
            fieldName="featureList"
            fieldValue={this.state.carData.featureList}
            updateInputField={this.updateInputField}
          />
          {
            <p className="error">
              {!this.state.checkErrorField.featureList &&
                this.state.checkErrorField.errorField}
            </p>
          }

          <Textarea
            lable="Car Overview"
            fieldName="carOverview"
            fieldValue={this.state.carData.carOverview}
            updateInputField={this.updateInputField}
          />
          {
            <p className="error">
              {!this.state.checkErrorField.carOverview &&
                this.state.checkErrorField.errorField}
            </p>
          }

          <Button resetHandle={this.resetHandle} isEdit={this.state.isEdit} />
        </form>
      </div>
    );
  }
}

// export default function Form(props) {

//   return (
//     <div className="form-wrap">
//       <form className="form" onSubmit={props.onSubmit}>
//         <div className="input-wrap">
//           <TextInput
//             lable="Company Name"
//             fieldName="carName"
//             fieldValue={props.data.carName}
//             updateInputField={props.updateInputField}
//           />
//           {
//             <p className="error">
//               {!props.checkErrorField.carName &&
//                 props.checkErrorField.errorField}
//             </p>
//           }
//           <TextInput
//             lable="Model Name"
//             fieldName="modelName"
//             fieldValue={props.data.modelName}
//             updateInputField={props.updateInputField}
//           />
//           {
//             <p className="error">
//               {!props.checkErrorField.modelName &&
//                 props.checkErrorField.errorField}
//             </p>
//           }
//         </div>
//         <Dropdown
//           lable="Choose a car type:"
//           fieldName="carType"
//           fieldValue={props.data.carType}
//           updateInputField={props.updateInputField}
//         />
//         {
//           <p className="error">
//             {!props.checkErrorField.carType && props.checkErrorField.errorField}
//           </p>
//         }

//         <RadioButton
//           lable="Type Of Car Fuel"
//           fieldName="carFule"
//           fieldValue={props.data.carFule}
//           updateInputField={props.updateInputField}
//         />
//         {
//           <p className="error">
//             {!props.checkErrorField.carFule && props.checkErrorField.errorField}
//           </p>
//         }

//         <CheckboxInput
//           lable="Car Features List"
//           fieldName="featureList"
//           fieldValue={props.data.featureList}
//           updateInputField={props.updateInputField}
//         />
//         {
//           <p className="error">
//             {!props.checkErrorField.featureList &&
//               props.checkErrorField.errorField}
//           </p>
//         }

//         <Textarea
//           lable="Car Overview"
//           fieldName="carOverview"
//           fieldValue={props.data.carOverview}
//           updateInputField={props.updateInputField}
//         />
//         {
//           <p className="error">
//             {!props.checkErrorField.carOverview &&
//               props.checkErrorField.errorField}
//           </p>
//         }

//         <Button resetHandle={props.resetHandle} isEdit={props.isEdit} />
//       </form>
//     </div>
//   );
// }
