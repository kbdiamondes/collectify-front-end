import {SafeAreaView, View, Text, StyleSheet, ScrollView} from 'react-native';
import DuePaymentList from './Lists/DuePaymentList';
import React, { useEffect, useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from 'axios';

interface ResponseData{
    client_id: number;
    itemName:string;
    requiredCollectible:number;
    paymentStatus: boolean;
}

export default function DuePayments(){
    
    const [data, setData] = useState<ResponseData[]>([]);
    
    //GET
    useEffect(() => {
        axios.get('localhost:8080/client/payDues')
        .then(function (response) {
          // handle success
          //setData(response)
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
      },[]);

    return(
            <ScrollView style={styles.container}>
                <Text style={styles.textHeader} >Upcoming Dues</Text>
                {
                data.map((item, index)=>{
                    return <DuePaymentList key={index} itemName={item.itemName} requiredCollectible={item.requiredCollectible}/>
                })
            }  
        </ScrollView>     

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
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