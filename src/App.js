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
  };

  editCarDataHandle = (index) => {
    const carData = { ...this.state.carsList[index] };

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
