import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, Image, StyleSheet, Pressable, ScrollView} from "react-native";
import { CheckScreenNavigationprop } from "../../App";
import { useNavigation } from "@react-navigation/native";

const ResellImagePlaceHolder = require('../../assets/vector-2-scaled.png');
const ClientImagePlaceHolder = require('../../assets/vector-3-scaled.png');
const CollectorImagePlaceHolder = require('../../assets/vector-4-scaled.png');

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
export default function TellMeAboutYourself(){
    const navigation = useNavigation<CheckScreenNavigationprop>(); 

    //handles logout
    const auth = useContext(AuthContext);

    const handlePress = () => {
        auth?.logout();
        
        alert("You have been logged out!");
        
        navigation.goBack(); 
    }


    return(
        <SafeAreaProvider>
            
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.textStyleHeader}>Tell us about yourself</Text>
                    <Text style={styles.textStyleSubHeader}>Select the business model that apply to you from the cards below</Text>
                    <Pressable onPress={handlePress}><Text>Sign out</Text></Pressable>
                </View>

                <ScrollView style={styles.scrollStyle}>

                    <View style={styles.main}>
                        <View style={styles.body}>

                            <Pressable onPress={()=>navigation.navigate('Collect')}>
                                <View style={styles.box}>
                                    <View style={styles.imageContainer}>
                                        <Image style={styles.image} source={ResellImagePlaceHolder}/>
                                    </View>
                                    
                                    <Text style={styles.containerTextHeader}>I want to Resell</Text>
                                </View>
                            </Pressable>

                            <Pressable onPress={()=>navigation.navigate('DuePayments')}>
                                <View style={styles.box}>
                                    <View style={styles.imageContainer}>
                                        <Image style={styles.image} source={ClientImagePlaceHolder}/>
                                    </View>
                                    
                                    <Text style={styles.containerTextHeader}>I want to buy</Text>
                                </View>
                            </Pressable>

                            <Pressable onPress={()=>navigation.navigate('SoldItems')}>
                                <View style={styles.box}>
                                    <View style={styles.imageContainer}>
                                        <Image style={styles.image} source={CollectorImagePlaceHolder}/>
                                    </View>
                                    
                                    <Text style={styles.containerTextHeader}>I want to Collect</Text>
                                </View>
                            </Pressable>



                        </View>
                    </View>
                </ScrollView>


            </View>
        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: hp(100)
    },
    header:{
        flex: 0.5, 
        height:hp(70), 
        paddingTop: hp(15),
        paddingLeft: hp(5), 
        paddingRight: hp(5),
        alignItems:'center', 
    }, 
    scrollStyle:{
        height: hp(40)
    },
    main:{
        flex: 1,
        display: 'flex', 
        flexDirection: 'row', 
    }, 
    body:{
        flex: 1, 
        height: hp(100),
        width: wp(100), 
        paddingLeft: hp(5), 
        paddingRight: hp(5), 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#F5F7F9',
    }, 
    textStyleHeader:{
        fontSize: hp(3.6),
        fontWeight: 'bold',
        flexDirection: 'row',
        textAlign: 'center'
    }, 
    textStyleSubHeader:{
        paddingTop: hp(2), 
        paddingBottom: hp(2)
    }, 
    image:{
        height: hp(20), 
        width: wp(100),
        flexDirection: "row", 
        aspectRatio: 1
    }, 
    imageContainer: {
        paddingTop: hp(1),
        alignItems: 'center',
        justifyContent:'center'
    },
    box:{
        width: wp(65), 
        height: hp(30),
        marginBottom: hp(2),  
        backgroundColor: '#FFFFFF', 
        shadowColor: '#000', 
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2, 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent:'center'
    }, 
    containerTextHeader:{
        flex: 0.5,
        fontSize: hp(1.9),
        color: '#203949', 
        paddingBottom: hp(2.5),
        fontWeight: 'bold', 
        textAlign: 'center'
 
    },

    
});


/*
const styles = StyleSheet.create({
    imageContainer: {
        paddingLeft: 20, 
        paddingTop: 10, 
        width: '80%',
        height: 40, 
        
    },
    textHeader:{
        fontSize:32,
        fontWeight: 'bold', 
        paddingTop: 70, 
        paddingHorizontal: 35, 
        color: '#203949'
    }, 

    textMultiline:{
        fontSize: 15,
        flexWrap: 'wrap',
        flexDirection: 'row', 
        paddingTop: 7, 
        paddingHorizontal: 35, 
        color: '#92A0A8'

    },
    containerTop:{
        width: 400, 
        height: 250, 
        backgroundColor: '#F5F7F9F5F7F9',
        alignItems: 'center', 
        justifyContent: 'center',
    }, 
    containerBottom:{
        width: 450, 
        height: 800, 
        backgroundColor: '#F5F7F9'
    }, 
    containerTextHeader:{
        width: 500,
        fontSize: 18,
        color: '#203949', 
        paddingHorizontal: 66,
        paddingTop: 100,
        justifyContent: 'center', 
        alignItems: 'center', 
        fontWeight: 'bold'
 
    },
    box:{
        width: 257, 
        height: 170, 
        marginHorizontal: 69,
        marginBottom: 15, 
        marginTop: 18, 
        backgroundColor: '#FFFFFF', 
        shadowColor: '#000', 
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2, 
        borderRadius: 10
    }, 

});

*/