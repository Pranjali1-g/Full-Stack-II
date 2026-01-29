import { createContext, useState } from "react";
// import createContext from "react";

// src/Context/userContext.js

export const UserContext = createContext(null);
UserContext.displayName = "UserContext";

export function UserProvider({ children }) {
  const [user, setUser] = useState("Pranjali");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
