import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Ionicons} from '@expo/vector-icons'; 
import ResellerSoldItems from "./ResellerSoldItems";
import MyCollectors from "./MyCollectors";
import CollectorCollection from "./CollectorCollection";

import {SafeAreaView, View, StyleSheet, Platform, Button} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ActiveContracts from "./ActiveContracts";
import ActiveContractListScreen from "./ActiveContracts";



const Tab = createBottomTabNavigator()

const PlaceHolder = () => <View/>

export function ResellerTabNavigator() {
  return (
      <View style={styles.TabNavStyle}>
         
         <Tab.Navigator screenOptions={{headerShown:true, 
            headerTitleAlign: 'center', 
            tabBarInactiveBackgroundColor: '#0A1C34',
            tabBarInactiveTintColor: '#A7ACB2',
            tabBarActiveTintColor: '#fff',
            tabBarStyle: {backgroundColor:'rgb(10,28,52)',
            borderTopLeftRadius: hp(2),
            borderTopRightRadius: hp(2), 
            borderLeftWidth:hp(.5), 
            borderRightWidth: hp(.5), 
            position: 'relative', 
            overflow: 'hidden'}}}>
           <Tab.Screen name='ActiveContracts' component={ActiveContractListScreen} options={{headerTitle: 'Create Contracts',title: 'Create Contracts', tabBarIcon: ()=>(<Ionicons name="clipboard" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='ItemsSold' component={ResellerSoldItems} options={{headerTitle: 'Sold Items',title: 'Items Sold', tabBarIcon: ()=>(<Ionicons name="cart" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='CreateNewContract' component={PlaceHolder}
                      listeners={({navigation}) => 
                      ({tabPress: (e) => {
                         e.preventDefault(); 
                         navigation.push('CreateNewContractModal')}})}  
                         options={{title:'New Contract', 
                         tabBarIcon: ()=>(<Ionicons name="add-circle-sharp" color='#fff'  size={35}></Ionicons>)}}/>
           <Tab.Screen name='MyCollector' component={MyCollectors} options={{headerTitle: 'My Collectors',title: 'My Collectors', tabBarIcon: ()=>(<Ionicons name="people" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='CollectorCollection' component={CollectorCollection} options={{headerTitle: 'Collector Collections',title: 'Send Collectors', tabBarIcon: ()=>(<Ionicons name="send" color='#fff' size={20}></Ionicons>)}}/>          
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