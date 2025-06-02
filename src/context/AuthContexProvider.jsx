import React, { useState } from 'react'

export const AuthContext = React.createContext();

export default function AuthContexProvider({ children }) {
  const [user, setUser] = useState(true);

  const value = {user, setUser}
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

