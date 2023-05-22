import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import React, { useState } from 'react';
import CollectionAssignment from './Lists/CollectionAssignmentLists';

const recentTransaction= [
    {
        personName:'John Doe', 
        transactionDate:  'August 15, 2015',
        itemCollectible: 2500
    },
    {
        personName:'John Doe', 
        transactionDate:  'August 15, 2015',
        itemCollectible: 2500
    },
    {
        personName:'John Doe', 
        transactionDate:  'August 15, 2015',
        itemCollectible: 2500
    },
    {
        personName:'John Doe', 
        transactionDate:  'August 15, 2015',
        itemCollectible: 2500
    },
    {
        personName:'John Doe', 
        transactionDate:  'August 15, 2015',
        itemCollectible: 2500
    },
    {
        personName:'John Doe', 
        transactionDate:  'August 15, 2015',
        itemCollectible: 2500
    },
    {
        personName:'John Doe', 
        transactionDate:  'August 15, 2015',
        itemCollectible: 2500
    },
    {
        personName:'John Doe', 
        transactionDate:  'August 15, 2015',
        itemCollectible: 2500
    },
]


export default function Collection(){
    

    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader}>Recent Assignments</Text>
                {
                    recentTransaction.map((item, index)=>{
                        return <CollectionAssignment key={index} personName={item.personName} itemCollectible={item.itemCollectible} transactionDate={item.transactionDate}/>
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