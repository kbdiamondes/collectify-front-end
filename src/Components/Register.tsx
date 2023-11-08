import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, Pressable, TextInput, KeyboardAvoidingView, ViewStyle} from "react-native";
import { CheckScreenNavigationprop } from "../../App";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Register(){
    const navigation = useNavigation<CheckScreenNavigationprop>();

        const [text, setText] = useState<string>('');
        const [userName, setUserName] = useState("");
        const [passWord, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const [userNameError, setUserNameError] = useState("");
        const [passwordError, setPasswordError] = useState("");
        const [emailError, setEmailError] = useState("");

        function validateUsername(username:string) {
            if (username.trim() === "") {
              setUserNameError("Username is required");
              return false;
            } else if (username.length < 3 || username.length > 15) {
              setUserNameError("Username must be between 3 and 15 characters");
              return false;
            }
            setUserNameError("");
            return true;
          }
        
          function validatePassword(password:string) {
            if (password.trim() === "") {
              setPasswordError("Password is required");
              return false;
            } else if (password.length < 6 || password.length > 25) {
              setPasswordError("Password must be between 6 and 25 characters");
              return false;
            }
            setPasswordError("");
            return true;
          }
        
          function validateEmail(email:string) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.trim())) {
              setEmailError("Invalid email address");
              return false;
            }
            setEmailError("");
            return true;
          }
     

        function registerComplete(){
            alert("Registered")
            navigation.push('TellUsMoreAboutYourself')
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
                    <TextInput value={userName} onChangeText={validateUsername} placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Enter username" > 
                    {userNameError ? <Text style={styles.errorText}>{userNameError}</Text> : null}</TextInput>
                    <TextInput value={passWord} onChangeText={validatePassword} placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} secureTextEntry={true} placeholder="Enter password" > 
                    {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}</TextInput>
                    <TextInput placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Full Name" ></TextInput>
                    <TextInput value={email} onChangeText={validateEmail} placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Email Address" > 
                    {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}</TextInput>
                    
                    <View style={styles.button}>
                        <Pressable onPressIn={registerComplete}>
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

    errorText: {
        color: "red",
        fontSize: 12,
        marginBottom: 8,
      },

});