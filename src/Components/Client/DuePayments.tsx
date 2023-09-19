import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import DuePaymentList from './Lists/DuePaymentList';

import React, { useState } from 'react';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const dueItems = [
    {
        itemName: 'iPhone 14 Pro Max SX',
        itemCollectible: 2555
    }, 
    {
        itemName: 'iPhone 14 Pro Max SX',
        itemCollectible: 2555
    }, 
    {
        itemName: 'iPhone 14 Pro Max SX',
        itemCollectible: 2555
    }, 
    {
        itemName: 'iPhone 14 Pro Max SX',
        itemCollectible: 2555
    }, 
    {
        itemName: 'iPhone 14 Pro Max SX',
        itemCollectible: 2555
    }, 
        {
        itemName: 'iPhone 14 Pro Max SX',
        itemCollectible: 2555
    }, 
    {
        itemName: 'iPhone 14 Pro Max SX',
        itemCollectible: 2555
    }, 
    {
        itemName: 'iPhone 14 Pro Max SX',
        itemCollectible: 2555
    }, 
    {
        itemName: 'iPhone 14 Pro Max SX',
        itemCollectible: 2555
    }, 
    {
        itemName: 'iPhone 14 Pro Max SX',
        itemCollectible: 2555
    }, 
]


export default function DuePayments(){
    return(
            <ScrollView style={styles.container}>
                <Text style={styles.textHeader} >Upcoming Dues</Text>
                {
                dueItems.map((item, index)=>{
                    return <DuePaymentList key={index} itemName={item.itemName} itemCollectible={item.itemCollectible}/>
                })
            }  
        </ScrollView>     

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