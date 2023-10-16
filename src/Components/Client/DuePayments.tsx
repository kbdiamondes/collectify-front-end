import {SafeAreaView, View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import DuePaymentList from './Lists/DuePaymentList';

import React, { useEffect, useState } from 'react';

//import dueItems from '../../../JsonData/items.json'


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';
import { IClient, RestAPI } from '../../Services/RestAPI';
import CollectorCollectionList from '../Reseller/Lists/CollectorCollectionList';

interface ResponseData{
    client_id: number;
    itemName:string;
    requiredCollectible:number;
    paymentStatus: boolean;
    Contracts: Contracts[];
}
interface Contracts{
    contract_id: number;
    username: string;
    itemName: string;
    dueAmount: number;
    fullPrice: number;
    transactionProof: any;
    isPaid: Boolean;
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
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user] = RestAPI(); 
    const [data, setData] = useState<ResponseData[]>([]);

    //GET
    /*useEffect(() => {
        axios.get("http://collectify-kilvey-services.onrender.com/clients")
        .then(res => {
            setData(res.data)
            console.log(res.data)
        }).catch(err => console.log(err))
      },[]);
   /* useEffect(() => {
        axios.get("http://collectify-kilvey-services.onrender.com/clients")
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
*/
      useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: "https://collectify-backend-lzknxa3dha-uw.a.run.app/clients" 
        })
        console.log(client_user)
    },[] )
      /*
      useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: "http://192.168.56.1:8080/client/duePayments"
        })
         },[] )*/


    return(
            <View style={styles.container}>
                <Text style={styles.textHeader} >Upcoming Dues</Text>
                <FlatList
                    data={client_user}
                    keyExtractor={(client: IClient) => client.client_id.toString()}
                    renderItem={({ item: client }) => (
                        <React.Fragment>
                            {client.contracts.map((contract, index) => (
                                <DuePaymentList
                                key={index} itemName={contract.itemName} requiredCollectible={contract.dueAmount} fullPrice={contract.fullPrice} contractId={contract.contract_id} clientId={client.client_id} 
                               
                                                                                                             />
                            ))}
                            
                        </React.Fragment>
                    )}
                />
             </View>     

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
