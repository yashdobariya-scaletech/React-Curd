import { Component } from "react";
import "../src/assets/style/app.scss";
import Form from "./components/Form";
import Header from "./components/Header";

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
    };
  }

  handleCarList = (list) => {
    console.log(list);
  };

  updateInputField = (fieldname, e) => {
    console.log(fieldname, e.target.value);
    // this.setState({
    //   // carName: value,
    //   modelName: value,
    //   // carType: value,
    // });
  };

  render() {
    return (
      <div>
        <Header header="Car Management" />
        <Form
          updateInputField={this.updateInputField}
          data={this.state.carData}
          // carName={this.state.carData.carName}
          // modelName={this.state.carData.modelName}
          // carType={this.state.carData.carType}
          // featureList={this.state.carData.featureList}
          // carOverview={this.state.carData.carOverview}
        />
      </div>
    );
  }
}

export default App;
