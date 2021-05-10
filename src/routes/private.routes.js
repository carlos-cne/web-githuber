import { Switch, Route } from "react-router-dom";

const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/" render={() => <h1>area logada</h1>} />
  </Switch>
);

export default PrivateRoutes;
