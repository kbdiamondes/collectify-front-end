import {SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable, FlatList, ActivityIndicator} from 'react-native';
import ActiveContractsList from './Lists/ActiveContractsList';

import React, { useContext, useEffect, useState } from 'react';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from "../../../App";
import { useNavigation } from '@react-navigation/native';
import { IClient, RestAPI } from '../../Services/RestAPI';
import { BASE_URL } from '../../../config';
import { AuthContext } from '../../Context/AuthContext';
import DashboardHeader from '../DashboardHeader';
import {Ionicons} from '@expo/vector-icons';


export default function ActiveContractListScreen(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract, paymentTransaction] = RestAPI(); 
    const auth = useContext(AuthContext); 


    useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: BASE_URL+"/payment-transactions/reseller/uncollected-unassigned/" + auth?.user.entityId
        })
        console.log(auth?.user.entityId)

    },[auth] )

    const navigation = useNavigation<CheckScreenNavigationprop>();
    
    return(

            <View style={styles.container}>
                {loading?(
                    <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator style={{margin: hp(25)}}size="large" />
                    </View>
                ): error?(
                    <Text>{error}</Text>
                ):contract? (
                    <View style={styles.container}>
                        <Pressable style={styles.header} onPress={() => navigation.navigate('ResellerDashboardTabNavigator')}>
                            <DashboardHeader username={auth?.user?.username ?? ''}/>
                        </Pressable>
                    <Text style={styles.textHeader} >Active Payment Transactions</Text>
                    
                    <FlatList
                        data={paymentTransaction} // Use paymenttransactions instead of transaction
                        keyExtractor={(item) => item.payment_transactionid.toString()} // Adjust keyExtractor
                        renderItem={({ item }) => (
                            <ActiveContractsList 
                            key={item.payment_transactionid.toString()} 
                            contractId={item.payment_transactionid} 
                            clientName={item.clientName} // Use username from contracts
                            itemName={item.itemName} // Use itemName from contracts
                            requiredCollectible={item.amountdue} // Use amountdue from transaction
                            paymentType={(item.installmentNumber === null || item.installmentNumber === 0) ? "Full" : "Installment"}
                            />                    
                        )}
                    />
                </View>
                ):(
                <View style={styles.container}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Ionicons name="alert" size={hp(10)} color="#9F9F9F" style={{marginBottom: hp(5)}}/>
                        <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#9F9F9F'}}>No active contracts yet.</Text>
                    </View>
                 </View>
                )}
            </View>    
   

    );
}

                    /*
                    <FlatList
                        data={client_user}
                        keyExtractor={(client: IClient) => client.client_id.toString()}
                        renderItem={({ item: client }) => (
                            <React.Fragment>
                                
                                {client.contracts.map((contract, index) => (
                                    
                                        <ActiveContractsList key={index} 
                                        contractId={contract.contract_id} 
                                        clientName={client.fullName} 
                                        itemName={contract.itemName} requiredCollectible={contract.dueAmount} paymentType="Installment"/>
                                    
                                ))}
                                
                            </React.Fragment>
                        )}
                    />
                    */

/*
                {
                    activeContractData.map((item, index)=>{
                        return <Pressable key={index} onPressIn={()=>nav(item.clientName)}>
                                    <ActiveContractsList key={index}  clientName={item.clientName} itemName={item.itemName} requiredCollectible={item.requiredCollectible} paymentType={item.paymentType}/>
                               </Pressable>
                    })
                }
*/
const styles = StyleSheet.create({
    container:{
        flex:1, 
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
