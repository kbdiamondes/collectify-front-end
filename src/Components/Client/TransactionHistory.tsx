import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import React, { useState } from 'react';
import TransactionHistoryList from './Lists/TransactionHistoryList';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const recentTransaction= [
    {
        personName:'John Doe', 
        transactionDate:  'August 15, 2015',
        itemCollectible: 2500
    },
]


export default function TransactionHistory(){
    

    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader}>Transaction History</Text>
                {
                    recentTransaction.map((item, index)=>{
                        return <TransactionHistoryList key={index} personName={item.personName} itemCollectible={item.itemCollectible} transactionDate={item.transactionDate} />
                    })
                }
            </View>    
            </ScrollView>     
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
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