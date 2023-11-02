import {SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';

import React, { useContext, useState } from 'react';
import ResellerSoldItemsList from './Lists/ResellerSoldItemsList';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DashboardHeader from '../DashboardHeader';
import { useNavigation } from '@react-navigation/native';
import { CheckScreenNavigationprop } from '../../../App';
import { AuthContext } from '../../Context/AuthContext';

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

        <SafeAreaView>
            <ScrollView>
                
            <View style={styles.container}>
                <Pressable style={styles.header} onPress={() => navigation.navigate('ResellerDashboardTabNavigator')}>
                    <DashboardHeader username={auth?.user?.username ?? ''}/>
                </Pressable>
                <Text style={styles.textHeader}>Active Listing</Text>
                {
                    soldItemsData.map((item, index)=>{
                        return <ResellerSoldItemsList key={index} itemName={item.itemName} piecesLeft={item.piecesLeft}/>
                    })
                }
            </View>    
            </ScrollView>     
        </SafeAreaView>

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