import {SafeAreaView, View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import DuePaymentList from './Lists/CollectorCollectionList';

import React, { Key, useContext, useEffect, useState } from 'react';
import { IClient, RestAPI } from '../../Services/RestAPI';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CollectorCollectionList from './Lists/CollectorCollectionList';
import { BASE_URL } from '../../../config';
import { AuthContext } from '../../Context/AuthContext';

export default function CollectorCollection(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract] = RestAPI(); 

    const auth = useContext(AuthContext)

    useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: BASE_URL+"/contracts/unpaid/" + auth?.user.entityId
        })
    },[] )

    return (
        <View style={styles.container}>
          {loading ? (
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator style={{ margin: hp(25) }} size="large" />
            </View>
          ) : (
            <View style={styles.container}>
            <Text style={styles.textHeader}>Clients with Debt</Text>
            <FlatList
              data={contract} // Use contracts instead of client_user
              keyExtractor={(contract) => contract.contract_id.toString()} // Adjust keyExtractor
              renderItem={({ item: contract }) => (
                <CollectorCollectionList
                  key={contract.contract_id.toString()}
                  contract_id={contract.contract_id}
                  fullname={contract.username} // Use contract.username
                  requiredCollectible={contract.dueAmount}
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