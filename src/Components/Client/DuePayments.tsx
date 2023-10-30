import {SafeAreaView, View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator, Pressable} from 'react-native';
import DuePaymentList from './Lists/DuePaymentList';

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

export default function DuePayments(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract, scheduledReminders] = RestAPI(); 

    const [unpaidContracts, setUnpaidContracts] = useState();
    const navigation = useNavigation<CheckScreenNavigationprop>();
    const auth = useContext(AuthContext);
      useEffect(() => {
        if(auth?.user.entityId){
            sendRequest({ 
                method: 'GET', 
                url: BASE_URL + "/due-payments/client/"+ auth?.user.entityId+"/unpaid-contracts"
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
                ): error? (
                    <Text>{error}</Text>
                ):client_user?( 
                    <View style={styles.container}>
                        <Pressable style={styles.header} onPress={() => navigation.goBack()}>
                            <View style={styles.square}/>
                            <View style={{alignItems:'flex-start'}}>
                                <Text style={{ color:'#363636', fontSize:hp(1.5)}}>Hello {auth?.user.username}</Text>
                                <Text style={{color: '#92A0A8', fontSize: hp(2), fontWeight: 'bold'}}>Welcome Back!</Text>              
                            </View>
                        </Pressable>

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
                ):(
                    <View style={styles.container}>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Ionicons name="alert" size={hp(10)} color="#9F9F9F" style={{marginBottom: hp(5)}}/>
                        <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#9F9F9F'}}>No payments due yet.</Text>
                    </View>
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