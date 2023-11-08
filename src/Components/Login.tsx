import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, Text, View, StyleSheet, Pressable, TextInput} from "react-native";
import { CheckScreenNavigationprop } from "../../App";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from "../Context/AuthContext";

export default function Login(){
    const navigation = useNavigation<CheckScreenNavigationprop>(); 

    const [userName, setUserName] = useState<string>('');
    const [passWord, setPassword] = useState<string>('');
    const [userNameError, setUserNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const auth = useContext(AuthContext);

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





    const handleLogin = () => {
        
        auth?.login(userName, passWord )
        
        if(auth?.isLoggedIn==true){
            navigation.navigate('TellUsMoreAboutYourself'); 
            console.log(userName, passWord, auth?.isLoggedIn);
        }else{
            alert("error")
        }
    }
    
    return(

        
        <KeyboardAvoidingView style={styles.container}>
            <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <Text onPress={()=>navigation.goBack()}>Back</Text>
                    <Text style={styles.textStyleHeader}>Login</Text>

                    <Pressable style={styles.buttonUnfilled} onPress={()=>navigation.push('Register')}>
                        <Text style={styles.buttonUnfilledLabel}>No account yet? Register Now!</Text>
                    </Pressable> 

                    <View style={styles.textSmallestContainer}>
                        <Text style={styles.textStyleSmallest} onPress={()=>alert('Coming Soon!')}>Forgot Password?</Text>
                    </View>
            </View>



            <View style={styles.main}>
                <View style={styles.body}>
                        <TextInput value={userName} onChangeText={(userNameAuth)=>setUserName(userNameAuth)} placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Enter username" > 
                        {userNameError ? <Text style={styles.errorText}>{userNameError}</Text> : null}</TextInput>
                        <TextInput  value={passWord} onChangeText={(passWordAuth)=>setPassword(passWordAuth)} placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Enter password" secureTextEntry={true}> 
                        {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}</TextInput>
                    <View  style={styles.button}>
                        <Pressable onPressIn={handleLogin}>
                                <Text style={styles.buttonLabel}>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>

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
        flex: .5, 
        height:hp(50), 
        marginLeft: hp(5), 
        marginRight: hp(5), 
        marginTop: hp(12), 
        marginBottom: hp(8)
    }, 
    main:{
        flex: 0.550,
        height: hp(5),
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
    textStyleHeader:{
        fontSize: hp(6), 
        fontWeight: 'bold', 
    },

    textStyleSmallest:{
        fontSize: hp(1.5),
    },

    textSmallestContainer:{ 
        marginTop: hp(2), 
        marginBottom: hp(1), 
        alignItems: 'center', 
        justifyContent: 'center', 

    },  
    textBoxStyle:{
        height: 50, 
        paddingLeft: hp(3),
        marginBottom: hp(1.5), 
        borderColor: '#F0F2F4', 
        borderWidth: 2,
        color:'#363636',
    },

    button:{
        backgroundColor: '#2C85E7',
        height: hp(7),
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
    }, 

    errorText: {
        color: "red",
        fontSize: 12,
        marginBottom: 8,
      },

});

////