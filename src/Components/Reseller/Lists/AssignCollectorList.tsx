import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'
import {Ionicons} from '@expo/vector-icons'; 
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../../App';
import { useState } from 'react';
import { RestAPI } from '../../../Services/RestAPI';


type AssignCollectorProps = {
    collector_id:number, 
    collectorname: String; 
    collectoraddress: String; 
    //OnSend is a function that accepts a number parameter coming from the AssignCollectorList component being mapped
    onSend: (collectorId: number) => void;
}

export default function AssignCollectorList(props: AssignCollectorProps){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user] = RestAPI(); 

    //required for type checking of parameters and used for navigation & passing data
    //receiving end
    const selected_clientid = useRoute<RouteProp<RootStackParamList, 'AssignCollector'>>().params.otherParam1;
    const [client_id, setClientID] = useState(selected_clientid);
    let paymentDues = 2500;
    let reseller_id=1;

    //the function for the button that also uses the "Onsend" function to get the on clicked collector_id
    const assignCollectorSubmit = ()=> {
        //alert("Client ID: " + clientid + "\nPayment Dues: Php " + paymentDues);
        props.onSend(props.collector_id);
        alert("Client ID: " + client_id + "\nCollector ID: " + props.collector_id); 
        assignCollector({
            paymentDues: paymentDues,
            reseller: [{ reseller_id: reseller_id }],
            collector: [{ collector_id: props.collector_id }],
            client: [{ client_id: client_id }],

           
          });
          console.log("Payment Dues: " + paymentDues);
          console.log("Reseller ID: " + reseller_id);
          console.log( "Collector ID: " + props.collector_id);
          console.log("Client ID: " + client_id);
    }

    

    return(

        <View style={styles.item}>
            <View style={styles.itemLeft}>                    
                <View style={styles.itemText}>
                    <Text style={{color:'#363636', fontSize: 18}}>{props.collectorname}</Text>
                    <Text style={{color: '#92A0A8', fontSize: 12}}>{props.collectoraddress}</Text>                                  
                </View>
                <View style={styles.textRightContainer}>
                    <View style={styles.textRightContainer}>
                        <Pressable onPress={assignCollectorSubmit}>
                            <Ionicons name="send" color='#000000' size={20}/>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>


    ); 
}
const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 21, 
        marginTop: 16,
        borderRadius: 3, 
        borderColor: '#CED0D1', 
        borderWidth: 2
    },
    itemLeft:{
        flexDirection:'row',
        aligntItems: 'center', 
        flexWrap:'wrap'
    }, 
    itemText: {
        maxWidth: '80%', 
    }, 
    textRightContainer: {
        width: 130, 
        height: 40,
        paddingLeft: 50, 
        justifyContent:'space-evenly',
        borderRadius: 5
    }, 
    textRight:{
        borderRadius: 10 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },
}); 