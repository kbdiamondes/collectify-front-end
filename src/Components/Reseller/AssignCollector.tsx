import { SafeAreaView,View,  StyleSheet, Text, ScrollView, Pressable, Button, FlatList } from "react-native";
import {Ionicons} from '@expo/vector-icons'; 
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { CheckScreenNavigationprop, RootStackParamList } from "../../../App";
import { Key, useEffect, useState } from "react";
import { ICollector, RestAPI } from "../../Services/RestAPI";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AssignCollectorList from "./Lists/AssignCollectorList";

/*
const availableCollectors = [
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 

]
*/
/*
interface RouteProps{
    route: {params: {otherParam:string}}; 
}

type AssignCollectorProps = NativeStackScreenProps<RootStackParamList, 'AssignCollector'>;
//type AssignCollectorProps = RouteProp<RootStackParamList, 'AssignCollector'>;

/*
type AssignCollectorProps = {
    route: RouteProp<RootStackParamList, 'AssignCollector'>
}*/







//naa ni siyay parameter dapat (client_id)
export default function AssignCollectorScreen(){

    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user] = RestAPI(); 
    useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: "http://192.168.1.6:8080/collector"
        })
    },[] )

    const navigation = useNavigation<CheckScreenNavigationprop>(); 
    
    //Function to receive the collector ID that is mapped on the Flatlist
    const handleSendButton = (collectorId: number) => {
        // Do something with the collector ID
        console.log('Clicked collector ID:', collectorId);
      };

      
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.header}>Assign Collector</Text>
                <Text style={styles.subheader} >Prioritize your deals by assigning collectors to borrowers whom you have lent to.</Text>

                

                <FlatList
                    style={{height: '56%', paddingVertical: 5, marginTop: 12, marginBottom: 17}}
                    data={client_user}
                    keyExtractor={(collector: ICollector) => collector.collector_id.toString()}
                    renderItem={({ item: collector}) => (
                        
                        <AssignCollectorList collector_id={collector.collector_id} collectorname={collector.fullName} collectoraddress={collector.address} onSend={handleSendButton}/>

                    )}
                />

                
                <Text style={styles.reminder}><Ionicons name="checkmark-circle" color='#8FC152' size={15}/>  Select only available collectors.</Text>
                <Text style={styles.reminder}><Ionicons name="checkmark-circle" color='#8FC152' size={15}/>  Make sure to assign collectors with relevant expertise to the task.</Text>
                <Text style={styles.reminder}><Ionicons name="close-circle" color='#97231E' size={15}/>   Please review before assigning a collector for this task.</Text>
                
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={()=>navigation.goBack()}>
                        <Text style={styles.buttonLabel}>Back</Text>
                    </Pressable>
                </View>    

            </View>
            
        </SafeAreaView>
        
    ); 

}




const styles = StyleSheet.create({
    container:{
        width: '100%', 
        height: '100%', 
        paddingVertical: 138, 
        paddingHorizontal: 26
    },
    header:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#203949'
    }, 
    subheader:{
        fontSize: 18, 
        color: '#707070', 
        flexWrap: 'wrap', 

    }, 
    reminder:{
        paddingHorizontal: 15, 
        flexWrap: 'wrap', 
        alignItems:'center'
    }, 
    buttonContainer:{ 
        height: 48, 
        backgroundColor: '#2C85E7',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        marginTop: 100
    }, 

    button:{
        borderRadius: 10 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },

    buttonLabel:{
        color: '#fff', 
        fontWeight: 'bold'
    },
})




/*
//<ScrollView alwaysBounceVertical={false} style={{height: '56%', paddingVertical: 5, marginTop: 12, marginBottom: 17}}>

                {
                    availableCollectors.map((item, index)=>{
                        return <AssignCollectorList key={index} collectorname={item.collectorname} collectoraddress={item.collectoraddress}/>; 
                    })
                }

                */