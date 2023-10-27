import {SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable, FlatList, ActivityIndicator} from 'react-native';
import ActiveContractsList from './Lists/ActiveContractsList';

import React, { useContext, useEffect, useState } from 'react';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from "../../../App";
import { useNavigation } from '@react-navigation/native';
import { IClient, RestAPI } from '../../Services/RestAPI';
import { BASE_URL } from '../../../config';
import { AuthContext } from '../../Context/AuthContext';


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
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract] = RestAPI(); 
    const auth = useContext(AuthContext); 


    useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: BASE_URL+"/contracts/unpaid/" + auth?.user.entityId
        })
        console.log(auth?.user.entityId)

    },[] )

    const navigation = useNavigation<CheckScreenNavigationprop>();
    const toLogout = () => {
        auth?.logout;
        navigation.navigate('Login');
    }
    
    return(

            <View style={styles.container}>
                {loading?(
                    <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator style={{margin: hp(25)}}size="large" />
                    </View>
                )
                :(
                    <View style={styles.container}>
                    <Text style={styles.textHeader} >Active Contracts</Text>
                    
                    <FlatList
                        data={contract} // Use contracts instead of client_user
                        keyExtractor={(contract) => contract.contract_id.toString()} // Adjust keyExtractor
                        renderItem={({ item: contract }) => (
                            <ActiveContractsList 
                            key={contract.contract_id.toString()} 
                            contractId={contract.contract_id} 
                            clientName={contract.username} 
                            itemName={contract.itemName} 
                            requiredCollectible={contract.dueAmount} 
                            paymentType={contract.isMonthly? "Installment" : "Full"}
                            />                    
                        )}
                    />
                </View>
                )}
            </View>    
   

    );
}

                    /*
                    <FlatList
                        data={client_user}
                        keyExtractor={(client: IClient) => client.client_id.toString()}
                        renderItem={({ item: client }) => (
                            <React.Fragment>
                                
                                {client.contracts.map((contract, index) => (
                                    
                                        <ActiveContractsList key={index} 
                                        contractId={contract.contract_id} 
                                        clientName={client.fullName} 
                                        itemName={contract.itemName} requiredCollectible={contract.dueAmount} paymentType="Installment"/>
                                    
                                ))}
                                
                            </React.Fragment>
                        )}
                    />
                    */

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
