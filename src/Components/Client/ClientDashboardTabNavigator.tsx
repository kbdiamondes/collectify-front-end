import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import DuePayments from "./DuePayments"
import {Ionicons} from '@expo/vector-icons'; 
import SchedulePayments from "./SchedulePayments";
import PaymentReminders from "./PaymentReminders";
import TransactionHistory from "./TransactionHistory";
import PaymentRecords from "./PaymentRecords";


import {SafeAreaView, View, StyleSheet, Platform} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ScheduleNewPaymentReminder from "./ScheduleNewPaymentReminder";
import ClientDashboard from "./ClientDashboard";


const Tab = createBottomTabNavigator()

export function ClientDashboardTabNavigator() {
  return (
      <View style={styles.TabNavStyle} >             
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
               height: 60,
            },
            tabBarShowLabel: false,
            headerShown: false,
         })}>
          <Tab.Screen
          name="Dues"
          component={DuePayments}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}>
                     <Ionicons
                        name='calendar'
                        size={Platform.OS === 'ios' ? 30 : 30}                     
                        color={focused ? '#7CB1EC' : '#fff'}
                     />
              </View>
            ),
          }}
        />
         <Tab.Screen
          name="Schedule"
          component={SchedulePayments}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}>
                     <Ionicons
                        name='time'
                        size={Platform.OS === 'ios' ? 30 : 30}                     
                        color={focused ? '#7CB1EC' : '#fff'}
                     />
              </View>
            ),
          }}
        />
        

         <Tab.Screen
            name="Create"
            component={ScheduleNewPaymentReminder}
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
          name="Transaction History"
          component={TransactionHistory}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}>
                     <Ionicons
                        name='list'
                        size={Platform.OS === 'ios' ? 30 : 30}                     
                        color={focused ? '#7CB1EC' : '#fff'}
                     />
              </View>
            ),
            title: 'Transaction History',
            headerTitle: 'Transaction History'
          }}
        />
         <Tab.Screen
          name="Payment Records"
          component={PaymentRecords}
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
      </View>

      

   )
}


const styles = StyleSheet.create({
   TabNavStyle:{
      flex:1,
      justifyContent: Platform.OS === 'ios' ? 'space-between' : 'flex-end',
   },
});

/*
         <Tab.Screen
          name="Dues"
          component={DuePayments}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}>
                     <Ionicons
                        name='calendar'
                        size={Platform.OS === 'ios' ? 30 : 30}                     
                        color={focused ? '#2C85E7' : '#fff'}
                     />
              </View>
            ),
          }}
        />
         <Tab.Screen
          name="Schedule"
          component={SchedulePayments}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}>
                     <Ionicons
                        name='time'
                        size={Platform.OS === 'ios' ? 30 : 30}                     
                        color={focused ? '#2C85E7' : '#fff'}
                     />
              </View>
            ),
          }}
        />





        =====


                 <Tab.Screen
          name="Transaction History"
          component={TransactionHistory}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}>
                     <Ionicons
                        name='list'
                        size={Platform.OS === 'ios' ? 30 : 30}                     
                        color={focused ? '#2C85E7' : '#fff'}
                     />
              </View>
            ),
            title: 'Transaction History',
            headerTitle: 'Transaction History'
          }}
        />
         <Tab.Screen
          name="Payment Records"
          component={PaymentRecords}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  top: Platform.OS === 'ios' ? 10 : 0,
                }}>
                     <Ionicons
                        name='card'
                        size={Platform.OS === 'ios' ? 30 : 30}                     
                        color={focused ? '#2C85E7' : '#fff'}
                     />
              </View>
            ),
          }}
        />
*/

         /*
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
           <Tab.Screen name='Payment Reminders' component={PaymentReminders} options={{headerTitle: 'Payment Reminders', title: 'Reminders',
            tabBarIcon: (focus)=>(
               <View
               style={{
                 top: Platform.OS === 'ios' ? -10 : -20,
                 width: Platform.OS === 'ios' ? 50 : 60,
                 height: Platform.OS === 'ios' ? 50 : 60,
                 borderRadius: Platform.OS === 'ios' ? 25 : 30,
                 backgroundColor: '#1562C7',
                 position: 'absolute',
                 bottom: 70
               }}>
                  <Ionicons name="chatbubbles" color='#fff' size={20}></Ionicons>
               </View>
            )}}/>
           <Tab.Screen name='Transaction History' component={TransactionHistory} options={{headerTitle:'Transaction History', title: 'Transactions', tabBarIcon: (focus)=>(<Ionicons name="list" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='Payment Records' component={PaymentRecords} options={{headerTitle: 'Payment Records', title: 'Records', tabBarIcon: (focus)=>(<Ionicons name="card" color='#fff' size={20}></Ionicons>)}}/>
        </Tab.Navigator>*/