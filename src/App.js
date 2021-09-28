import "../src/assets/style/app.scss";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";
import { Route, Switch, Redirect, useParams } from "react-router-dom";

export default function App() {
  const params = useParams();

  return (
    <div>
      <Header header="Car Management" />
      <Switch>
        <Route path="/table" component={Table} />
        <Route path="/form/add" component={Form} />
        <Route path="/form/edit/:id" component={Form} />
        <Route path={`/form/edit/${params.id}`}>
          <Redirect path="/form/add" />
        </Route>
      </Switch>
    </div>
  );
}
