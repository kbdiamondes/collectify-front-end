import {SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, FlatList} from 'react-native';


import React, { useContext, useEffect, useState } from 'react';
import ScheduledPaymentsList from './Lists/ScheduledPaymentsList';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';
import { RestAPI } from '../../Services/RestAPI';
import { BASE_URL } from '../../../config';

// Define the interface for the scheduled reminders

export default function SchedulePayments(){
    const navigation = useNavigation<CheckScreenNavigationprop>();
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract, scheduledReminders] = RestAPI(); 
    const auth = useContext(AuthContext);

    useEffect(() => {
        if (auth?.user.entityId) {
            sendRequest({
                method: 'GET',
                url: BASE_URL + "/schedule-payment-reminder/client/" + auth?.user.entityId + "/reminders"
            });
        } else {
            alert("Error: Missing user entityId");
        }
    },[]);

    function formatDate(dateString:string): string {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
        return formattedDate;
    }
    
    return (
            <View style={styles.container}>
                {loading ? (
                    <View style={styles.container}>
                        <ActivityIndicator style={{ margin: hp(25) }} size="large" />
                    </View>
                ) : error ? (
                    <Text>{error}</Text>
                ) : scheduledReminders.length > 0 ? (
                    
                    <FlatList
                        data={scheduledReminders}
                        keyExtractor={(reminder) => reminder.id.toString()}
                        renderItem={({ item: reminder }) => {
                            console.log("Reminder from FlatList", reminder);
                            return (
                                <React.Fragment>
                                <ScheduledPaymentsList
                                    itemName={reminder.reminderTitle}
                                    itemCollectible={reminder.dueAmount}
                                    paymentStatus={reminder.paid? "Paid" : "Unpaid"}
                                    scheduledDate={formatDate(reminder.reminderDateTime)}
                                />
                                </React.Fragment>
                            );
                        }}
                        
                    />


                ) : (
                    <Text>No scheduled reminders available.</Text>
                )}
                    <View style={styles.footer}>
                        <Pressable onPress={() => navigation.navigate('ScheduleNewPaymentReminders')}>
                            <Text style={{ color: '#F7931E', fontSize: hp(2) }}>Schedule a Payment</Text>
                        </Pressable>
                    </View>
            </View>
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
    }, 
    footer:{ 
        marginRight: hp(2.5),
        marginBottom: hp(2.5),
        alignItems: 'flex-end', 
        justifyContent: 'flex-end'
    }
});
