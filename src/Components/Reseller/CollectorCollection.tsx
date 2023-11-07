import {SafeAreaView, View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import DuePaymentList from './Lists/CollectorCollectionList';

import React, { Key, useEffect, useState } from 'react';
import { IClient, RestAPI } from '../../Services/RestAPI';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CollectorCollectionList from './Lists/CollectorCollectionList';

//remove when connecting to back-end
const indebtPerson = [
    {
        fullname: 'John Doe', 
        client_id: 1
    },
    {
        fullname: 'John Doe', 
        client_id: 1
    }
]

export default function CollectorCollection(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user] = RestAPI(); 

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        sendRequest({ 
            method: 'GET', 
            url: "http://192.168.1.6:8080/client"
        })
        setIsLoading(false)
    }, []);

    return(

        <ScrollView style={styles.container}>
                <Text style={styles.textHeader} >Client with Debt</Text>
                {
                    indebtPerson.map((item, index)=>{
                        return <CollectorCollectionList key={index} fullname={item.fullname} client_id={item.client_id}/>
                    })
                }    
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
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



/*
PRE-RESPONSIVE DESIGN

        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.textHeader} >Assign Collectors</Text>
                <FlatList
                    data={client_user}
                    keyExtractor={(client: IClient) => client.client_id.toString()}
                    renderItem={({ item: client }) => (
                        <SendCollectorsList client_id={client.client_id} fullname={client.fullName} />

                    )}
                />
            </View>       
        </SafeAreaView>


    */