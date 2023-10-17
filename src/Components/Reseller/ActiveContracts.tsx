import {SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import ActiveContractsList from './Lists/ActiveContractsList';

import React, { useState } from 'react';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from "../../../App";
import { useNavigation } from '@react-navigation/native';


const  activeContractData = [
    {
        clientName: 'Marilyn Monroe', 
        itemName: 'iPhone 14 Pro Max', 
        requiredCollectible: 5600, 
        paymentType: "Installment" 
    }
]


export default function ActiveContractListScreen(){
    const navigation = useNavigation <CheckScreenNavigationprop>();
    const nav =(clientName:string)=>{
        navigation.navigate('CollectPayments', {clientProp:clientName});
    }
    
    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader} >Active Contracts</Text>
                {
                    activeContractData.map((item, index)=>{
                        return <Pressable key={index} onPressIn={()=>nav(item.clientName)}>
                                    <ActiveContractsList key={index}  clientName={item.clientName} itemName={item.itemName} requiredCollectible={item.requiredCollectible} paymentType={item.paymentType}/>
                               </Pressable>
                    })
                }
            </View>    
            </ScrollView>     
        </SafeAreaView>

    );
}



const styles = StyleSheet.create({
    container:{
        flex:1, 
        paddingTop: hp(2), 
        paddingHorizontal: hp(1.5)
    }, 
    textHeader:{
        fontSize: hp(2),
        fontWeight: 'bold', 
        color: '#9F9F9F',
        padding: hp(1.2)
    }
});
