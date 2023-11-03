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

export default function Collection(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract] = RestAPI(); 
    const auth = useContext(AuthContext); 
    
    const navigation = useNavigation <CheckScreenNavigationprop>();


    useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: BASE_URL+"/collection/" + auth?.user.entityId + "/assigned-uncollected-contracts"
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
                :(
                    <View style={styles.container}>
                    <View style={styles.header}>
                        <Pressable onPress={()=>navigation.navigate('CollectorDashboard')}>
                            <DashboardHeader username={auth?.user?.username ?? ''}/>
                        </Pressable>
                    </View>
                    <Text style={styles.textHeader} >Recent Tasks</Text>
                    
                    <FlatList
                        data={contract} // Use contracts instead of client_user
                        keyExtractor={(contract) => contract.contract_id.toString()} // Adjust keyExtractor
                        renderItem={({ item: contract }) => (
                            <CollectionAssignmentLists
                            key={contract.contract_id.toString()} 
                            contractId={contract.contract_id} 
                            clientName={contract.username} 
                            requiredCollectible={contract.dueAmount} 
                            collectionStatus={contract.paid}
                            />                    
                        )}
                    />
                </View>
                )}
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