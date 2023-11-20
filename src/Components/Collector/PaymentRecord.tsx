import {SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, FlatList} from 'react-native';

import React, { useContext, useEffect, useState } from 'react';
import PaymentAssuranceList from './Lists/PaymentAssuranceList';
import PaymentRecordList from './Lists/PaymentRecordList';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DashboardHeader from '../DashboardHeader';
import { AuthContext } from '../../Context/AuthContext';
import { CheckScreenNavigationprop } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { BASE_URL } from '../../../config';
import {Ionicons} from '@expo/vector-icons';
import { RestAPI } from '../../Services/RestAPI';



export default function PaymentRecord(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, paymentTransaction] = RestAPI(); 
    const auth = useContext(AuthContext); 


    useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: BASE_URL+"/collector-payment-records/" + auth?.user.entityId + "/collected-transactions"
        })
        console.log(auth?.user.entityId)

    },[] )
    const navigation = useNavigation <CheckScreenNavigationprop>();
    return(

        <View style={styles.container}>
            {loading?(
                <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator style={{margin: hp(25)}}size="large" />
                </View>
            ): error?(
                <Text>{error}</Text>
            ): paymentTransaction && paymentTransaction.length > 0? (
                <View style={styles.container}>
                <Pressable style={styles.header} onPress={() => navigation.navigate('CollectorDashboardTabNavigator')}>
                    <DashboardHeader username={auth?.user?.username ?? ''}/>
                </Pressable>
            <Text style={styles.textHeader} >Contract Records</Text>
            
            <FlatList
                data={paymentTransaction} // Use contracts instead of client_user
                keyExtractor={(item) => item.payment_transactionid.toString()} // Adjust keyExtractor
                renderItem={({ item}) => (
                    <PaymentRecordList 
                    key={item.payment_transactionid.toString()} 
                    contractId={item.payment_transactionid} 
                    clientName={item.clientName} 
                    requiredCollectible={item.amountdue} 
                    paymentType={item.installmentnumber > 0? "Installment" : "Full"}
                    collectionStatus={item.paid? "Collected" : "Not collected"}
                    />                    
                )}
            />
             </View>
            ):(
                <View style={styles.container}>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Ionicons name="alert" size={hp(10)} color="#9F9F9F" style={{marginBottom: hp(5)}}/>
                    <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#9F9F9F'}}>No collections yet.</Text>
                </View>
             </View>
            )}
        </View>      

    );
}

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