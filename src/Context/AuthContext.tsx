import { createContext, useState } from "react";
import { credentials } from "./AuthCredentials";
import axios from "axios";
import { BASE_URL } from "../../config";
import Toast from "react-native-toast-message";

type UserCredentials = {
  username: string;
  password: string;
  isLoggedIn: boolean;
  entityId: any; // Add entityId property
  tableName: any; // Add tableName propertya
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
    tableName: "",
  });

  const login = (username: string) => {
    axios
      .post(BASE_URL+'/login', { username }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(function (response) {
        // Check if the response status is successful (e.g., 200 OK)
        if (response.status === 200 && response.data.tableName !== "Not Found") {
          console.log(response.data)
          setUser({
            username: username,
            password: '', // Set the password as needed
            entityId: response.data.entityId,
            tableName: response.data.tableName,
            isLoggedIn: true,
          });
          showSuccessToast()
        }else{
          showFailedToast()
        }
      })
      .catch(function (error) {
        // Handle the error here
        console.log(error);

      });
  };
  
  const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Welcome back!',
      visibilityTime: 4000, 
    });
  }

  const showLogoutToast = () => {
    Toast.show({
      type: 'success',
      text1: 'See you later!',
      visibilityTime: 4000,
      position: 'bottom', 
    });
  }

  const showFailedToast = () => {
    Toast.show({
      type: 'error',        
      text1: 'Login failed!',
      text2: 'Please check your username and password.',
      visibilityTime: 4000,
      position: 'bottom', 
    });
  }

  const logout = () => {
    showLogoutToast();
    setUser({ username: "", password: "", isLoggedIn: false, entityId: '', tableName: ""});

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
