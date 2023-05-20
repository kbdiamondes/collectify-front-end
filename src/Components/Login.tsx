import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Pressable, TextInput} from "react-native";
import { CheckScreenNavigationprop } from "../../App";
import {Ionicons} from '@expo/vector-icons'
export default function Login(){
    const navigation = useNavigation<CheckScreenNavigationprop>(); 

    return(
        <SafeAreaView>
            <View style={styles.container}>
                
                <Text style={styles.textStyleSubheader} onPress={()=>navigation.goBack()}>Back</Text>
                <Text style={styles.textStyleHeader}>Login</Text>

                <View style={styles.buttonUnfilledContainer}>
                    <Pressable style={styles.buttonUnfilled} onPress={()=>navigation.push('Register')}>
                        <Text style={styles.buttonUnfilledLabel}>No account yet? Register Now!</Text>
                    </Pressable>
                </View>


                <Text style={styles.textStyleSmallest} onPress={()=>alert('Coming Soon!')}>Forgot Password?</Text>

                <TextInput placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Enter username" ></TextInput>
                <TextInput placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Enter password" ></TextInput>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPressIn={()=>navigation.push('DuePayments')}>
                        <Text style={styles.buttonLabel}>Login</Text>
                    </Pressable>
                </View>               
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start', 
        alignItem: 'flext-start', 
        paddingHorizontal: 35,
        paddingVertical: 80
    }, 
    textStyleSubheader:{
        paddingTop: 35, 
        paddingBottom: 25
    },
    textStyleHeader:{
        fontSize: 55, 
        fontWeight: 'bold', 
    },

    textStyleSmallest:{
        fontSize: 13,
        alignItems:'center',
        justifyContent:'center', 
        marginTop: 16,
        marginBottom:16, 
        paddingLeft:115
    },

    textBoxStyle:{
        width: 340, 
        height: 50, 
        paddingLeft: 20,
        borderColor: '#F0F2F4', 
        borderWidth: 2,
        marginBottom: 13, 
        color:'#363636', 
    },

    buttonContainer:{
        width: 340, 
        height: 48, 
        backgroundColor: '#2C85E7',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        marginTop: 30
    }, 

    button:{
        borderRadius: 10 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },

    buttonLabel:{
        color: '#fff', 
    },

    buttonUnfilledContainer:{
        width: 340, 
        height: 48, 
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        borderColor: '#F0F2F4',
        borderWidth: 2, 
        marginTop: 30
    }, 

    buttonUnfilled:{
        borderRadius: 10 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },

    buttonUnfilledLabel:{
        color: '#4A5B6B', 
    }, 

});