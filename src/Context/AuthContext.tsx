import { createContext, useState } from "react";
import { credentials } from "./AuthCredentials";
import axios from "axios";

type UserCredentials = {
  username: string;
  password: string;
  isLoggedIn: boolean;
  entityId: any; // Add entityId property
  tableName: any; // Add tableName property
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  user: UserCredentials;
  login: (username: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<UserCredentials>({
    username: "",
    password: "",
    isLoggedIn: false,
    entityId: '',
    tableName: ""

  });

  const login = (username: string) => {
    axios
      .post('http://192.168.1.2:8080/login', { username }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(function (response) {
        // Check if the response status is successful (e.g., 200 OK)
        if (response.status === 200) {
          console.log(response.data)
          setUser({
            username: username,
            password: '', // Set the password as needed
            entityId: response.data.entityId,
            tableName: response.data.tableName,
            isLoggedIn: true,
          });
        }
      })
      .catch(function (error) {
        // Handle the error here
        console.log(error);
        alert("Authentication failed. Server error.");
      });
  };
  
  

  const logout = () => {
    setUser({ username: "", password: "", isLoggedIn: false, entityId: '', tableName: "" });
  };

  const authValue: AuthContextType = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};
