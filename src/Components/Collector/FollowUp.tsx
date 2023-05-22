import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import React, { useState } from 'react';
import CollectionAssignment from './Lists/CollectionAssignmentLists';
import FollowUpAssignment from './Lists/FollowUpLists';

const recentTransaction= [
    {
        personName:'John Doe', 
        itemStatus: 'Unpaid'
    },
    {
        personName:'John Doe', 
        itemStatus: 'Unpaid'
    },
    {
        personName:'John Doe', 
        itemStatus: 'Unpaid'
    },
    {
        personName:'John Doe', 
        itemStatus: 'Unpaid'
    },
   
]


export default function FollowUp(){
    

    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader}>Recent Followup</Text>
                {
                    recentTransaction.map((item, index)=>{
                        return <FollowUpAssignment key={index} personName={item.personName} itemStatus={item.itemStatus}/>
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