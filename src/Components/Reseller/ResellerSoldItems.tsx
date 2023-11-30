import {SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';

import React, { useContext, useState } from 'react';
import ResellerSoldItemsList from './Lists/ResellerSoldItemsList';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DashboardHeader from '../DashboardHeader';
import { useNavigation } from '@react-navigation/native';
import { CheckScreenNavigationprop } from '../../../App';
import { AuthContext } from '../../Context/AuthContext';
import {Ionicons} from '@expo/vector-icons'

const soldItemsData= [
    {
        itemName: "iPhone 14 Pro Max",
        piecesLeft: 12
    }, 
    {
        itemName: "iPhone 14 Pro Max",
        piecesLeft: 12
    },
    {
        itemName: "iPhone 14 Pro Max",
        piecesLeft: 12
    },
    {
        itemName: "iPhone 14 Pro Max",
        piecesLeft: 12
    },
    {
        itemName: "iPhone 14 Pro Max",
        piecesLeft: 12
    },
    {
        itemName: "iPhone 14 Pro Max",
        piecesLeft: 12
    },

]


export default function ResellerSoldItems(){
    const navigation = useNavigation<CheckScreenNavigationprop>();

    const auth = useContext(AuthContext);
    return(


            <View style={styles.container}>
                <Pressable style={styles.header} onPress={() => navigation.navigate('ResellerDashboardTabNavigator')}>
                    <DashboardHeader username={auth?.user?.username ?? ''}/>
                </Pressable>

                <View style={{alignItems:'center', justifyContent:'center', marginTop: hp(25), marginBottom: hp(25)}}>
                        
                        <Ionicons name="warning" size={hp(10)} color="#9F9F9F" />
                        <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#9F9F9F'}}>We are working on this feature.</Text>

                </View>

            </View>        

    );
}

/*
                <Text style={styles.textHeader}>Active Listing</Text>
                {
                    soldItemsData.map((item, index)=>{
                        return <ResellerSoldItemsList key={index} itemName={item.itemName} piecesLeft={item.piecesLeft}/>
                    })
                } */

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        paddingTop: hp(2), 
        paddingHorizontal: hp(1.5),
        backgroundColor: '#F5F7F9', 
        height: hp(100)
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