import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";

const PublicRoutes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
  </Switch>
);

export default PublicRoutes;
