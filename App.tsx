import React from 'react'; 
import { SafeAreaView, View, Text, StyleSheet} from "react-native";
import GetStarted from './src/Components/GetStarted';
import LoginScreen from './src/Components/LoginScreen';

export default function App(){
  return(
    <SafeAreaView>
      <GetStarted/>
    </SafeAreaView>
  );
}
