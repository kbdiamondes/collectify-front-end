import {SafeAreaView, View, Text, StyleSheet, ScrollView, ActivityIndicator, FlatList, Pressable} from 'react-native';

import React, { useContext, useEffect, useState } from 'react';
import CollectionAssignment from './Lists/CollectionAssignmentLists';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { CheckScreenNavigationprop } from '../../../App';
import { AuthContext } from '../../Context/AuthContext';
import { BASE_URL } from '../../../config';
import CollectionAssignmentLists from './Lists/CollectionAssignmentLists';
import { RestAPI } from '../../Services/RestAPI';
import DashboardHeader from '../DashboardHeader';
import {Ionicons} from '@expo/vector-icons'

export default function Collection(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, paymentTransaction] = RestAPI(); 
    const auth = useContext(AuthContext); 
    
    const navigation = useNavigation <CheckScreenNavigationprop>();


    useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: BASE_URL+"/collection/" + auth?.user.entityId + "/assigned-uncollected-transactions"
        })
        console.log(auth?.user.entityId)

    },[] )
    
    return(

        <View style={styles.container}>
                {loading?(
                    <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator style={{margin: hp(25)}}size="large" />
                    </View>
                )
                :paymentTransaction && paymentTransaction.length > 0 ?(
                    <View style={styles.container}>
                    <View style={styles.header}>
                        <Pressable onPress={()=>navigation.navigate('CollectorDashboard')}>
                            <DashboardHeader username={auth?.user?.username ?? ''}/>
                        </Pressable>
                    </View>
                    <Text style={styles.textHeader} >Recent Tasks</Text>
                    
                    <FlatList
                        data={paymentTransaction} // Use contracts instead of client_user
                        keyExtractor={(item) => item.payment_transactionid.toString()} // Adjust keyExtractor
                        renderItem={({ item }) => (
                            <CollectionAssignmentLists
                            key={item.payment_transactionid.toString()} 
                            paymentTransactionId={item.payment_transactionid} 
                            clientName={item.clientName} 
                            amountdue={item.amountdue} 
                            paymentStatus={item.paid}
                            />                    
                        )}
                    />
                </View>
                ):(
                    <View style={styles.container}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Ionicons name="alert" size={hp(10)} color="#9F9F9F" style={{marginBottom: hp(5)}}/>
                        <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#9F9F9F'}}>No assigned collections yet.</Text>
                    </View>
                 </View>
                )
                }
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