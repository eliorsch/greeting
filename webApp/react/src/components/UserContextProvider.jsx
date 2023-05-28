import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  onAuthStateChanged(getAuth(), (user) => setUser(user));

  console.log(user);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
