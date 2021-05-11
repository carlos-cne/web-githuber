import PrivateRoutes from "./privite.routes";
import PublicRoutes from "./public.routes";

const Routes = () => {
  return false ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
