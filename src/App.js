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
        carType: "Sport Car",
        featureList: [],
        carFule: "",
        carOverview: "",
      },
      selectedIndex: "",
      isEdit: false,
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

  submitHandle = (e) => {
    e.preventDefault();
    const carsList = [...this.state.carsList];
    const carData = { ...this.state.carData };
    const isEdit = this.state.isEdit;
    console.log(isEdit, "is");
    const selectedIndex = this.state.selectedIndex;
    console.log(selectedIndex, "selectedIndex");
    // delete checkErrorField.errorField;
    // console.log(carData.featureList.length, "fdata");

    // const validateForm = Object.values(checkErrorField);
    // const featureListValid = carData.featureList.length !== 0;
    // console.log(featureListValid, "featureListValid");
    // if (!featureListValid) {
    //   console.log("if call");
    //   // delete checkErrorField.errorField;
    //   checkErrorField.featureList = false;
    // }
    // const validForm = validateForm.every((value) => {
    //   return value === true;
    // });

    // const validateForm = Object.values(checkErrorField).every((value) => {
    //   return value === true;
    // });
    // console.log(validForm, "validForm");

    // console.log(validateForm, "validateForm");
    if (isEdit) {
      carsList[selectedIndex] = carData;
    } else {
      carsList.push(carData);
    }

    this.setState({
      carsList,
      isEdit: false,
      carData: {
        carName: "",
        modelName: "",
        carType: "Sport Car",
        featureList: [],
        carFule: "",
        carOverview: "",
      },
    });

    console.log(carsList, "carsList");

    // Object.entries(carsList[0].carFule).forEach(([key, value]) => {
    //   // console.log(`${key}: ${value}`, "CARfULE");
    //   if (value === true) {
    //     console.log(`${key}`, "value");
    //   }
    // });
  };

  // validateInputField = (fieldname, e) => {
  //   const isValid = e.target.value.trim() !== "";

  //   // const isEmpty = { ...(this.state.carData.featureList === 0) };
  //   // console.log(isEmpty, "empty");
  //   // console.log(isValid, "isvalid");
  //   this.setState({
  //     checkErrorField: {
  //       ...this.state.checkErrorField,
  //       [fieldname]: isValid,
  //       errorField: isValid ? "" : "please enter valid input",
  //     },
  //   });
  // };

  editCarDataHandle = (index) => {
    const carData = { ...this.state.carsList[index] };
    // const selectedIndex = index;
    // console.log(selectedIndex, "selectedIndex");
    // console.log(carData, "carData");

    // const carsList = [...this.state.carsList];
    // carsList[selectedIndex] = carData;

    this.setState({
      carData,
      selectedIndex: index,
      isEdit: true,
    });
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

  deleteCarDataHandle = (index) => {
    const carsList = [...this.state.carsList];
    carsList.splice(index, 1);
    this.setState({
      carsList,
    });
  };

  updateInputField = (fieldname, e) => {
    const carData = { ...this.state.carData };
    const target = e.target;
    let name = target.name;
    const value = target.value;
    const featureList = [...carData.featureList];
    // this.validateInputField(fieldname, e);
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
      console.log(featureList, "chek");
    }
    carData.featureList = featureList;

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
          resetHandle={this.resetHandle}
          isEdit={this.state.isEdit}
        />
        <Table
          data={this.state.carsList}
          editCarDataHandle={this.editCarDataHandle}
          deleteCarDataHandle={this.deleteCarDataHandle}
        />
      </div>
    );
  }
}

export default App;
