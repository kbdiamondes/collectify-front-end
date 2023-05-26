import React from 'react'; 
import GetStarted from './src/Components/GetStarted';
import Login from './src/Components/Login';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './src/Components/Register';
import DuePayments from './src/Components/Client/DuePayments';
import { TabNavigator } from './src/Components/Client/ClientTabNavigator';
import { CollectorTabNavigator } from './src/Components/Collector/CollectorTabNavigator';
import TellMeAboutYourself from './src/Components/TellMe';
import { ResellerTabNavigator } from './src/Components/Reseller/ResellerTabNavigator';
import TestApp from './src/Services/TestAxios';
import AssignCollectorScreen from './src/Components/Reseller/AssignCollector';

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
  Collect: undefined; 
  FollowUp: undefined;
  Assurance: undefined; 
  TellUsMoreAboutYourself: undefined; 
  SoldItems: undefined; 
  MyCollector: undefined; 
  SendCollector: undefined; 
  AssignCollector: undefined; 
};

//used for typechecking upon navigating screens to see if Screen name is not void
export type CheckScreenNavigationprop = NativeStackNavigationProp<RootStackParamList>; 

export default function App(){
  return(
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen name="TellUsMoreAboutYourself" component={TellMeAboutYourself} options={{headerShown:false}}/>
      <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
      <Stack.Screen name="DuePayments" component={TabNavigator} options={{headerShown: false, headerBackButtonMenuEnabled: true}}/>
      <Stack.Screen name="ScheduledPayments" component={TabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="PaymentReminders" component={TabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="TransactionHistory" component={TabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="Collect" component={CollectorTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="FollowUp" component={CollectorTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="Assurance" component={CollectorTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="SoldItems" component={ResellerTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="MyCollector" component={ResellerTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="SendCollector" component={ResellerTabNavigator} options={{headerShown: false}}/>
      <Stack.Screen name="AssignCollector" component={AssignCollectorScreen} options={{headerShown: false}}/>
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