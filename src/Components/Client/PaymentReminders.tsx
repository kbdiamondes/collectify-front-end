import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import React, { useState } from 'react';
import PaymentReminderList from './Lists/PaymentReminderList';

const scheduledReminders = [
    {
        collectorName: 'Collector',
        messageStatus: 'Unpaid'
    },
    {
        collectorName: 'Collector',
        messageStatus: 'Unpaid'
    },
    {
        collectorName: 'Collector',
        messageStatus: 'Unpaid'
    },
    
    
]
export default function PaymentReminders(){
    

    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader}>Recent Payment Reminders</Text>
                {
                    scheduledReminders.map((item, index)=>{
                        return <PaymentReminderList key={index} collectorName={item.collectorName} messageStatus={item.messageStatus}/>
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