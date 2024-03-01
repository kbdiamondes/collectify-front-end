import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent, Modal, Alert} from 'react-native'
import {Ionicons} from '@expo/vector-icons'; 
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { CheckScreenNavigationprop, RootStackParamList } from '../../../../App';
import { useContext, useState } from 'react';
import { RestAPI } from '../../../Services/RestAPI';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from '../../../Context/AuthContext';
import axios from 'axios';
import React from 'react';


type CollectAllPaymentFormProps = { 
    clientname: String;
    requiredcollectible: number;
}

export default function CollectAllPaymentFormList(props: CollectAllPaymentFormProps){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user] = RestAPI(); 

    const auth = useContext(AuthContext)
    const navigation = useNavigation<CheckScreenNavigationprop>();    
    

    return(

        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>    

                <View style={styles.itemText}>
                    <Text style={{color:'#363636', fontSize: hp(2.5), fontWeight: 'bold'}}>{props.clientname}</Text>
                    <Text style={{color: '#92A0A8', fontSize: hp(1)}}>Required Collectible: {props.requiredcollectible}</Text>                                                                    
                </View>
                  
            </View>
        </SafeAreaView>


    ); 
}
const styles = StyleSheet.create({
    item:{
        flex:1, 
        backgroundColor: '#fff',
        padding: 5, 
        marginBottom: hp(2), 
        marginLeft: hp(1), 
        marginRight: hp(1), 
        borderRadius: 3, 
        borderColor: '#CED0D1', 
        borderWidth: 2
    },
    itemLeft:{
        flex:1, 
        flexDirection:'row',
        justifyContent: 'center',
        aligntItems: 'center', 
        flexWrap:'wrap'
    }, 
    itemText: {
      flex:5,  
      marginLeft: hp(1.5), 
      marginRight: hp(1.5), 
      justifyContent: 'center', 
      alignItems: 'flex-start', 
      textAlign: 'left'
    }, 
    buttonContainer: {
      flex:.8, 
      justifyContent: 'center'
    }, 
    button:{
      flex:1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'row'
    }
}); 


const styles2 = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });