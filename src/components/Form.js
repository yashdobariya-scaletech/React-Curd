import React, { Component, Fragment } from "react";
import { ADD_CARS_DETAILS } from "../store/action";
import { connect } from "react-redux";
import TextInput from "./TextInput";
import Dropdown from "./Dropdown";
import RadioButton from "./RadioButton";
import CheckboxInput from "./CheckboxInput";
import Textarea from "./Textarea";
import Button from "./Button";

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

  editCarDataHandle = (index) => {
    const carData = { ...this.state.carsList[index] };
    this.props.updateCarDetail(carData);

    this.setState({
      carData,
      selectedIndex: index,
      isEdit: true,
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

  deleteCarDataHandle = (index) => {
    this.props.deleteCarDetail();

    const carsList = [...this.state.carsList];
    carsList.splice(index, 1);
    this.setState({
      carsList,
    });
  };

  render() {
    console.log(this.props.carsList, "car listy");
    return (
      <Fragment>
        <div className="form-wrap">
          <form className="form">
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

            <Button
              resetHandle={this.resetHandle}
              isEdit={this.state.isEdit}
              onSubmit={this.submitHandle}
            />
          </form>
        </div>
      </Fragment>
    );
  }
}

const mapStatetoProps = (state) => ({
  ...state,
});

const DispatchProps = (dispatch) => {
  return {
    addCarDetail: (data) => dispatch({ type: ADD_CARS_DETAILS, carData: data }),
  };
};

export default connect(mapStatetoProps, DispatchProps)(Form);
