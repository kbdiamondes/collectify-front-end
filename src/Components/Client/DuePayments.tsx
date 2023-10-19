import {SafeAreaView, View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import DuePaymentList from './Lists/DuePaymentList';

import React, { useEffect, useState } from 'react';

//import dueItems from '../../../JsonData/items.json'


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';
import { IClient, RestAPI } from '../../Services/RestAPI';
import CollectorCollectionList from '../Reseller/Lists/CollectorCollectionList';


export default function DuePayments(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user] = RestAPI(); 


      useEffect(() => {
        
        sendRequest({ 
            method: 'GET', 
            url: "http://192.168.1.2:8080/clients" 
        })
        console.log(client_user)
    },[] )


    return(
            <View style={styles.container}>
                {loading?(
                    <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator style={{margin: hp(25)}}size="large" />
                    </View>
                ):
                ( 
                <View style={styles.container}>
                    <Text style={styles.textHeader} >Upcoming Dues</Text>
                    <FlatList
                        data={client_user}
                        keyExtractor={(client: IClient) => client.client_id.toString()}
                        renderItem={({ item: client }) => (
                            <React.Fragment>
                                {client.contracts.map((contract, index) => (
                                    <DuePaymentList
                                    key={index} itemName={contract.itemName} requiredCollectible={contract.dueAmount} fullPrice={contract.fullPrice} contractId={contract.contract_id} clientId={client.client_id} orderId={contract.orderid} dueAmount={contract.dueAmount}
                                   
                                                                                                                 />
                                ))}
                                
                            </React.Fragment>
                        )}
                    />
                </View>
                )

            }
             </View>     

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
