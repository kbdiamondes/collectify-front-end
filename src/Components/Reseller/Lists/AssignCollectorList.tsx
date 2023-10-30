import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent, Modal, Alert} from 'react-native'
import {Ionicons} from '@expo/vector-icons'; 
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { CheckScreenNavigationprop, RootStackParamList } from '../../../../App';
import { useContext, useState } from 'react';
import { RestAPI } from '../../../Services/RestAPI';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from '../../../Context/AuthContext';
import axios from 'axios';
import { BASE_URL } from '../../../../config';


type AssignCollectorProps = {
    collector_id:number, 
    collectorname: String; 
    collectoraddress: String; 
    //OnSend is a function that accepts a number parameter coming from the AssignCollectorList component being mapped
    onSend: (collectorId: number) => void;
}

export default function AssignCollectorList(props: AssignCollectorProps){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user] = RestAPI(); 

    const auth = useContext(AuthContext)
    const navigation = useNavigation<CheckScreenNavigationprop>(); 

    const [modalVisible, setModalVisible] = useState(false);
    //required for type checking of parameters and used for navigation & passing data
    //receiving end
    const selected_contractid = useRoute<RouteProp<RootStackParamList, 'AssignCollector'>>().params.otherParam1;
    const [contract_id, setClientID] = useState(selected_contractid);

    let reseller_id=auth?.user.entityId;

    //the function for the button that also uses the "Onsend" function to get the on clicked collector_id
    const assignCollectorSubmit = ()=> {
        //alert("Client ID: " + clientid + "\nPayment Dues: Php " + paymentDues);
        //props.onSend(props.collector_id);// -> disabled for static design
        //alert("Client ID: " + client_id + "\nCollector ID: " + props.collector_id); 

        
            
        // Construct the URL with the collectorId as a query parameter
        const url = BASE_URL + `/assigncollectors/${reseller_id}/contracts/${contract_id}/assign-collector?collectorId=${props.collector_id}`;
        
        const config = {
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
          },
        };
      
        axios
          .post(url, null, config) // You don't need a request body in this case
          .then((response) => {

            console.log(response.data);
            console.log("Connection success");
          })
          .catch((error) => {
            
            console.log(error.response.data.message);
          })
          .finally(() => {

          });
      
          console.log("Reseller ID: " + reseller_id);
          console.log( "Collector ID: " + props.collector_id);
          console.log("Contract ID: " + contract_id);

          if(!error){
            Alert.alert('Collector Assignment', 'Successful!', [
                {
                  text: 'Close',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
          }else{
            Alert.alert('Collector Assignment', 'Failed!', [
                {
                  text: 'Close',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
          }

    }

    

    return(

        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>    

                <View style={styles.itemText}>
                    <Text style={{color:'#363636', fontSize: hp(2.5), fontWeight: 'bold'}}>{props.collectorname}</Text>
                    <Text style={{color: '#92A0A8', fontSize: hp(1)}}>{props.collectoraddress}</Text>                                  
                </View>

                  <View style={styles.buttonContainer}>
                      <Pressable style={styles.button} onPress={assignCollectorSubmit}>
                          <Ionicons name="send" color='#000000' size={20}/>
                      </Pressable>
                  </View>
            </View>
        </SafeAreaView>


    ); 
}
const styles = StyleSheet.create({
    item:{
        flex:1, 
        backgroundColor: '#fff',
        padding: 20, 
        marginBottom: hp(2), 
        marginLeft: hp(1), 
        marginRight: hp(1), 
        borderRadius: 3, 
        borderColor: '#CED0D1', 
        borderWidth: 2
    },
    itemLeft:{
        flex:1, 
        flexDirection:'row',
        justifyContent: 'center',
        aligntItems: 'center', 
        flexWrap:'wrap'
    }, 
    itemText: {
      flex:5,  
      marginLeft: hp(1.5), 
      marginRight: hp(1.5), 
      justifyContent: 'center', 
      alignItems: 'flex-start', 
      textAlign: 'left'
    }, 
    buttonContainer: {
      flex:.8, 
      justifyContent: 'center'
    }, 
    button:{
      flex:1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'row'
    }
}); 


const styles2 = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });