import {SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';

import React, { useContext, useState } from 'react';
import PaymentRecordLists from './Lists/PaymentRecordList';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';
import DashboardHeader from '../DashboardHeader';


const recentPaymentRecords= [
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    {
        collectorName: 'John Doe', 
        transactionDate: 'August 15',
        recentMessage: 'Your recent transaction is ...'
    },
    
]


export default function PaymentRecords(){
    const navigation = useNavigation<CheckScreenNavigationprop>();
    const auth = useContext(AuthContext);

    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Pressable style={styles.header} onPress={() => navigation.goBack()}>
                    <DashboardHeader username={auth?.user?.username ?? ''}/>
                </Pressable>
                <Text style={styles.textHeader} >Recent Payment Records</Text>
                {
                    recentPaymentRecords.map((item, index)=>{
                        return <PaymentRecordLists key={index} collectorName={item.collectorName} transactionDate={item.transactionDate} recentMessage={item.recentMessage}/>
                    })
                }
            </View>    
            </ScrollView>     
        </SafeAreaView>

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