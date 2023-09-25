import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Ionicons} from '@expo/vector-icons'; 
import Collection from "./CollectionAssignments";
import FollowUp from "./FollowUp";
import PaymentAssurance from "./PaymentAssurance";
import PaymentRecord from "./PaymentRecord";


const Tab = createBottomTabNavigator()

export function CollectorTabNavigator() {
  return (
        <Tab.Navigator screenOptions={{headerShown:true, headerTitleAlign: 'center'}}>
           <Tab.Screen name='Collector' component={Collection} options={{headerTitle: 'Collections Assigned',title: 'Collection Tasks',  tabBarInactiveBackgroundColor: '#0A1C34', tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="clipboard" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='Follow Up' component={FollowUp} options={{headerTitle: 'Follow Up',title: 'Follow Up',  tabBarInactiveBackgroundColor: '#0A1C34', tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="chatbox" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='Assurance' component={PaymentAssurance} options={{headerTitle: 'Payment Assurnace',title: 'Payment Assurance',  tabBarInactiveBackgroundColor: '#0A1C34', tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="shield-checkmark" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='Record' component={PaymentRecord} options={{headerTitle: 'Payment Record',title: 'Payment Record',  tabBarInactiveBackgroundColor: '#0A1C34', tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="card" color='#fff' size={20}></Ionicons>)}}/>
        </Tab.Navigator>
   )
}