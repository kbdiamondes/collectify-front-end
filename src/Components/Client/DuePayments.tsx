import {SafeAreaView, View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator, Pressable, RefreshControl} from 'react-native';
import DuePaymentList from './Lists/DuePaymentList';
import { isSameMonth, parseISO } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';

//import dueItems from '../../../JsonData/items.json'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';
import { Contract, IClient, RestAPI } from '../../Services/RestAPI';
import CollectorCollectionList from '../Reseller/Lists/CollectorCollectionList';
import { BASE_URL } from '../../../config';
import { AuthContext } from '../../Context/AuthContext';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CheckScreenNavigationprop } from '../../../App';
import DashboardHeader from '../DashboardHeader';

export default function DuePayments(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract, scheduledReminders, paymentTransaction] = RestAPI(); 

    const [unpaidContracts, setUnpaidContracts] = useState();
    const navigation = useNavigation<CheckScreenNavigationprop>();
    const auth = useContext(AuthContext);
    const [refreshing, setRefreshing] = React.useState(false);
    const [loadings, setLoading] = useState(false);



    const onRefresh = React.useCallback(() => {
       setRefreshing(true);
        sendRequest({ 
            method: 'GET', 
            url: BASE_URL + "/due-payments/client/"+ auth?.user.entityId+"/unpaid-transactions"
        });
        setTimeout(() => setRefreshing(false), 1000);
    }, [auth]);


    useEffect(() => {
        onRefresh(); },[onRefresh]);

    const filteredPaymentTransactions = paymentTransaction?.filter((item: {
            startingdate: string;  // Correct casing here
        }) => {
            const { startingdate} = item;  // Correct casing here
            // Check if startingDate and endDate are defined
            if (startingdate) {
                const startDate = parseISO(startingdate);
                const currentDate = new Date();
                return isSameMonth(startDate, currentDate);
            }
            return false; // or handle the case where startingdate or endDate is undefined
        });
        
    return(
            <View style={styles.container}>
                {loading?(
                    <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator style={{margin: hp(25)}}size="large" />
                    </View>
                ): error? (
                    <Text>{error}</Text>
                        ): paymentTransaction?( 
                            <View style={styles.container}>
                               <Pressable style={styles.header} onPress={() => navigation.navigate('ClientTabNavigator')}>
                                 <DashboardHeader username={auth?.user?.username ?? ''}/>
                                </Pressable>

                                <Text style={styles.textHeader}>Upcoming Dues</Text>
                                    <FlatList
                                        data={filteredPaymentTransactions}
                                        keyExtractor={(item) => item.payment_transactionid.toString()}
                                        renderItem={({ item }) => (
                                        <DuePaymentList
                                            payment_transactionid={item.payment_transactionid}
                                            orderid={item.orderid}
                                            itemName={item.itemName}
                                            amountdue={item.amountdue}
                                            startingDate={item.startingDate}
                                            endDate={item.endDate}
                                            installmentNumber={item.installmentNumber}
                                            isPaid={item.isPaid}
                                            isCollected={item.isCollected}
                                        />
                                    )}
                            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        />

                  </View>
                  
                ):(
                    <View style={styles.container}>
                        <ScrollView style={{flex:1, alignContent: 'center', marginVertical: hp(30)}}               
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> } >                                 
                                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                                    <Ionicons name="alert" size={hp(10)} color="#9F9F9F" style={{marginBottom: hp(5)}}/>
                                    <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#9F9F9F'}}>No payments due yet.</Text>
                                </View>
                        </ScrollView>
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
        paddingHorizontal: hp(1.5), 
        backgroundColor: '#F5F7F9'
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
    textHeader:{
        fontSize: hp(2),
        fontWeight: 'bold', 
        color: '#9F9F9F',
        padding: hp(1.2)
    }
});


/*
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
*/