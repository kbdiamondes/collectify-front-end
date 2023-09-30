import { createContext, useState } from "react";
import { credentials } from "./AuthCredentials";

type UserCredentials = {
  username: string; 
  password: string; 
  isLoggedIn: boolean; 
}

type AuthContextProviderProps = {
  children: React.ReactNode;
}


type AuthContextType = UserCredentials & {
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null); 

export const AuthContextProvider = ({children}: AuthContextProviderProps ) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<UserCredentials>({
    username: '',
    password: '', 
    isLoggedIn, 
  });

  const login = (username: string, password: string) => {
    setUser({username, password, isLoggedIn})
    if(username != "admin" && password != "admin"){
      setIsLoggedIn(!isLoggedIn)
    }else{
      alert("User not found")
    }
  }

  const logout = () => {
    setIsLoggedIn(!isLoggedIn)
    setUser({username: '', password: '', isLoggedIn})
  }

  const authValue: AuthContextType = {
    ...user,
    login,
    logout
  }

  return <AuthContext.Provider value={authValue}>
    {children}
  </AuthContext.Provider>
}