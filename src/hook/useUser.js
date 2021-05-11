import { useContext } from "react";
import { UserContext } from "../context/user";

export const useUser = () => {
  const { signIn } = useContext(UserContext);

  return { signIn };
};
