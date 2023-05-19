import React from 'react'; 
import GetStarted from './src/Components/GetStarted';
import Login from './src/Components/Login';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/Components/Register';
import DuePayments from './src/Components/Client/DuePayments';
import { TabNavigator } from './src/Components/Client/ClientTabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>(); 

type RootStackParamList = {
  Login: undefined;
  GetStarted: undefined;
  Register: undefined;
  DuePayments: undefined; 
  TabNavigator: undefined; 
  ScheduledPayments: undefined; 
  PaymentReminders: undefined; 
  TransactionHistory: undefined; 
  PaymentRecrods: undefined; 

};

//used for typechecking upon navigating screens to see if Screen name is not void
export type CheckScreenNavigationprop = NativeStackNavigationProp<RootStackParamList>; 

export default function App(){
  return(
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
      <Stack.Screen name="DuePayments" component={TabNavigator} options={{title:'Due Payments', headerTitleAlign: 'center'}}/>
      <Stack.Screen name="ScheduledPayments" component={TabNavigator} options={{title:'Scheduled Payments', headerTitleAlign: 'center'}}/>
      <Stack.Screen name="PaymentReminders" component={TabNavigator} options={{title:'Payment Reminders', headerTitleAlign: 'center'}}/>
      <Stack.Screen name="TransactionHistory" component={TabNavigator} options={{title:'Transaction History', headerTitleAlign: 'center'}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

//Theme for the STACK
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(21,98,199)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
/*

*/