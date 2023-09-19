import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import React, { useState } from 'react';
import PaymentRecordLists from './Lists/PaymentRecordList';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const recentPaymentRecords= [
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    
]


export default function PaymentRecords(){
    

    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader} >Recent Payment Records</Text>
                {
                    recentPaymentRecords.map((item, index)=>{
                        return <PaymentRecordLists key={index} collectorName={item.collectorName} transactionDate={item.transactionDate} recentMessage={item.recentMessage}/>
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