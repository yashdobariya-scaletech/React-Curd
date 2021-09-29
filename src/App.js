import "../src/assets/style/app.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";

export default function App() {
  return (
    <div>
      <Header header="Car Management" />
      <Switch>
        <Route path="/table" exact component={Table} />
        <Route path="/form/add" component={Form} />
        <Route path="/form/edit/:id" component={Form} />
        <Redirect to="/table" />
      </Switch>
    </div>
  );
}
