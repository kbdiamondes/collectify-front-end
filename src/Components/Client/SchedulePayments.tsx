import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';


import React, { useState } from 'react';
import ScheduledPaymentsList from './Lists/ScheduledPaymentsList';

const scheduledItems = [
    {
        itemName: 'iPhone 14 Pro Max SX',
        itemCollectible: 2555, 
        itemStatus: 'Unpaid',
        scheduledDate: 'January 16, 2023'
    },
    {
        itemName: 'iPhone 14 Pro Max SX',
        itemCollectible: 2555, 
        itemStatus: 'Unpaid',
        scheduledDate: 'January 16, 2023'
    },
]
export default function SchedulePayments(){
    

    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader} >Scheduled Payments</Text>
                {
                    scheduledItems.map((item, index)=>{
                        return <ScheduledPaymentsList key={index} itemName={item.itemName} itemCollectible={item.itemCollectible} paymentStatus={item.itemStatus} scheduledDate={item.scheduledDate}/>
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