import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, Pressable, StyleSheet, Image, Modal} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from "../../../../App";
import { AuthContext } from "../../../Context/AuthContext";
import { useContext, useEffect, useState } from "react";
import DashboardHeader from "../../DashboardHeader";
import Toast from "react-native-toast-message";
import {Ionicons} from '@expo/vector-icons'; 
import React from "react";


export default function CollectorProfileModals(){
  const navigation = useNavigation<CheckScreenNavigationprop>();
  const auth = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(auth?.user?.isLoggedIn);

  useEffect(() => {
    setIsLoggedIn(auth?.user?.isLoggedIn);

  }, [auth?.user?.isLoggedIn]);

  const logOut = async () => {
      try {
        auth?.logout();
        setIsLoggedIn(false);
        navigation.navigate('Login')
      } catch (error) {
        console.warn(error);
      } finally {
          console.assert("Logged out!")
      }
  };

  const showSuccessToast = () => {
    Toast.show({
      type: 'info',        
      text1: 'Coming soon!',
      visibilityTime: 4000,
      position: 'bottom', 
    });
  }
      
      


  return(
      <SafeAreaView style={styles2.container}>   
      <View style={{marginHorizontal: hp(1), marginVertical: hp(5)}}>
        <DashboardHeader username={auth?.user?.username ?? ''}/>
      </View>
      {isLoggedIn && ( // Display the sign out option only if the user is logged in
      <View>
          <Pressable onPress={showSuccessToast}>
            <ItemComponent name="Profile"/>
          </Pressable>

          <Pressable onPress={showSuccessToast}>
            <ItemComponent name="Settings"/>
          </Pressable>

          <Pressable onPress={logOut}>
            <ItemComponent name="Logout"/>
          </Pressable>
      </View>
  )}
    </SafeAreaView>
  );

}

interface itemComp{
name: string
}

function ItemComponent(props: itemComp){
return(
  <SafeAreaView style={styles.item}>
  <View style={styles.itemLeft}>    

      <View style={styles.itemText}>
          <Text style={{color:'#363636', fontSize: hp(2.5), fontWeight: 'bold'}}>{props.name}</Text>                                     
      </View>

        <View style={styles.buttonContainer}>              
                <Ionicons name="chevron-forward-outline" color='#000000' size={20}/>              
        </View>
  </View>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
item:{
  padding: 20,
  backgroundColor: '#FFFFFF',
  borderRadius: 10, 
  marginBottom: 20,
  marginLeft: hp(1), 
  marginRight: hp(1), 
  shadowColor: '#000', 
  shadowOpacity: 0.10,
  shadowOffset: {
      width:0,
      height: 2,
  },
  shadowRadius: 4,
  elevation: 2
},
itemLeft:{
    flexDirection:'row',
    justifyContent: 'center',
    aligntItems: 'center', 
    flexWrap:'wrap'
}, 
itemText: {
  flex:5,  
  marginLeft: hp(1.5), 
  marginRight: hp(1.5), 
  justifyContent: 'center', 
  alignItems: 'flex-start', 
  textAlign: 'left'
}, 
buttonContainer: {
  flex:.8, 
  justifyContent: 'center'
}
}); 

const styles2 = StyleSheet.create({
container:{
    flex: 1, 
    paddingTop: hp(2), 
    paddingHorizontal: hp(1.5),
    backgroundColor: '#F5F7F9'
}, 
textHeader:{
    fontSize: hp(2),
    fontWeight: 'bold', 
    color: '#9F9F9F',
    padding: hp(1.2)
},
header:{
    justifyContent: 'flex-start',
    flexDirection: 'row', 
    height:hp(10), 
    marginTop: hp(3), 
}, 
square:{
    width: wp(10),  
    height: hp(5), 
    marginRight: hp(1.5),
    backgroundColor: '#92A0A8', 
    borderRadius: 25
}, 
});