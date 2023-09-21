import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import React, { useState } from 'react';
import ResellerSoldItemsList from './Lists/ResellerSoldItemsList';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
    

    return(

        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
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
        paddingHorizontal: hp(1.5)
    }, 
    textHeader:{
        fontSize: hp(2),
        fontWeight: 'bold', 
        color: '#9F9F9F',
        padding: hp(1.2)
    }
});