import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import React, { useState } from 'react';
import CollectionAssignment from './Lists/CollectionAssignmentLists';
import FollowUpAssignment from './Lists/FollowUpLists';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        flex: 1,
        paddingTop: hp(1), 
        paddingHorizontal: hp(1.5)
    }, 
    textHeader:{
        fontSize: hp(2),
        fontWeight: 'bold', 
        color: '#9F9F9F',
        padding: hp(1.2)
    }
});