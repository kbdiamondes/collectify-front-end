import {SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, FlatList, RefreshControl} from 'react-native';

import React, { useContext, useEffect, useState } from 'react';
import PaymentRecordLists from './Lists/PaymentRecordList';
import {Ionicons} from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';
import DashboardHeader from '../DashboardHeader';
import { RestAPI } from '../../Services/RestAPI';
import { BASE_URL } from '../../../config';


function formatDate(dateString:string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
}


export default function PaymentRecords(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract, scheduledReminders, paymentTransaction] = RestAPI(); 
    const navigation = useNavigation<CheckScreenNavigationprop>();
    const auth = useContext(AuthContext);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        sendRequest({
            method: 'GET', 
            url: BASE_URL + "/payment-records/clients/"+auth?.user.entityId + "/paid-and-collected-transactions" 
        });
        setTimeout(() => setRefreshing(false), 1000);
    }, [auth]); 

    useEffect(() => {
        onRefresh();
    },[onRefresh]);

    return(

        <View style={styles.container}>
            {loading ? (
                <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator style={{margin: hp(25)}}size="large" />
                </View>
            ) : error ? (
                <Text>{error}</Text>
            ) : paymentTransaction && paymentTransaction.length> 0 ? (
                <View style={styles.container}>
                    <Pressable style={styles.header} onPress={() => navigation.navigate('ClientTabNavigator')}>
                        <DashboardHeader username={auth?.user?.username ?? ''}/>
                    </Pressable>
                <Text style={styles.textHeader}>Payment Records</Text>
                <FlatList
                  data={paymentTransaction}
                  keyExtractor={(item) => item.payment_transactionid.toString()}
                  renderItem={({ item }) => (
                    <PaymentRecordLists
                      orderId={item.orderId}
                      clientName={item.clientName}
                      paymentStatus = {item.collected? "Collected" : "Uncollected"}
                      amountPaid={item.amountdue}
                      productName={item.itemName}
                      collectorName={item.collectorName}
                      resellerName={item.resellerName}
                    />
                  )}
                  refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                />
              </View>


            ) : (
                <View style={styles.container}>
                    <ScrollView style={{flex:1, alignContent: 'center', marginVertical: hp(30)}}               
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> } >                            
                                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                    <Ionicons name="alert" size={hp(10)} color="#9F9F9F" style={{marginBottom: hp(5)}}/>
                                    <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#9F9F9F'}}>No transactions yet.</Text>
                                </View>
                    </ScrollView>
                 </View>
            )}
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        paddingTop: hp(2), 
        paddingHorizontal: hp(1.5),
        backgroundColor: '#F5F7F9'
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