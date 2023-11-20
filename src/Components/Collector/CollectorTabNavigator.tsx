import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Ionicons} from '@expo/vector-icons'; 
import Collection from "./CollectionAssignments";
import FollowUp from "./FollowUp";
import PaymentAssurance from "./PaymentAssurance";
import PaymentRecord from "./PaymentRecord";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Platform, View } from "react-native";
import CollectAllPaymentForm from "./CollectAllPaymentForm";


const Tab = createBottomTabNavigator()
const PlaceHolder = () => <View/>
export function CollectorTabNavigator() {
  return (
         <Tab.Navigator
         screenOptions={({route}) => ({
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
               display: 'flex',
               position: 'absolute',
               bottom: 20,
               left: 10,
               right: 10,
               elevation: 5,
               backgroundColor: '#0A1C34',
               borderRadius: 30,
               height: 80,
            },
            tabBarShowLabel: false,
            headerShown: false,
         })}>
            <Tab.Screen
               name="Collection"
               component={Collection}
               options={{
                  tabBarIcon: ({focused}) => (
                  <View
                     style={{
                        top: Platform.OS === 'ios' ? 10 : 0,
                     }}>
                           <Ionicons
                              name='clipboard'
                              size={Platform.OS === 'ios' ? 30 : 30}                     
                              color={focused ? '#7CB1EC' : '#fff'}
                           />
                  </View>
                  ),
               }}
            />
            <Tab.Screen
               name="Follow Up"
               component={FollowUp}
               options={{
                  tabBarIcon: ({focused}) => (
                  <View
                     style={{
                        top: Platform.OS === 'ios' ? 10 : 0,
                     }}>
                           <Ionicons
                              name='chatbox'
                              size={Platform.OS === 'ios' ? 30 : 30}                     
                              color={focused ? '#7CB1EC' : '#fff'}
                           />
                  </View>
                  ),
               }}
            />

         <Tab.Screen
            name="CollectAllPaymentForm"
            component={CollectAllPaymentForm}
            options={{
               tabBarIcon: ({focused}) => (
               <View
                  style={{
                     top: Platform.OS === 'ios' ? hp(-1) : hp(-3),
                     width: Platform.OS === 'ios' ? wp(15) : wp(15),
                     height: Platform.OS === 'ios' ? hp(7) : hp(7),
                     borderRadius: Platform.OS === 'ios' ? hp(25): hp(25),
                     elevation: 0,
                     shadowColor: '#000',
                     shadowOpacity: 0.1,
                     shadowRadius: 20,
                     backgroundColor: '#2C85E7',
                     alignContent: 'center', 
                     justifyContent: 'center',
                  }}>
                  <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                     <Ionicons
                        name="add"
                        size={Platform.OS === 'ios' ? 30 : 30}                     
                        color={'#fff'}
                     />
                  </View>
               </View>
               ),
               tabBarIconStyle: {},
               tabBarStyle: {display:'none'}
            }}
         />

            <Tab.Screen
               name="Assurance"
               component={PaymentAssurance}
               options={{
                  tabBarIcon: ({focused}) => (
                  <View
                     style={{
                        top: Platform.OS === 'ios' ? 10 : 0,
                     }}>
                           <Ionicons
                              name='shield-checkmark'
                              size={Platform.OS === 'ios' ? 30 : 30}                     
                              color={focused ? '#7CB1EC' : '#fff'}
                           />
                  </View>
                  ),
               }}
            />

            <Tab.Screen
               name="Record"
               component={PaymentRecord}
               options={{
                  tabBarIcon: ({focused}) => (
                  <View
                     style={{
                        top: Platform.OS === 'ios' ? 10 : 0,
                     }}>
                           <Ionicons
                              name='card'
                              size={Platform.OS === 'ios' ? 30 : 30}                     
                              color={focused ? '#7CB1EC' : '#fff'}
                           />
                  </View>
                  ),
               }}
            />
        </Tab.Navigator>
   )
}

/*
           <Tab.Screen name='Collector' component={Collection} options={{headerTitle: 'Collections Assigned',title: 'Collection Tasks', tabBarIcon: ()=>(<Ionicons name="clipboard" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='Follow Up' component={FollowUp} options={{headerTitle: 'Follow Up',title: 'Follow Up',   tabBarIcon: ()=>(<Ionicons name="chatbox" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='Collect All' component={PlaceHolder}
                      listeners={({navigation}) => 
                      ({tabPress: (e) => {
                         e.preventDefault(); 
                         navigation.push('CollectAllPaymentForm')}})}  
                         options={{title:'Collect All', 
                         tabBarIcon: ()=>(<Ionicons name="add-circle-sharp" color='#fff'  size={35}></Ionicons>)}}/>
           <Tab.Screen name='Assurance' component={PaymentAssurance} options={{headerTitle: 'Payment Assurance',title: 'Payment Assurance',   tabBarIcon: ()=>(<Ionicons name="shield-checkmark" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='Record' component={PaymentRecord} options={{headerTitle: 'Payment Record',title: 'Payment Record',  tabBarIcon: ()=>(<Ionicons name="card" color='#fff' size={20}></Ionicons>)}}/>

           */