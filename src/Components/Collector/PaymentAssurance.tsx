import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import React, { useState } from 'react';
import CollectionAssignment from './Lists/CollectionAssignmentLists';
import FollowUpAssignment from './Lists/FollowUpLists';
import PaymentAssuranceList from './Lists/PaymentAssuranceList';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const PaymentAssuranceData= [
    {
        personName:'John Doe', 
        responseStatus: 'Ignored'
    },
    {
        personName:'John Doe', 
        responseStatus: 'Ignored'
    },
    {
        personName:'John Doe', 
        responseStatus: 'Ignored'
    },
    {
        personName:'John Doe', 
        responseStatus: 'Ignored'
    },
    {
        personName:'John Doe', 
        responseStatus: 'Ignored'
    },
]


export default function PaymentAssurance(){
    

    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader}>Current Assurance</Text>
                {
                    PaymentAssuranceData.map((item, index)=>{
                        return <PaymentAssuranceList key={index} personName={item.personName} responseStatus={item.responseStatus}/>
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