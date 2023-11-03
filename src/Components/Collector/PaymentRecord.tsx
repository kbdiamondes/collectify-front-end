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
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract] = RestAPI(); 
    const auth = useContext(AuthContext); 


    useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: BASE_URL+"/collector-payment-records/collector/" + auth?.user.entityId
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
            ): contract?(
                <View style={styles.container}>
                <Pressable style={styles.header} onPress={() => navigation.navigate('ResellerDashboardTabNavigator')}>
                    <DashboardHeader username={auth?.user?.username ?? ''}/>
                </Pressable>
            <Text style={styles.textHeader} >Contract Records</Text>
            
            <FlatList
                data={contract} // Use contracts instead of client_user
                keyExtractor={(contract) => contract.contract_id.toString()} // Adjust keyExtractor
                renderItem={({ item: contract }) => (
                    <PaymentRecordList 
                    key={contract.contract_id.toString()} 
                    contractId={contract.contract_id} 
                    clientName={contract.username} 
                    itemName={contract.itemName} 
                    requiredCollectible={contract.dueAmount} 
                    paymentType={contract.isMonthly? "Installment" : "Full"}
                    paymentStatus={contract.paid? "Paid" : "Unpaid"}
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