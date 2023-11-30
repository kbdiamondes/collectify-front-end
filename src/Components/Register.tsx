import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, Pressable, TextInput, KeyboardAvoidingView} from "react-native";
import { CheckScreenNavigationprop, RootStackParamList } from "../../App";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from "axios";
import { BASE_URL } from "../../config";
import Toast from "react-native-toast-message";


const showSuccessToast = () => {
    Toast.show({
      type: 'success',        
      text1: 'Welcome to Collectify',
      visibilityTime: 4000,
      position: 'bottom', 
    });
  }
  
  
  const showFailedToast = () => {
    Toast.show({
      type: 'error',        
      text1: 'Registration Error',
      text2: 'Please check your connection and try again',
      visibilityTime: 4000,
      position: 'bottom', 
    });
  }
  

export default function Register(){
    const navigation = useNavigation<CheckScreenNavigationprop>(); 
    const screen = useRoute<RouteProp<RootStackParamList, 'Register'>>().params.screen;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const handlePress = async () => {
        const apiURL = `${BASE_URL}${screen}`; // convert screen to lowercase and append 's' to match your API endpoints
        console.log(apiURL)
        const nameParts = fullName.split(' ');
        const firstname = nameParts[0];
        const middlename = nameParts.length > 2 ? nameParts[1] : '';
        const lastname = nameParts.length > 2 ? nameParts[2] : nameParts[1];

        const data = {
            username,
            fullName,
            address: null,
            email,
            firstname,
            middlename,
            lastname,
        };

        try {
            const response = await axios.post(apiURL, data);
            console.log(response.data);  
            showSuccessToast();   
            navigation.goBack();       
            navigation.goBack();
        } catch (error) {
            showFailedToast();
        }
    }

    return(
        <KeyboardAvoidingView style={styles.container}>
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>    
                <Text style={styles.textStyleSubheader} onPress={()=>navigation.goBack()}>Back</Text>
                <Text style={styles.textStyleHeader}>Get Started</Text>
            </View>

            <View style={styles.main}>
                <View style={styles.body}>
                    <TextInput placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Enter username" onChangeText={setUsername}></TextInput>
                    <TextInput placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} secureTextEntry={true} placeholder="Enter password" onChangeText={setPassword}></TextInput>
                    <TextInput placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Full Name" onChangeText={setFullName}></TextInput>
                    <TextInput placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Email Address" onChangeText={setEmail} ></TextInput>
                    
                    <View style={styles.button}>
                        <Pressable onPress={handlePress}>
                            <Text style={styles.buttonLabel}>Register</Text>
                        </Pressable>
                    </View>               
                </View>
            </View> 
            
        </SafeAreaView>
        </KeyboardAvoidingView>
    );

}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: hp(100)
    },
    header:{
        flex: 0.5, 
        height:hp(50), 
        marginTop: hp(10), 
        marginLeft: hp(5), 
        marginRight: hp(5), 
        marginBottom: hp(5)
    }, 
    main:{
        flex: 1.5,
        display: 'flex', 
        flexDirection: 'row', 
    }, 
    body:{
        flex: 1, 
        width: wp(100), 
        paddingLeft: hp(5), 
        paddingRight: hp(5)
    }, 
    footer:{
        flex:0.3, 
        height: hp(50), 
        paddingLeft: hp(5)
    }, 
    textStyleSubheader:{
        paddingTop: 35, 
        paddingBottom: 25
    },
    textStyleHeader:{
        fontSize: hp(5), 
        fontWeight: 'bold', 
    },

    textStyleSmallest:{
        fontSize: hp(1.5),
    },

    textSmallestContainer:{ 
        flex:1,
        marginTop: hp(2), 
        marginBottom: hp(1), 
        alignItems: 'center', 
        justifyContent: 'center', 


    },  
    textBoxStyle:{
        height: hp(7), 
        paddingLeft: hp(3),
        marginBottom: hp(1.5), 
        borderColor: '#F0F2F4', 
        borderWidth: 2,
        color:'#363636', 

    },

    button:{
        marginTop: hp(5), 
        backgroundColor: '#2C85E7',
        height: hp(6.5),
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
    },
    buttonLabel:{
        color: '#fff', 
        fontSize: hp(2)
    },

    buttonUnfilled:{
        borderRadius: 5,
        borderWidth: 2, 
        borderColor: '#F0F2F4',
        height: hp(7), 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row', 
        backgroundColor: '#fff', 
        marginTop: '5%'
    },

    buttonUnfilledLabel:{
        color: '#4A5B6B', 
        fontSize: hp(1.2)
    }, 

});