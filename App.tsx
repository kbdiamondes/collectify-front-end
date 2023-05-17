import React from 'react'; 
import { SafeAreaView, View, Text, StyleSheet} from "react-native";
import LoginScreen from './src/Components/LoginScreen';

export default function App(){
  return(
    <SafeAreaView style={styles.container}>
      <LoginScreen/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent: 'flex-start', 
    alignItem: 'flext-start', 
    paddingTop: 80, 
    paddingLeft: 35,
    paddingRight: 35, 
    paddingBottom: 80
  }, 

}); 