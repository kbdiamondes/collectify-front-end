import {SafeAreaView, View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator, Pressable} from 'react-native';


import React, { useContext, useEffect, useState } from 'react';
import ScheduledPaymentsList from './Lists/MyCollectorList';
import MyCollectorList from './Lists/MyCollectorList';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from '../../Context/AuthContext';
import { BASE_URL } from '../../../config';
import { ICollector, RestAPI } from '../../Services/RestAPI';
import axios from 'axios';
import DashboardHeader from '../DashboardHeader';
import { useNavigation } from '@react-navigation/native';
import { CheckScreenNavigationprop } from '../../../App';
import {Ionicons} from '@expo/vector-icons';

export default function MyCollectors(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract] = RestAPI(); 
    const auth = useContext(AuthContext); 

    const navigation = useNavigation<CheckScreenNavigationprop>();

    useEffect(() => {
        sendRequest({
          method: 'GET',
          url: BASE_URL + "/my-collectors/assigned/" + auth?.user.entityId,
        });
      }, [auth]);
    
      return (
        <View style={styles.container}>
          {loading ? (
            <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator style={{ margin: hp(25) }} size="large" />
            </View>
          ) : error?(
            <Text>{error}</Text>
          ) : collector_user? (
            <View style={styles.container}>
              <Pressable style={styles.header} onPress={() => navigation.navigate('ResellerDashboardTabNavigator')}>
                  <DashboardHeader username={auth?.user?.username ?? ''}/>
              </Pressable>
              <Text style={styles.textHeader}>Assigned Collectors</Text>
              {collector_user && Object.keys(collector_user).map((collectorUsername) => (
                <FlatList
                  key={collectorUsername}
                  data={collector_user[collectorUsername]}
                  keyExtractor={(item) => item.contract_id.toString()}
                  renderItem={({ item }) => (
                    <MyCollectorList
                      key={item.contract_id}
                      personName= {collectorUsername}
                      itemCollectible={item.dueAmount}
                      collectionStatus="Collection"
                    />
                  )}
                />
              ))}
            </View>
          ):(
            <View style={styles.container}>
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Ionicons name="alert" size={hp(10)} color="#9F9F9F" style={{marginBottom: hp(5)}}/>
                <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#9F9F9F'}}>No assigned collectors.</Text>
            </View>
         </View>
          )}
        </View>
      );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
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