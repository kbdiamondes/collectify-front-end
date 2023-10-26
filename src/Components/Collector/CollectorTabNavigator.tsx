import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Ionicons} from '@expo/vector-icons'; 
import Collection from "./CollectionAssignments";
import FollowUp from "./FollowUp";
import PaymentAssurance from "./PaymentAssurance";
import PaymentRecord from "./PaymentRecord";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View } from "react-native";


const Tab = createBottomTabNavigator()
const PlaceHolder = () => <View/>
export function CollectorTabNavigator() {
  return (
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
           <Tab.Screen name='Collector' component={Collection} options={{headerTitle: 'Collections Assigned',title: 'Collection Tasks', tabBarIcon: ()=>(<Ionicons name="clipboard" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='Follow Up' component={FollowUp} options={{headerTitle: 'Follow Up',title: 'Follow Up',   tabBarIcon: ()=>(<Ionicons name="chatbox" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='Collect All' component={PlaceHolder}
                      listeners={({navigation}) => 
                      ({tabPress: (e) => {
                         e.preventDefault(); 
                         navigation.push('CollectAllPaymentForm')}})}  
                         options={{title:'Collect All', 
                         tabBarIcon: ()=>(<Ionicons name="add-circle-sharp" color='#fff'  size={35}></Ionicons>)}}/>
           <Tab.Screen name='Assurance' component={PaymentAssurance} options={{headerTitle: 'Payment Assurnace',title: 'Payment Assurance',   tabBarIcon: ()=>(<Ionicons name="shield-checkmark" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='Record' component={PaymentRecord} options={{headerTitle: 'Payment Record',title: 'Payment Record',  tabBarIcon: ()=>(<Ionicons name="card" color='#fff' size={20}></Ionicons>)}}/>
        </Tab.Navigator>
   )
}