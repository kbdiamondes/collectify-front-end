import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Pressable, TextInput} from "react-native";
import { CheckScreenNavigationprop } from "../../App";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Register(){
    const navigation = useNavigation<CheckScreenNavigationprop>(); 

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>    
                <Text style={styles.textStyleSubheader} onPress={()=>navigation.goBack()}>Back</Text>
                <Text style={styles.textStyleHeader}>Get Started</Text>
            </View>

            <View style={styles.main}>
                <View style={styles.body}>
                    <TextInput placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Enter username" ></TextInput>
                    <TextInput placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Enter password" ></TextInput>
                    <TextInput placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Full Name" ></TextInput>
                    <TextInput placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Email Address" ></TextInput>
                    
                    <View style={styles.button}>
                        <Pressable onPressIn={()=>alert("Registered'")}>
                            <Text style={styles.buttonLabel}>Register</Text>
                        </Pressable>
                    </View>               
                </View>
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
        flex: 2.5,
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
        paddingLeft: wp(5),
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
        fontSize: hp(1.2)
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
        fontSize: 48, 
        fontWeight: 'bold', 
        marginBottom: 25
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
        color:'#363636', 
        width: 320, 
        height: 50, 
        paddingLeft: 20,
        borderColor: '#F0F2F4', 
        borderWidth: 2,
        marginBottom: 15, 
        
    },

    buttonContainer:{
        width: 320, 
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
    }
});

*/