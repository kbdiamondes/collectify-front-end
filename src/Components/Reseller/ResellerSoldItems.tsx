import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';

import React, { useState } from 'react';
import ResellerSoldItemsList from './Lists/ResellerSoldItemsList';

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
        paddingTop: 31, 
        paddingHorizontal: 21
    }, 
    textHeader:{
        fontSize: 15,
        fontWeight: 'bold', 
        color: '#9F9F9F',
        paddingHorizontal: 23,
        marginBottom: 10
    }
});