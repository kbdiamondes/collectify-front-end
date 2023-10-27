import {SafeAreaView, View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator} from 'react-native';
import DuePaymentList from './Lists/DuePaymentList';

import React, { useContext, useEffect, useState } from 'react';

//import dueItems from '../../../JsonData/items.json'


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';
import { Contract, IClient, RestAPI } from '../../Services/RestAPI';
import CollectorCollectionList from '../Reseller/Lists/CollectorCollectionList';
import { BASE_URL } from '../../../config';
import { AuthContext } from '../../Context/AuthContext';


export default function DuePayments(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract] = RestAPI(); 

    const [unpaidContracts, setUnpaidContracts] = useState();

    const auth = useContext(AuthContext);
      useEffect(() => {
        if(auth?.user.entityId){
            sendRequest({ 
                method: 'GET', 
                url: BASE_URL + "/due-payments/client/"+ auth?.user.entityId+"/unpaid-contracts"
                //url: BASE_URL + "/clients/"
                //url: BASE_URL + "/clients/unpaid-contracts"
                //url: "http://192.168.1.16:8080/clients/client/"+ auth?.user.entityId+"/unpaid-contracts"
            })

            setUnpaidContracts(client_user.contracts)
            console.log(client_user)
        }else{
            alert("error")
        }

    },[auth] )


    return(
            <View style={styles.container}>
                {loading?(
                    <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator style={{margin: hp(25)}}size="large" />
                    </View>
                ):
                ( 
                    <View style={styles.container}>
                    <Text style={styles.textHeader}>Upcoming Dues</Text>
                    <FlatList
                    data={client_user.contracts}
                    keyExtractor={(contract) => contract.contract_id.toString()}
                    renderItem={({ item: contract }) => (
                        <DuePaymentList
                        key={contract.contract_id}
                        itemName={contract.itemName}
                        requiredCollectible={contract.dueAmount}
                        fullPrice={contract.fullPrice}
                        contractId={contract.contract_id}
                        clientId={client_user.client_id}
                        orderId={contract.orderid}
                        dueAmount={contract.dueAmount}
                        />
                    )}
                    />

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
        paddingHorizontal: hp(1.5)
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