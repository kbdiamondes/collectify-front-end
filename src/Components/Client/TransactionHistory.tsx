import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import React, { useEffect, useState } from 'react';
import TransactionHistoryList from './Lists/TransactionHistoryList';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';

interface ClientEntity{
    id: string
    username: string
    password: string
    fullName: string
    address: string
    email: string
  }

interface Transaction{
    client: ClientEntity
    transactionDate: string
    amountSent: number
  }  

export default function TransactionHistory(){

    const clientId=""

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(()=>{
        axios.get('/TransactionHistory/client/', {
            params: {
              clientId: clientId
            }
          })
          .then(function (response) {
            setTransactions(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
        },[])

    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader}>Transaction History</Text>
                {
                    transactions.map((item, index)=>{
                        return <TransactionHistoryList key={index} personName={item.client.fullName} itemCollectible={item.amountSent} transactionDate={item.transactionDate} />
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
    }
});
