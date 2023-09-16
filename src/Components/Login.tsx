import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Pressable, TextInput} from "react-native";
import { CheckScreenNavigationprop } from "../../App";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default function Login(){
    const navigation = useNavigation<CheckScreenNavigationprop>(); 

    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                    <Text style={styles.textStyleSubheader} onPress={()=>navigation.goBack()}>Back</Text>
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
                    <TextInput placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Enter username" ></TextInput>
                    <TextInput placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Enter password" ></TextInput>

                    <View  style={styles.button}>
                        <Pressable onPressIn={()=>navigation.push('TellUsMoreAboutYourself')}>
                                <Text style={styles.buttonLabel}>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>

            </View>
        </SafeAreaView>
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
        margin: hp(5)
    }, 
    main:{
        flex: 0.550,
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
        fontSize: hp(6), 
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

});



/*
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
        width: 320, 
        height: 50, 
        paddingLeft: 20,
        borderColor: '#F0F2F4', 
        borderWidth: 2,
        marginBottom: 13, 
        color:'#363636', 
    },

    buttonContainer:{
        width: 318, 
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
        width: 318, 
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

});*/