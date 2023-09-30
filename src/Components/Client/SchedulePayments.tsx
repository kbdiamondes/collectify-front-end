import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';


import React, { useState } from 'react';
import ScheduledPaymentsList from './Lists/ScheduledPaymentsList';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


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
