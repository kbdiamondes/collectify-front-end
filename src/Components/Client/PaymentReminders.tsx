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

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        flex:1, 
        paddingTop: hp(2), 
        paddingHorizontal: hp(1.5)
    }, 
    textHeader:{
        fontSize: hp(2),
        fontWeight: 'bold', 
        color: '#9F9F9F',
        padding:hp(1.2)
    }
});