import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Ionicons} from '@expo/vector-icons'; 
import ResellerSoldItems from "./ResellerSoldItems";
import MyCollectors from "./MyCollectors";
import CollectorCollection from "./CollectorCollection";

import {SafeAreaView, View, StyleSheet, Platform, Button} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ActiveContracts from "./ActiveContracts";
import ActiveContractListScreen from "./ActiveContracts";
import CreateNewContractScreen from "./CreateNewContract";



const Tab = createBottomTabNavigator()

const PlaceHolder = () => <View/>

export function ResellerTabNavigator() {
  return (
      <View style={styles.TabNavStyle}>
         
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
               name="ActiveContracts"
               component={ActiveContracts}
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
               name="ItemsSold"
               component={ResellerSoldItems}
               options={{
                  tabBarIcon: ({focused}) => (
                  <View
                     style={{
                        top: Platform.OS === 'ios' ? 10 : 0,
                     }}>
                           <Ionicons
                              name='cart'
                              size={Platform.OS === 'ios' ? 30 : 30}                     
                              color={focused ? '#7CB1EC' : '#fff'}
                           />
                  </View>
                  ),
               }}
            />
         <Tab.Screen
            name="Create"
            component={CreateNewContractScreen}
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
               name="MyCollectors"
               component={MyCollectors}
               options={{
                  tabBarIcon: ({focused}) => (
                  <View
                     style={{
                        top: Platform.OS === 'ios' ? 10 : 0,
                     }}>
                           <Ionicons
                              name='people'
                              size={Platform.OS === 'ios' ? 30 : 30}                     
                              color={focused ? '#7CB1EC' : '#fff'}
                           />
                  </View>
                  ),
               }}
            />
            <Tab.Screen
               name="CollectorCollection"
               component={CollectorCollection}
               options={{
                  tabBarIcon: ({focused}) => (
                  <View
                     style={{
                        top: Platform.OS === 'ios' ? 10 : 0,
                     }}>
                           <Ionicons
                              name='send'
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

/*
options={{title:'New Contract', tabBarIcon: ()=>(<Ionicons name="add-circle-sharp" color='#fff'  size={35}></Ionicons>)}}/>
   Bottom Navbar to open Modal code snippet

   Module Function: Opens a modal when pressing the bottom nav tab

   Tab.Screen name="CreateNewContract" component={PlaceHolder}  
           listeners={({navigation}) => 
            ({tabPress: (e) => {
               e.preventDefault(); 
               navigation.navigate('CreateNewContract')}})}  
               options={{title:'New Contract', 
               tabBarIcon: ()=>(<Ionicons name="add-circle-sharp" color='#fff'  size={35}></Ionicons>)}}/>

*/


const styles = StyleSheet.create({
   TabNavStyle:{
      flex:1,
      justifyContent: Platform.OS === 'ios' ? 'space-between' : 'flex-end',
   },
   mainButton:{
      position: 'absolute', 
      bottom: 2,

   }
});