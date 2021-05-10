import PrivateRoutes from "./private.routes";
import PublicRoutes from "./public.routes";
import { useUser } from "../hooks/useUser";

const Routes = () => {
  const { user } = useUser();
  return user ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;
