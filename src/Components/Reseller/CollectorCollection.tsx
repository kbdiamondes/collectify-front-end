import {SafeAreaView, View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator, Pressable} from 'react-native';
import DuePaymentList from './Lists/CollectorCollectionList';

import React, { Key, useContext, useEffect, useState } from 'react';
import { IClient, RestAPI } from '../../Services/RestAPI';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CollectorCollectionList from './Lists/CollectorCollectionList';
import { BASE_URL } from '../../../config';
import { AuthContext } from '../../Context/AuthContext';
import DashboardHeader from '../DashboardHeader';
import { useNavigation } from '@react-navigation/native';
import { CheckScreenNavigationprop } from '../../../App';
import {Ionicons} from '@expo/vector-icons';

export default function CollectorCollection(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, transaction] = RestAPI(); 
    const navigation = useNavigation<CheckScreenNavigationprop>();
    const auth = useContext(AuthContext)

    useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: BASE_URL+"/payment-transactions/reseller/uncollected-unassigned/" + auth?.user.entityId
        })
    },[auth] )

    return (
        <View style={styles.container}>
          {loading ? (
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator style={{ margin: hp(25) }} size="large" />
            </View>
          ) : error? (
            <Text>{error}</Text> 
            ) : transaction && transaction.length>0? (
            <View style={styles.container}>
            <Pressable style={styles.header} onPress={() => navigation.navigate('ResellerDashboardTabNavigator')}>
                <DashboardHeader username={auth?.user?.username ?? ''}/>
            </Pressable>
            <Text style={styles.textHeader}>Clients with Debt</Text>
            <FlatList
              data={transaction} // Use contracts instead of client_user
              keyExtractor={(transaction) => transaction.payment_transactionid.toString()} // Adjust keyExtractor
              renderItem={({ item }) => (
                <CollectorCollectionList
                  key={item.payment_transactionid.toString()}
                  contract_id={item.payment_transactionid}
                  fullname={item.clientName} // Use contract.username
                  requiredCollectible={item.amountdue}
                />
              )}
            />
          </View>
            ):(
            <View style={styles.container}>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Ionicons name="alert" size={hp(10)} color="#9F9F9F" style={{marginBottom: hp(5)}}/>
                <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#9F9F9F'}}>No active transactions yet.</Text>
            </View>
            </View>
        
          )}
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
        paddingTop: hp(2), 
        paddingHorizontal: hp(1.5),
        backgroundColor: '#F5F7F9'
    }, 
    header:{
        justifyContent: 'flex-start',
        flexDirection: 'row', 
        height:hp(10), 
        marginTop: hp(3), 
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