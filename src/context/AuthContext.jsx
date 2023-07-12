import { createContext, useState, useEffect } from "react";
import { register, login, checkPermission } from '../api/auth'
import { useLocation } from "react-router-dom";
import * as jwt from 'jsonwebtoken'
import { useContext } from "react";

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  register: null,
  login: null,
  logout: null
}

export const AuthContext = createContext(defaultAuthContext)
export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [payload, setPayload] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const checkTokenIsValid = async () => {
      try {
        const authToken = localStorage.getItem('authToken')
        if (!authToken) {
          setIsAuthenticated(false)
          setPayload(null)
          return 
        }
        
        const success = await checkPermission(authToken)

        if (success) {
          setIsAuthenticated(true)
          const tempPayload = jwt.decode(authToken)
          setPayload(tempPayload)
        } else {
          setIsAuthenticated(false)
          setPayload(null)
        }
      } catch (e) {
        console.error('[Check Permission Failed: ]', e)
      }
    }
    checkTokenIsValid()
  }, [pathname])

  return (<AuthContext.Provider
    value={{
      isAuthenticated,
      currentMember: payload && {
        id: payload.sub,
        name: payload.name
      },
      register: async (username, email, password) => {
        const { success, authToken } = await register(username, email, password)
        const tempPayload = jwt.decode(authToken)
        if (tempPayload) {
          setIsAuthenticated(true)
          setPayload(tempPayload)
          localStorage.setItem('authToken', authToken)
        } else {
          setIsAuthenticated(false)
          setPayload(null)
        }
        return success
      },
      login: async (username, password) => {
        const { success, authToken } = await login(username, password)
        const tempPayload = jwt.decode(authToken)
        if (tempPayload) {
          setIsAuthenticated(true)
          setPayload(tempPayload)
          localStorage.setItem('authToken', authToken)
        } else {
          setIsAuthenticated(false)
          setPayload(null)
        }
        return success
      },
      logout: async (username, password) => {
        localStorage.removeItem('authToken')
        setIsAuthenticated(false)
        setPayload(null)
      }
    }}
  >
    {children}
  </AuthContext.Provider>)
}