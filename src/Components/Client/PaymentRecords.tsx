import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import React, { useState } from 'react';
import PaymentRecordLists from './Lists/PaymentRecordList';

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
        paddingTop: 31, 
        paddingHorizontal: 21
    }, 
    textHeader:{
        fontSize: 15,
        fontWeight: 'bold', 
        color: '#9F9F9F',
        paddingHorizontal: 23,
        marginBottom: 10
    }
});