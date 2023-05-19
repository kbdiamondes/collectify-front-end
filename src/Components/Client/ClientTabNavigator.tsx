import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DuePayments from "./DuePayments"
import {Ionicons} from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
        <Tab.Navigator>
           <Tab.Screen name='Due Payments' component={DuePayments} options={{headerShown: false, title: 'Payment Dues', tabBarActiveBackgroundColor:'#0A1C34', tabBarActiveTintColor: '#fff', tabBarIcon: ()=>(<Ionicons name="calendar" color='#fff' size={25}></Ionicons>)}}/>
        </Tab.Navigator>
   )
}