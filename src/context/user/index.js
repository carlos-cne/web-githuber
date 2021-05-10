import { createContext, useState } from "react";
import api from "../../services/api";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    const userData = localStorage.getItem("@Githuber:user");

    return userData ? JSON.parse(userData) : null;
  });

  async function signIn(username) {
    if (!username) {
      throw new Error("empty");
    }
    const { data } = await api.get(`users/${username}`);

    const { login, avatar_url } = data;
    const userData = { login, avatar: avatar_url };
    localStorage.setItem("@Githuber:user", JSON.stringify(userData));
    setUser(userData);
  }

  return (
    <UserContext.Provider value={{ user, signIn }}>
      {children}
    </UserContext.Provider>
  );
}
