    import {SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import React, { useContext, useState } from 'react';
import PaymentReminderList from './Lists/PaymentReminderList';

const scheduledReminders = [
    {
        collectorName: 'Collector',
        messageStatus: 'Unpaid'
    },
    {
        collectorName: 'Collector',
        messageStatus: 'Unpaid'
    },
    {
        collectorName: 'Collector',
        messageStatus: 'Unpaid'
    },
    
    
]

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DashboardHeader from '../DashboardHeader';
import { CheckScreenNavigationprop } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';

export default function PaymentReminders(){
    
    const navigation = useNavigation<CheckScreenNavigationprop>();
    const auth = useContext(AuthContext);

    return(

        <SafeAreaView>
            <Pressable style={styles.header} onPress={() => navigation.navigate('ClientTabNavigator')}>
                <DashboardHeader username={auth?.user?.username ?? ''}/>
            </Pressable>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader}>Recent Payment Reminders</Text>
                {
                    scheduledReminders.map((item, index)=>{
                        return <PaymentReminderList key={index} collectorName={item.collectorName} messageStatus={item.messageStatus}/>
                    })
                }
            </View>    
            </ScrollView>     
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        paddingTop: hp(2), 
        paddingHorizontal: hp(1.5)
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
        padding:hp(1.2)
    }
});