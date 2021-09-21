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
        carFule: {
          petrol: false,
          diesel: false,
          electric: false,
        },
        featureList: {
          sunroof: false,
          navigationSystem: false,
          remoteStart: false,
          abs: false,
          appleAndroid: false,
        },
        carOverview: "",
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
    carsList.push(carData);
    this.setState({
      carsList,
    });
    console.log(carsList[0].carName, "carname");
  };

  updateInputField = (fieldname, e) => {
    const carData = { ...this.state.carData };
    const target = e.target;
    let name = target.name;
    const value = target.value;
    const isCheked = target.checked;

    if (
      target.type === "text" ||
      target.type === "textarea" ||
      target.type === "select-one"
    ) {
      carData[fieldname] = value;
    }

    if (target.type === "checkbox") {
      carData.featureList[name] = isCheked;
    }

    if (target.type === "radio") {
      carData.carFule[value] = isCheked;
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
        />
        <Table data={this.state.carsList} />
      </div>
    );
  }
}

export default App;
