import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import DuePaymentList from './Lists/DuePaymentList';

import React, { useEffect, useState } from 'react';

//import dueItems from '../../../JsonData/items.json'


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';
import { IClient, RestAPI } from '../../Services/RestAPI';
interface ResponseData{
    client_id: number;
    itemName:string;
    requiredCollectible:number;
    paymentStatus: boolean;
}

const staticData =  
[
{
        "client_id": 1,
        "itemName": "Bike",
        "requiredCollectible": 1000,
        "paymentStatus": false
  },
]

export default function DuePayments(){
    //const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user] = RestAPI(); 
   const [data, setData] = useState<ResponseData[]>([]);
    
    //GET
    
    useEffect(() => {
        axios.get('http://192.168.56.1:8080/client/duePayments')
        .then(function (response) {
          // handle success
          setData(response.data)
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
      },[]);

      /*
      useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: "http://192.168.56.1:8080/client/duePayments"
        })
         },[] )*/


    return(
            <ScrollView style={styles.container}>
                <Text style={styles.textHeader} >Upcoming Dues</Text>
                {
                staticData.map((item, index)=>{
                    return <DuePaymentList key={index} itemName={item.itemName} requiredCollectible={item.requiredCollectible}/>
                })
            }  
        </ScrollView>     

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
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
