import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Ionicons} from '@expo/vector-icons'; 
import ResellerSoldItems from "./ResellerSoldItems";
import MyCollectors from "./MyCollectors";
import CollectorCollection from "./CollectorCollection";

import {SafeAreaView, View, StyleSheet, Platform} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator()

export function ResellerTabNavigator() {
  return (
      <View style={styles.TabNavStyle}>
         
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
           <Tab.Screen name='ItemsSold' component={ResellerSoldItems} options={{headerTitle: 'Sold Items',title: 'Items Sold', tabBarIcon: ()=>(<Ionicons name="clipboard" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='MyCollector' component={MyCollectors} options={{headerTitle: 'My Collectors',title: 'My Collectors', tabBarIcon: ()=>(<Ionicons name="people" color='#fff' size={20}></Ionicons>)}}/>
           <Tab.Screen name='CollectorCollection' component={CollectorCollection} options={{headerTitle: 'Collector Collections',title: 'Collector Collections', tabBarIcon: ()=>(<Ionicons name="send" color='#fff' size={20}></Ionicons>)}}/>          
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