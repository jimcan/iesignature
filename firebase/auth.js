import { createContext, useContext, useEffect, useState } from "react";
import nookies from 'nookies'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseClient from "./firebaseClient";

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  firebaseClient()
  const [user, setUser] = useState(null)

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async user => {
      if (!user) {
        nookies.set(undefined, 'token', '', {})
        return
      }
      const token = await user.getIdToken()
      setUser(user)
      nookies.set(undefined, 'token', token, {})
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      { children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)