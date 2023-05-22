import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import DuePaymentList from './Lists/SendCollectorsList';

import React, { useState } from 'react';
import SendCollectorsList from './Lists/SendCollectorsList';

const indebtPerson = [
    {
        personName: 'Merilyn Monroe', 
        itemCollectibles: 2500
    },
    {
        personName: 'Merilyn Monroe', 
        itemCollectibles: 2500
    },
    {
        personName: 'Merilyn Monroe', 
        itemCollectibles: 2500
    },
    {
        personName: 'Merilyn Monroe', 
        itemCollectibles: 2500
    },
    {
        personName: 'Merilyn Monroe', 
        itemCollectibles: 2500
    },
    {
        personName: 'Merilyn Monroe', 
        itemCollectibles: 2500
    },
]


export default function SendCollectors(){
    

    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader} >Assign Collectors</Text>
                {
                    indebtPerson.map((item, index)=>{
                        return <SendCollectorsList key={index} personName={item.personName} itemCollectible={item.itemCollectibles}/>
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