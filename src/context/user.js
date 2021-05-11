import { createContext } from "react";
import api from "../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const signIn = async (username) => {
    const { data } = await api.get(`/users/${username}`);

    return data;
  };

  return (
    <UserContext.Provider value={{ signIn }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
