import {SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import React, { useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { CheckScreenNavigationprop } from "../../../App";



export default function ImagePreview2(){
    const imagePrev = useRoute<RouteProp<RootStackParamList, 'ImageScreenPreview2'>>().params.imageprop;
    console.log(imagePrev);
    const navigation = useNavigation <CheckScreenNavigationprop>();
    const nav=()=> { 
        alert("Photo Added")
        navigation.goBack()
        navigation.goBack()
        
    
    }
    return(
      <SafeAreaView style={{flex:1, justifyContent:"center", alignItems:"center"}}>
       <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
      }}
    >
      <ImageBackground

        source={{uri: imagePrev && imagePrev.uri}}
        style={{
          flex: 1
        }}

        ><View
                style={{
                  flex: 1,
                  width: '100%',
                  backgroundColor: 'transparent',
                  flexDirection: 'row'
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    flex: 1,
                    width: '100%',
                    padding: 20,
                    justifyContent: 'space-between'
                  }}
                  >
                  <View
                    style={{
                      alignSelf: 'center',
                      flex: 1,
                      alignItems: 'center'
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        width: 70,
                        height: 30,
                        bottom: 0,
                        borderRadius: 5,
                        backgroundColor: '#fff'
                      }}
                      onPressIn={nav}></TouchableOpacity>
                  </View>
                </View>
              </View></ImageBackground>
      
    </View>
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

//<img id="myImage" src={imagePrev} alt="My Image"></img>