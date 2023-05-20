import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DuePayments from "./DuePayments"
import {Ionicons} from '@expo/vector-icons'; 
import SchedulePayments from "./SchedulePayments";
import PaymentReminders from "./PaymentReminders";
import TransactionHistory from "./TransactionHistory";
import PaymentRecords from "./PaymentRecords";

const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
        <Tab.Navigator screenOptions={{headerShown:true, headerTitleAlign: 'center'}}>
           <Tab.Screen name='Due Payments' component={DuePayments} options={{title: 'Payment Dues',  tabBarInactiveBackgroundColor: '#0A1C34', tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="calendar" color='#fff' size={15}></Ionicons>)}}/>
           <Tab.Screen name='Scheduled Payments' component={SchedulePayments} options={{title: 'Payments', tabBarInactiveBackgroundColor: '#0A1C34',  tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="time" color='#fff' size={15}></Ionicons>)}}/>
           <Tab.Screen name='Payment Reminders' component={PaymentReminders} options={{title: 'Reminders', tabBarInactiveBackgroundColor: '#0A1C34',  tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="chatbubbles" color='#fff' size={15}></Ionicons>)}}/>
           <Tab.Screen name='Transaction History' component={TransactionHistory} options={{title: 'Transactions', tabBarInactiveBackgroundColor: '#0A1C34',  tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="list" color='#fff' size={15}></Ionicons>)}}/>
           <Tab.Screen name='Payment Records' component={PaymentRecords} options={{title: 'Records', tabBarAllowFontScaling: true, tabBarInactiveBackgroundColor: '#0A1C34',  tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="card" color='#fff' size={15}></Ionicons>)}}/>
        </Tab.Navigator>
   )
}