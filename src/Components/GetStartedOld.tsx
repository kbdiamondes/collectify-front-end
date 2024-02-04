
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, SafeAreaView, View, Text, Image, Pressable} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CheckScreenNavigationprop } from "../../App";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from "react";


const PlaceHolderImage = require('../../assets/vector-1-welcome.png');
/* Solution for no need to type check the routes and their parameters
interface NavigationProps{
    navigation: NativeStackNavigationProp<any>
}
*/
export default function GetStarted(){
    //Const is declared to use the useNavigation hook to have access on "navigation" object
    const navigation = useNavigation<CheckScreenNavigationprop>(); 
    return(
        <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={PlaceHolderImage}/>
                    </View>
                </View>
            
            <Text style={styles.textHeader}>Welcome</Text>
            <Text style={styles.textMultiline}>Record, track, and collect payments from clients with ease. </Text>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={()=>navigation.navigate('Login')}>
                        <Text style={styles.buttonLabel}>Get Started</Text>
                </Pressable>
            </View>
            
        
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center', 
        justifyContent: 'center', 
        width: wp(100), 
        height: hp(50)
    },

    textHeader:{
        fontSize:55,
        fontWeight: 'bold', 
        
        width: wp(100),
        height: hp(10),
        //paddingTop: 360, 
        paddingHorizontal: 35, 
        color: '#203949'
    }, 

    textMultiline:{
        fontSize: 23,
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        flexDirection: 'row',
        width: wp(100), 
        height: hp(50), 
        marginLeft: '10%',
        marginRight: '10%',
        //paddingTop: 7, 
        //paddingHorizontal: 35, 
        //marginHorizontal: '10%',
        color: '#707070'

    },

    imageContainer:{
        width: '100%', 
        height: '100%', 
        flex: 1
    },
    
    image:{
        width: 450, 
        height: 500
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
        fontSize: 20
    },

    buttonContainer:{
        width: wp(80), 
        height: hp(7), 
        backgroundColor: '#707070',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        marginHorizontal:'10%' 
    }, 

    widget:{
        borderRadius: 15 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row', 
    },

    widgetLabel:{
        color: '#707070', 
        fontSize: 12
    },

    widgetContainer:{
        width: 300, 
        height: 80, 
        backgroundColor: '#F5F7F9',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        marginLeft: 55, 
        marginTop: 65,
        marginBottom: 25, 
    }, 

});


const styless = StyleSheet.create({
    container:{
      height: hp(100)
    }, 
    header:{
      height: hp(20),
      backgroundColor: 'blue'
    }, 
    main:{
      height: hp(50), 
      display:'flex', 
      flexDirection: 'row'
    }, 
    body1:{
      width: wp(50), 
      backgroundColor: 'green'
    },
    body2:{ 
      width: wp(50),
      backgroundColor: 'yellow'
    }, 
    footer:{
      height: hp(30), 
      backgroundColor: 'grey'
    }
  });
  