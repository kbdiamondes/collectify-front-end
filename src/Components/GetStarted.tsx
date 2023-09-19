
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, SafeAreaView, View, Text, Image, Pressable} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CheckScreenNavigationprop } from "../../App";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


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
        <SafeAreaView style={styles.container}>
            <View style={styles.headerimage}>
                <View style={styles.imageContainer}>
                <Image style={styles.image} source={PlaceHolderImage}/>
                </View>
            </View>
            
            <View style={styles.main}>
                <View style={styles.body}>
                <Text style={styles.textHeader}>Welcome</Text>
                <Text style={styles.textMultiline}>Record, track, and collect payments from clients with ease. </Text>
                </View>
            </View>


            <View style={styles.footer}>
                <View style={styles.button}>
                        <Pressable onPress={()=>navigation.navigate('Login')}>
                                <Text style={styles.buttonLabel}>Get Started</Text>
                        </Pressable>
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
    headerimage:{
        flex: 0.5, 
        height:hp(50)
    }, 
    main:{
        flex: 0.5, 
        //height: hp(35), 
        display: 'flex', 
        flexDirection: 'row'
    }, 
    body:{
        flex:1,
        width: wp(100), 
        paddingLeft: 25, 
        paddingRight: 25
    }, 
    footer:{
        flex:0.15, 
        height: hp(50)
    }, 
    textHeader:{
        fontSize:hp(6),
        fontWeight: 'bold', 
        height: hp(10),
        color: '#203949'
    }, 

    textMultiline:{
        flex: 1, 
        fontSize: hp(2.5),
        color: '#707070'
    },

    imageContainer:{
        flexDirection: 'row', 
    },
    
    image:{
        width: 450, 
        height: 500, 
        flexDirection: "row", 
        flex: 1,
        aspectRatio: 1
    }, 
    
    button:{
        height: hp(7),
        backgroundColor: '#707070',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        margin: '5%'
    },

    buttonLabel:{
        color: '#fff', 
        fontSize: hp(2)
    },
});