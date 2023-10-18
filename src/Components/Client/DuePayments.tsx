import { SafeAreaView, View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import DuePaymentList from './Lists/DuePaymentList';

import React, { useEffect, useState } from 'react';

//import dueItems from '../../../JsonData/items.json'


import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { IClient, RestAPI } from '../../Services/RestAPI';
import { useNavigation } from '@react-navigation/native';
import { CheckScreenNavigationprop } from '../../../App';
interface ResponseData {
    client_id: number;
    itemName: string;
    requiredCollectible: number;
    paymentStatus: boolean;
}

export default function DuePayments() {
    const [sendRequest, assignCollector, loading, error, client_user, reseller_user, collector_user] = RestAPI();
    const [data, setData] = useState<ResponseData[]>([]);
    const navigation = useNavigation<CheckScreenNavigationprop>();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    //GET\
    useEffect(() => {
        setIsLoading(true)
        axios.get('http://192.168.56.1:8080/client/duePayments')
            .then(function (response) {
                // handle success
                setData(response.data)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                alert("Cannot connect to the server")
                navigation.navigate('Login')
            })
            .finally(function () {
                // always executed
            });
            setIsLoading(false) 
        }, []);

    /*
    useEffect(() => {
      sendRequest({ 
          method: 'GET', 
          url: "http://192.168.56.1:8080/client/duePayments"
      })
       },[] )*/


    return (
        <ScrollView style={styles.container}>
            {isLoading ? (
                <View>
                    <ActivityIndicator size="large" />
                </View>)
                 : (
                <View>
                    <Text style={styles.textHeader} >Upcoming Dues</Text>
                    {
                        data.map((item, index) => {
                            return <DuePaymentList key={index} itemName={item.itemName} requiredCollectible={item.requiredCollectible} />
                        })
                    }
                </View>
            )}
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: hp(2),
        paddingHorizontal: hp(1.5)
    },
    textHeader: {
        fontSize: hp(2),
        fontWeight: 'bold',
        color: '#9F9F9F',
        padding: hp(1.2)
    }
});
