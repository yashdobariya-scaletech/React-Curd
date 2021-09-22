import { Component } from "react";
import "../src/assets/style/app.scss";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carsList: [],
      carData: {
        carName: "",
        modelName: "",
        carType: "",
        carFule: "",
        featureList: [],
        carOverview: "",
      },
      errorField: "",
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

  carListHandle = (list) => {
    console.log(list);
  };

  submitHandle = (e) => {
    e.preventDefault();
    const carData = { ...this.state.carData };
    const carsList = [...this.state.carsList];
    const checkErrorField = { ...this.state.checkErrorField };

    const validateForm = Object.values(checkErrorField).forEach(
      (val) => val === true
    );
    console.log(validateForm, "ho");

    if (this.state.formIsValidate) {
      carsList.push(carData);
    }
    this.setState({
      carsList,
    });

    console.log(this.state.checkErrorField, "fe");

    // Object.entries(carsList[0].carFule).forEach(([key, value]) => {
    //   // console.log(`${key}: ${value}`, "CARfULE");
    //   if (value === true) {
    //     console.log(`${key}`, "value");
    //   }
    // });
  };

  validateInputField = (fieldname, e) => {
    const isValid = e.target.value.trim() !== "";

    // const isEmpty = { ...(this.state.carData.featureList === 0) };
    // console.log(isEmpty, "empty");
    // console.log(isValid, "isvalid");
    this.setState({
      checkErrorField: {
        ...this.state.checkErrorField,
        [fieldname]: isValid,
        errorField: isValid ? "" : "please enter valid input",
      },
    });
  };

  updateInputField = (fieldname, e) => {
    // console.log("UPDATE");
    const carData = { ...this.state.carData };
    const target = e.target;
    let name = target.name;
    const value = target.value;
    this.validateInputField(fieldname, e);
    if (
      target.type === "text" ||
      target.type === "textarea" ||
      target.type === "select-one" ||
      target.type === "radio"
    ) {
      carData[fieldname] = value;
    }

    if (target.type === "checkbox") {
      carData.featureList.push([name]);
    }

    this.setState({
      carData,
    });
  };

  render() {
    return (
      <div>
        <Header header="Car Management" />
        <Form
          updateInputField={this.updateInputField}
          data={this.state.carData}
          onSubmit={this.submitHandle}
          errorField={this.state.errorField}
          checkErrorField={this.state.checkErrorField}
        />
        <Table data={this.state.carsList} />
      </div>
    );
  }
}

export default App;
