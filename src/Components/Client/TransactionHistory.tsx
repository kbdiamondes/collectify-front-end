import {SafeAreaView, View, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList, Pressable} from 'react-native';

import React, { useContext, useEffect, useState } from 'react';
import TransactionHistoryList from './Lists/TransactionHistoryList';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from '../../Context/AuthContext';
import { BASE_URL } from '../../../config';
import { RestAPI } from '../../Services/RestAPI';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CheckScreenNavigationprop } from '../../../App';

function formatDate(dateString:string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
}

export default function TransactionHistory(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract, scheduledReminders, transaction] = RestAPI(); 
    const auth = useContext(AuthContext);

    const navigation = useNavigation<CheckScreenNavigationprop>();  
    useEffect(() => {
        if (auth?.user.entityId) {
            sendRequest({
                method: 'GET',
                url: BASE_URL + "/transaction-history/client/" + auth?.user.entityId
            });
        } else {
            alert("Error: Missing user entityId");
        }
    },[]);

    return(

        <View style={styles.container}>
            {loading ? (
                <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator style={{margin: hp(25)}}size="large" />
                </View>
            ) : error ? (
                <Text>{error}</Text>
            ) : transaction && transaction.length> 0 ? (
                <View style={styles.container}>
                    <Pressable style={styles.header} onPress={() => navigation.goBack()}>
                        <View style={styles.square}/>
                            <View style={{alignItems:'flex-start'}}>
                                <Text style={{ color:'#363636', fontSize:hp(1.5)}}>Hello {auth?.user.username}</Text>
                                <Text style={{color: '#92A0A8', fontSize: hp(2), fontWeight: 'bold'}}>Welcome Back!</Text>              
                            </View>
                    </Pressable>
                <Text style={styles.textHeader}>Transaction History</Text>
                <FlatList
                  data={transaction}
                  keyExtractor={(item) => item.orderId}
                  renderItem={({ item }) => (
                    <TransactionHistoryList
                      orderId={item.orderId}
                      clientName={item.clientName}
                      paymentDate={formatDate(item.paymentDate)}
                      amountPaid={item.amountPaid}
                      productName={item.productName}
                    />
                  )}
                />
              </View>


            ) : (
                <View style={styles.container}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Ionicons name="alert" size={hp(10)} color="#9F9F9F" style={{marginBottom: hp(5)}}/>
                        <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#9F9F9F'}}>No transactions yet.</Text>
                    </View>
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
    },
    header:{
        justifyContent: 'flex-start',
        flexDirection: 'row', 
        height:hp(10), 
        marginTop: hp(3), 
    }, 
    square:{
        width: wp(10),  
        height: hp(5), 
        marginRight: hp(1.5),
        backgroundColor: '#92A0A8', 
        borderRadius: 25
    }, 
});