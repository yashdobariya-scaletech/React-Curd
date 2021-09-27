import React, { Component } from "react";
import { connect } from "react-redux";

import TextInput from "./TextInput";
import Dropdown from "./Dropdown";
import RadioButton from "./RadioButton";
import CheckboxInput from "./CheckboxInput";
import Textarea from "./Textarea";
import Button from "./Button";
import {
  ADD_CARS_DETAILS,
  UPDATE_CARS_DETAILS,
  DELETE_CARS_DETAILS,
} from "../store/action";

// import React from "react";

class Form extends Component {
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
    // const carsList = [...this.state.carsList];
    const carData = { ...this.state.carData };
    console.log(carData);
    // const isEdit = this.state.isEdit;
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
    this.props.addCarDetail(carData);
  };

  // submitHandle = (e) => {
  //   e.preventDefault();

  //   const carData = { ...this.state.carData };
  //   console.log(carData);
  //   // const carData = { ...this.state.carData };
  //   // const isEdit = this.state.isEdit;
  //   // console.log(isEdit, "is");
  //   // const selectedIndex = this.state.selectedIndex;

  //   // if (isEdit) {
  //   //   carsList[selectedIndex] = carData;
  //   // } else {
  //   //   // carsList.push(carData);
  //   // // }
  //   this.props.addCarDetail();

  //   // this.setState({
  //   //   carsList,
  //   //   isEdit: false,
  //   //   carData: {
  //   //     carName: "",
  //   //     modelName: "",
  //   //     carType: "Sport Car",
  //   //     featureList: [],
  //   //     carFule: "",
  //   //     carOverview: "",
  //   //   },
  //   // });
  // };

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

  editCarDataHandle = (index) => {
    this.props.updateCarDetail();

    const carData = { ...this.state.carsList[index] };

    this.setState({
      carData,
      selectedIndex: index,
      isEdit: true,
    });
  };

  deleteCarDataHandle = (index) => {
    this.props.deleteCarDetail();

    const carsList = [...this.state.carsList];
    carsList.splice(index, 1);
    this.setState({
      carsList,
    });
  };

  render() {
    return (
      <div className="form-wrap">
        <form className="form" onSubmit={this.submitHandle.bind(this)}>
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

const mapStatetoProps = (state) => ({
  ...state,
});

const DispatchProps = (dispatch) => {
  return {
    addCarDetail: (data) => dispatch({ type: ADD_CARS_DETAILS, carData: data }),
    updateCarDetail: () => dispatch({ type: UPDATE_CARS_DETAILS }),
    deleteCarDetail: () => dispatch({ type: DELETE_CARS_DETAILS }),
  };
};

export default connect(mapStatetoProps, DispatchProps)(Form);
