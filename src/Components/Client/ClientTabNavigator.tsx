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
        <Tab.Navigator>
           <Tab.Screen name='Due Payments' component={DuePayments} options={{headerShown: false, title: 'Payment Dues',  tabBarInactiveBackgroundColor: '#0A1C34', tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="calendar" color='#fff' size={15}></Ionicons>)}}/>
           <Tab.Screen name='Scheduled Payments' component={SchedulePayments} options={{headerShown: false, title: 'Payments', tabBarInactiveBackgroundColor: '#0A1C34',  tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="time" color='#fff' size={15}></Ionicons>)}}/>
           <Tab.Screen name='Payment Reminders' component={PaymentReminders} options={{headerShown: false, title: 'Reminders', tabBarInactiveBackgroundColor: '#0A1C34',  tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="chatbubbles" color='#fff' size={15}></Ionicons>)}}/>
           <Tab.Screen name='Transaction History' component={TransactionHistory} options={{headerShown: false, title: 'Transactions', tabBarInactiveBackgroundColor: '#0A1C34',  tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="list" color='#fff' size={15}></Ionicons>)}}/>
           <Tab.Screen name='Payment Records' component={PaymentRecords} options={{headerShown: false, title: 'Records', tabBarAllowFontScaling: true, tabBarInactiveBackgroundColor: '#0A1C34',  tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="card" color='#fff' size={15}></Ionicons>)}}/>
        </Tab.Navigator>
   )
}