import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import DuePaymentList from './Lists/DuePaymentList';

import React, { useState } from 'react';

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

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader} >Upcoming Dues</Text>
                {
                    dueItems.map((item, index)=>{
                        return <DuePaymentList key={index} itemName={item.itemName} itemCollectible={item.itemCollectible}/>
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