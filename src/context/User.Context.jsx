import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider(props) {
  const [user, setUser] = useState(null);

  const userData = {
    name: "Adrián",
    email: "adrian@email.com",
    isAdmin: true,
  };

  const login = () => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };