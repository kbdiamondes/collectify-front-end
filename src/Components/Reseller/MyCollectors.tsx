import {SafeAreaView, View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator} from 'react-native';


import React, { useContext, useEffect, useState } from 'react';
import ScheduledPaymentsList from './Lists/MyCollectorList';
import MyCollectorList from './Lists/MyCollectorList';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from '../../Context/AuthContext';
import { BASE_URL } from '../../../config';
import { RestAPI } from '../../Services/RestAPI';

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

/*
                {
                    assignedCollectors.map((item, index)=>{
                        return <MyCollectorList key={index} personName={item.personName} itemCollectible={item.itemCollectible} collectionStatus={item.collectionStatus}/>
                    })
                }
*/
export default function MyCollectors(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract] = RestAPI(); 
    const auth = useContext(AuthContext); 


    useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: BASE_URL+"/my-collectors/assigned/" + auth?.user.entityId
        })
        console.log(auth?.user.entityId)

    },[] )

    return(

        <View style={styles.container}>
            {loading? (
                <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator style={{margin: hp(25)}}size="large" />
                </View>
            )
            :(
                <View style={styles.container}>
                <Text style={styles.textHeader} >Assigned Collectors</Text>
                    <FlatList
                        data={collector_user} // Use contracts instead of client_user
                        keyExtractor={(contract) => contract.contract_id.toString()} // Adjust keyExtractor
                        renderItem={({ item: contract }) => (
                            <MyCollectorList
                            key={contract.contract_id.toString()} 
                            personName={contract.username} 
                            itemCollectible={contract.itemName} 
                            collectionStatus={contract.dueAmount}                             
                            />                    
                        )}
                    />
                </View>
                
                )}
        </View>
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