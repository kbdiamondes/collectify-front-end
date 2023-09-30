import {SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';




export default function ImagePreview(){
   
       
    return(
      <SafeAreaView style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      
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