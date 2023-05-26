import {SafeAreaView, View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import DuePaymentList from './Lists/SendCollectorsList';

import React, { Key, useEffect, useState } from 'react';
import SendCollectorsList from './Lists/SendCollectorsList';
import { IClient, RestAPI } from '../../Services/RestAPI';

export default function SendCollectors(){
    const [sendRequest, loading, error,client_user, reseller_user, collector_user] = RestAPI(); 

    useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: "http://192.168.1.6:8080/client"
        })
    },[] )

    return(

        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.textHeader} >Assign Collectors</Text>
                <FlatList
                    data={client_user}
                    keyExtractor={(client: IClient) => client.client_id.toString()}
                    renderItem={({ item: client }) => (
                        <SendCollectorsList client_id={client.client_id} fullname={client.fullName}/>

                    )}
                />
            </View>       
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



/* WORKING
                <FlatList
                    data={client_user}
                    keyExtractor={(client: IClient) => client.client_id.toString()}
                    renderItem={({ item: client }) => (
                        <SendCollectorsList
                        client_id={client.client_id}
                        fullname={client.fullName}
                        />
                    )}
                />

*/
                /*
                {
                    client_user?.map((client:IClient)=>{
                        return <SendCollectorsList client_id={client.client_id} fullname={client.fullName}/>
                    })
                }
                */
/*
                {
                    indebtPerson.map((item, index)=>{
                        return <SendCollectorsList key={index} personName={item.personName} itemCollectible={item.itemCollectibles}/>
                    })
                }
*/