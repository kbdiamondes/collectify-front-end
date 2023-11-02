import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, Text, View, StyleSheet, Pressable, TextInput, ActivityIndicator} from "react-native";
import { CheckScreenNavigationprop } from "../../App";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from "../Context/AuthContext";
import Toast from "react-native-toast-message";

export default function Login(){
    const navigation = useNavigation<CheckScreenNavigationprop>(); 
    const [userName, setUserName] = useState<string>('');
    const [passWord, setPassword] = useState<string>('');
    const [loading, setLoading] = useState(false); 
    const [loginAttempted, setLoginAttempted] = useState(false);
    const auth = useContext(AuthContext);

    useFocusEffect(
        React.useCallback(() => {
          setLoading(false);
        }, [])
      );

    useEffect(() => {
    if (auth?.user.tableName === "Client") {
        navigation.navigate('ClientDashboard');
    } else if (auth?.user.tableName === "Reseller") {
        navigation.navigate('ResellerDashboard');
    } else if (auth?.user.tableName === "Collector") {
        navigation.navigate('Collect');
    } else if (auth?.user.tableName === "Not Found") {
    }
        console.log("Login: "+ auth?.user.isLoggedIn)
    }, [auth?.user.tableName, loginAttempted, auth?.user.isLoggedIn]);
      
    const handleLogin = async () => {
        setLoading(true);

        try {
            await auth?.login(userName, passWord);

          } catch (error) {
            console.error('Login error:', error);
          } finally {
            setLoading(false);
            setLoginAttempted(true)
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
                        <TextInput onChangeText={(userNameAuth)=>setUserName(userNameAuth)} placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Enter username" ></TextInput>
                        <TextInput onChangeText={(passWordAuth)=>setPassword(passWordAuth)}placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Enter password" secureTextEntry={true}></TextInput>
                    {loading?(
                        <View style={styles.buttonLoading}>                        
                                    <ActivityIndicator size="large" color="#0000ff" />                     
                        </View>
                    ):(
                        <View style={styles.button}>                        
                        <Pressable onPress={handleLogin}>
                                <Text style={styles.buttonLabel}>Login</Text>
                        </Pressable>
                    </View>
                    )}


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
    buttonLoading:{
        backgroundColor: '#707070',
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

});

