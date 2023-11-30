import {SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';

import React, { useContext, useState } from 'react';
import CollectionAssignment from './Lists/CollectionAssignmentLists';
import FollowUpAssignment from './Lists/FollowUpLists';
import PaymentAssuranceList from './Lists/PaymentAssuranceList';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DashboardHeader from '../DashboardHeader';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { CheckScreenNavigationprop } from '../../../App';
import {Ionicons} from '@expo/vector-icons'

const PaymentAssuranceData= [
    {
        personName:'John Doe', 
        responseStatus: 'Ignored'
    },
    {
        personName:'John Doe', 
        responseStatus: 'Ignored'
    },
    {
        personName:'John Doe', 
        responseStatus: 'Ignored'
    },
    {
        personName:'John Doe', 
        responseStatus: 'Ignored'
    },
    {
        personName:'John Doe', 
        responseStatus: 'Ignored'
    },
]


export default function PaymentAssurance(){
    const auth = useContext(AuthContext);
    const navigation = useNavigation <CheckScreenNavigationprop>();
    return(

        <View style={styles.container}>
            <View style={styles.header}>
            <Pressable onPress={()=>navigation.navigate('CollectorDashboard')}>
                <DashboardHeader username={auth?.user?.username ?? ''}/>
            </Pressable>
            </View>
            <View style={{alignItems:'center', justifyContent:'center', marginTop: hp(25), marginBottom: hp(25)}}>
                        
                        <Ionicons name="warning" size={hp(10)} color="#9F9F9F" />
                        <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#9F9F9F'}}>We are working on this feature.</Text>

                </View>  
               
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
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