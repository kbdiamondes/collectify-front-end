import {SafeAreaView, View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, FlatList} from 'react-native';


import React, { useContext, useEffect, useState } from 'react';
import ScheduledPaymentsList from './Lists/ScheduledPaymentsList';


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from '../../../App';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../Context/AuthContext';
import { RestAPI } from '../../Services/RestAPI';
import { BASE_URL } from '../../../config';
import {Ionicons} from '@expo/vector-icons';
import DashboardHeader from '../DashboardHeader';
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
                    <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                     <ActivityIndicator style={{margin: hp(25)}}size="large" />
                    </View>
                ) : error ? (
                    <Text>{error}</Text>
                ) : scheduledReminders.length > 0 ? (
                    <View style={styles.container}>
                        <Pressable style={styles.header} onPress={() => navigation.goBack()}>
                            <DashboardHeader username={auth?.user?.username ?? ''}/>
                        </Pressable>
                    <Text style={styles.textHeader}>Scheduled Reminders</Text>
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
                    </View>


                ) : (
                    <View style={styles.container}>
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name="alert" size={hp(10)} color="#9F9F9F" style={{marginBottom: hp(5)}}/>
                            <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#9F9F9F'}}>No Scheduled Reminders</Text>
                        </View>
                    </View>
                )}
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
    header:{
        justifyContent: 'flex-start',
        flexDirection: 'row', 
        height:hp(10), 
        marginTop: hp(3), 
    }, 
    square:{
        width: wp(10),  
        height: hp(5), 
        marginRight: hp(1.5),
        backgroundColor: '#92A0A8', 
        borderRadius: 25
    }, 
});
