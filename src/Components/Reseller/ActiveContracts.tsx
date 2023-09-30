import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import ActiveContractsList from './Lists/ActiveContractsList';

import React, { useState } from 'react';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const activeContracts = [
    {
        clientName: 'Marilyn Monroe', 
        itemName: 'iPhone 14 Pro Max', 
        requiredCollectible: 5600, 
        paymentType: "Installment" 
    }
]


export default function ActiveContracts(){
    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader} >Scheduled Payments</Text>
                {
                    activeContracts.map((item, index)=>{
                        return <ActiveContractsList key={index} clientName={item.clientName} itemName={item.itemName} requiredCollectible={item.requiredCollectible} paymentType={item.paymentType}/>
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
