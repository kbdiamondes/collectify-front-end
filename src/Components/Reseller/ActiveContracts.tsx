import {SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable, FlatList} from 'react-native';
import ActiveContractsList from './Lists/ActiveContractsList';

import React, { useEffect, useState } from 'react';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from "../../../App";
import { useNavigation } from '@react-navigation/native';
import { IClient, RestAPI } from '../../Services/RestAPI';
import { BASE_URL } from '../../../config';


/*
const  activeContractData = [
    {
        clientName: 'Marilyn Monroe', 
        itemName: 'iPhone 14 Pro Max', 
        requiredCollectible: 5600, 
        paymentType: "Installment" 
    }
]*/


export default function ActiveContractListScreen(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user] = RestAPI(); 



    useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: BASE_URL+"/clients"  //use /clients/unpaid-contracts when collect as collector works
        })

    },[] )
    
    return(

            <View style={styles.container}>
                <Text style={styles.textHeader} >Active Contracts</Text>
                <FlatList
                    data={client_user}
                    keyExtractor={(client: IClient) => client.client_id.toString()}
                    renderItem={({ item: client }) => (
                        <React.Fragment>
                            
                            {client.contracts.map((contract, index) => (
                                
                                    <ActiveContractsList key={index} contractId={contract.contract_id} clientName={client.fullName} itemName={contract.itemName} requiredCollectible={contract.dueAmount} paymentType="Installment"                                                                                  />
                                
                            ))}
                            
                        </React.Fragment>
                    )}
                />
                

            </View>    
   

    );
}

/*
                {
                    activeContractData.map((item, index)=>{
                        return <Pressable key={index} onPressIn={()=>nav(item.clientName)}>
                                    <ActiveContractsList key={index}  clientName={item.clientName} itemName={item.itemName} requiredCollectible={item.requiredCollectible} paymentType={item.paymentType}/>
                               </Pressable>
                    })
                }
*/
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
