import "../src/assets/style/app.scss";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header header="Car Management" />
      <Switch>
        <Route path="/table" component={Table} />
        <Route path="/form" component={Form} />
      </Switch>
    </div>
  );
}

/* <Table */

// data={this.state.carsList}
// editCarDataHandle={this.editCarDataHandle}
// deleteCarDataHandle={this.deleteCarDataHandle}
// />
