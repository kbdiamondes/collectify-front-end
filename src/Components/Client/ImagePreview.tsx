import {SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert, Image} from 'react-native';
import React, { useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { CheckScreenNavigationprop } from "../../../App";
import {Ionicons} from '@expo/vector-icons'



export default function ImagePreview(){
  const nameProp = useRoute<RouteProp<RootStackParamList, 'ImageScreenPreview'>>().params.nameprop;
  const priceProp = useRoute<RouteProp<RootStackParamList, 'ImageScreenPreview'>>().params.priceprop;
  const contractIdProp = useRoute<RouteProp<RootStackParamList, 'ImageScreenPreview'>>().params.contractId;
  const clientIdProp = useRoute<RouteProp<RootStackParamList, 'ImageScreenPreview'>>().params.clientId;
  const imagePrev = useRoute<RouteProp<RootStackParamList, 'ImageScreenPreview'>>().params.imageprop;
  const orderIdProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.orderId;
  const dueAmountProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.dueAmount;

  console.log(imagePrev);
    const navigation = useNavigation <CheckScreenNavigationprop>();
    const nav=()=> { 
      
        navigation.navigate("PaymentForm",{nameprop:nameProp, priceprop:priceProp, contractId:contractIdProp,photo:imagePrev,clientId:clientIdProp, orderId: orderIdProp, dueAmount: dueAmountProp})
       console.log(imagePrev)
       console.log(contractIdProp)
       console.log(priceProp)
       console.log(dueAmountProp)
       console.log(orderIdProp)
       
    
    }
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={{ uri: `data:image/png;base64,${imagePrev}` }}
          style={styles.image}
          resizeMode="contain" // You can choose the resizeMode that fits your needs
        />
        <View style={image_preview.undoButtonContainer}>
          <TouchableOpacity style={image_preview.button} onPress={()=>(navigation.goBack(), navigation.goBack())}>
              <Ionicons name="arrow-undo-circle" color="#000000" size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={nav}>
              <Ionicons name="arrow-forward" color="#000000" size={25} />
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    alignItems: 'flex-end'
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const image_preview = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  undoButtonContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      padding: 20,
      alignItems: 'flex-start'
    },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    alignItems: 'flex-end'
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
