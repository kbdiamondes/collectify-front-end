import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';


import React, { useState } from 'react';
import ScheduledPaymentsList from './Lists/MyCollectorList';
import MyCollectorList from './Lists/MyCollectorList';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        flex: 1,
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