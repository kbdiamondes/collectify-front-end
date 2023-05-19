import React from 'react'; 
import GetStarted from './src/Components/GetStarted';
import Login from './src/Components/Login';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/Components/Register';

const Stack = createNativeStackNavigator<RootStackParamList>(); 

type RootStackParamList = {
  Login: undefined;
  GetStarted: undefined;
  Register: undefined;
};


export type CheckScreenNavigationprop = NativeStackNavigationProp<RootStackParamList>; 

export default function App(){
  return(
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
/*

*/