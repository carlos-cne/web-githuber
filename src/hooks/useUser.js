import { useContext } from "react";
import { UserContext } from "../context/user";

export const useUser = () => {
  const { user, signIn } = useContext(UserContext);

  return { user, signIn };
};
