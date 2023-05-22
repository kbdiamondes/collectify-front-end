import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';


import React, { useState } from 'react';
import ScheduledPaymentsList from './Lists/MyCollectorList';
import MyCollectorList from './Lists/MyCollectorList';

const assignedCollectors = [
    {
        personName: 'John Doe', 
        itemCollectible: 2500, 
        collectionStatus: 'Collecting' 
    },
    {
        personName: 'John Doe', 
        itemCollectible: 2500, 
        collectionStatus: 'Collecting' 
    },
    {
        personName: 'John Doe', 
        itemCollectible: 2500, 
        collectionStatus: 'Collecting' 
    },
    {
        personName: 'John Doe', 
        itemCollectible: 2500, 
        collectionStatus: 'Collecting' 
    },
]
export default function MyCollectors(){
    

    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader} >Assigned Collectors</Text>
                {
                    assignedCollectors.map((item, index)=>{
                        return <MyCollectorList key={index} personName={item.personName} itemCollectible={item.itemCollectible} collectionStatus={item.collectionStatus}/>
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