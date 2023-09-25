import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DuePayments from "./DuePayments"
import {Ionicons} from '@expo/vector-icons'; 
import SchedulePayments from "./SchedulePayments";
import PaymentReminders from "./PaymentReminders";
import TransactionHistory from "./TransactionHistory";
import PaymentRecords from "./PaymentRecords";


import {SafeAreaView, View, StyleSheet, Platform} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Tab = createBottomTabNavigator()

/*
tabBarOptions={{
style: {
backgroundColor: 'red',
borderTopLeftRadius: 25,
borderTopRightRadius: 25,
position: "absolute",
bottom: 0,
},
}}

*/
export function TabNavigator() {
  return (
      <View style={styles.TabNavStyle} >
        <Tab.Navigator screenOptions={{headerShown:true, 
            headerTitleAlign: 'center', 
            tabBarInactiveBackgroundColor: '#0A1C34',
            tabBarInactiveTintColor: '#A7ACB2',
            tabBarActiveTintColor: '#fff',
            tabBarStyle: {backgroundColor:'rgb(10,28,52)',
            flex:.065,
            borderTopLeftRadius: hp(2),
            borderTopRightRadius: hp(2), 
            borderLeftWidth:hp(.5), 
            borderRightWidth: hp(.5), 
            position: 'relative', 
            overflow: 'hidden'}}}>
           <Tab.Screen name='Due Payments' component={DuePayments} options={{  headerTitle: 'Payment Dues',title: 'Dues', tabBarIcon: (focus)=>(<Ionicons name="calendar" color='#fff'size={20}></Ionicons>)}}/>
           <Tab.Screen name='Scheduled Payments' component={SchedulePayments} options={{headerTitle: 'Scheduled Payment', title: 'Payments', tabBarIcon: (focus)=>(<Ionicons name="time" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='Payment Reminders' component={PaymentReminders} options={{headerTitle: 'Payment Reminders', title: 'Reminders', tabBarIcon: (focus)=>(<Ionicons name="chatbubbles" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='Transaction History' component={TransactionHistory} options={{headerTitle:'Transaction History', title: 'Transactions', tabBarIcon: (focus)=>(<Ionicons name="list" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='Payment Records' component={PaymentRecords} options={{headerTitle: 'Payment Records', title: 'Records', tabBarIcon: (focus)=>(<Ionicons name="card" color='#fff' size={20}></Ionicons>)}}/>
        </Tab.Navigator>
      </View>
   )
}

const styles = StyleSheet.create({
   TabNavStyle:{
      flex:1,
      justifyContent: Platform.OS === 'ios' ? 'space-between' : 'flex-end',
   },
});