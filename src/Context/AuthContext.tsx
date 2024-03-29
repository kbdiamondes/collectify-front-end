import { createContext, useState } from "react";
import { credentials } from "./AuthCredentials";
import axios from "axios";
import { BASE_URL } from "../../config";
import Toast from "react-native-toast-message";
import { ActivityIndicator, Modal } from "react-native";

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
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserCredentials>({
    username: "",
    password: "",
    isLoggedIn: false,
    entityId: '',
    tableName: "",
  });

  const login = (username: string) => {
    setLoading(true)
    axios
      .post(BASE_URL+'/login', { username }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(function (response) {
        setLoading(false)
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
          setLoading(false)
        }
      })
      .catch(function (error) {
        // Handle the error here
        console.log(error);
        setLoading(false)

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
    loading,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};
