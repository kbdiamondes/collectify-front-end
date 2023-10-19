import {SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, Pressable, Modal, ToastAndroid} from 'react-native';
import React, { useEffect, useState } from 'react';
import CameraCapture from './Camera';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import axios from 'axios';
import { CheckScreenNavigationprop, RootStackParamList } from '../../../App';
import { Picker } from '@react-native-picker/picker';
import {Ionicons} from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BASE_URL } from '../../../config';

export default function PaymentForm(){
    const nameProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.nameprop;
    const priceProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.priceprop;
    const contractIdProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.contractId;
    const photoProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.photo;
    const clientidProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.clientId;
    const orderIdProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.orderId;
    const dueAmountProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.dueAmount;

    const [itemName, setitemName] = useState('')
    const [itemPrice, setitemPrice] = useState(priceProp)
    const [requiredCollectible, setrequiredCollectible] = useState(dueAmountProp) 
    const [referenceNumber, setreferenceNumber] = useState(orderIdProp)
    const [paymentType, setpaymentType] = useState('')
    const [transactionProof, settransactionProof] = useState<any>(null)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const [error, setError] = useState(false)
    const handleModal = () => setIsModalVisible(()=>!isModalVisible)
    
    useEffect((
     )=>{console.log("Client ID:" + clientidProp + "\nOrder ID: " + orderIdProp + "\nFull Price: "+ priceProp)  },[])


     const toastTransactionFailed = () => {
      ToastAndroid.showWithGravity(
        'Transaction Failed',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    };

    const confirmContract = () =>{
      handleSubmit()

      if(error===false){
        toastTransactionFailed()
        handleModal()
      }else{
        navigation.navigate('DuePayments')
        alert("Success")
        handleModal() 

      }
    }

    const navigation  = useNavigation<CheckScreenNavigationprop>();

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('amount', requiredCollectible);
        formData.append('base64Image', photoProp);
        formData.append('fileName', '3.png');
        formData.append('contentType', 'image/png');
        console.log(BASE_URL+`/paydues/client/${clientidProp}/contracts/${contractIdProp}/pay`)
        axios.post(BASE_URL+`/paydues/client/${clientidProp}/contracts/${contractIdProp}/pay`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Corrected header value
          }
        })
        .then(function (response) {
          console.log(priceProp);
          console.log(photoProp);
          console.log(contractIdProp);
          console.log(requiredCollectible); 
          console.log(response);
          setError(false); 
        })
        .catch(function (error) {
          console.log(error);
          console.log(contractIdProp);
          console.log(clientidProp);
          setError(true); 
         
        });
        
        console.log("Full Amount: " + priceProp);
        console.log("Due Amount: " + dueAmountProp);
        console.log(photoProp);
      }
      
      

    return(
        <SafeAreaView>
            <Modal animationType="slide" transparent={true} visible={isModalVisible}>
                <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>

                    <View style={styles.modalView}>

                        <Ionicons name="warning-sharp" color="grey" size={hp(12)}></Ionicons>
                        <Text style={{fontSize: hp(2.5)}}>Confirm Purchase?</Text>
                        <Text style={{fontSize: hp(1.2), fontWeight: '300', flexWrap: 'wrap', padding: hp(1.2)}}>Are you sure about this purchase?</Text>
                        <View style={styles.modalButtonConfirmation}>
                            <Pressable onPressIn={confirmContract}>
                                <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#fff'}}>Confirm</Text>
                            </Pressable>
                        </View>         
                    </View>
                </View>
            </Modal>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.textHeader} >Pay Dues</Text>
                <Text style={styles.textSubHeader} >Easily pay your outstanding dues online with our convenient and secure payment platform.</Text>
                <View>
                    
                    <Text style={styles.textLabel}>Item Name</Text>
                    <TextInput defaultValue={nameProp} style={styles.textInput}  placeholder='Enter item name'></TextInput>
                    
                    <Text style={styles.textLabel}>Item Price</Text>
                    <TextInput defaultValue={priceProp} editable={false} keyboardType={'numeric'} style={styles.textInput}></TextInput>
                    
                    <Text style={styles.textLabel}>Required Collectible</Text>
                    <TextInput defaultValue={dueAmountProp} editable={false} style={styles.textInput}></TextInput>
                    
                    <Text style={styles.textLabel}>Reference Number</Text>
                    <TextInput defaultValue = {referenceNumber} editable={false} style={styles.textInput}></TextInput>
                    
                    <Text style={styles.textLabel}>Type of Payment</Text>
                    <Picker mode='dropdown'style={styles.textInput} >
                            <Picker.Item label='Bank' value={'Bank'}/> 
                            <Picker.Item label='Cash' value={'Cash'}/> 
                            <Picker.Item label='Over the Counter' value={'Over the Counter'}/> 
                    </Picker>   

                    <View style={styles.buttonUnfilled}>
                        <Pressable style={styles.button} onPressIn={()=>navigation.navigate('CameraShot',{nameprop:nameProp, priceprop:priceProp, contractId:contractIdProp, clientId:clientidProp})}>
                        <Text style={styles.buttonUnfilledLabel}>
                            <Ionicons name="camera" color="#000000" size={15} margin={5} /> Take a Picture
                        </Text>
                        </Pressable>
                     
                    </View>
                    <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPressIn={handleModal}>
                        <Text style={styles.buttonLabel}>
                            Continue
                        </Text>
                        </Pressable>
                    </View>
                </View>
            </View>    
            </ScrollView>     
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    container:{
        marginTop: hp(1), 
        marginBottom: hp(1),
        paddingTop: 50, 
        paddingHorizontal: 21
    }, 
    textHeader:{
        fontSize: 32,
        fontWeight: 'bold', 
        color: '#203949',
        paddingHorizontal: 15,
        
    },
    textSubHeader:{
        fontSize: 18,
        color: '#203949',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
    },
    textLabel:{
        paddingTop: 15,
        fontSize: 15,
        paddingHorizontal: 15,
        marginVertical: 5
    },
    textInput:{
        height: 50, 
        paddingLeft: hp(3),
        marginBottom: hp(1.5), 
        borderColor: '#F0F2F4', 
        borderWidth: 2,
        color:'#363636',

    },
    buttonContainer: {
      marginTop: hp(2), 
      backgroundColor: '#2C85E7',
      height: hp(7),
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: 5, 
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
        fontSize: 12
    },
    d1:{
        height: 50,
        borderRadius: 5,
        width: '50%'
    },
    modalButtonConfirmation:{
        marginTop: hp(2), 
        backgroundColor: '#2C85E7',
        width: wp(35),
        height: hp(6.5),
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
    }, 
    modalView: {
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: hp(5),
        backgroundColor: 'white',
        borderRadius: 20,
        padding: hp(5),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    buttonUnfilled:{
        borderRadius: 5,
        borderWidth: 2, 
        borderColor: '#F0F2F4',
        height: hp(7), 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row', 
        backgroundColor: '#fff', 
        marginTop: '5%'
    },
    buttonUnfilledLabel:{
      color: '#4A5B6B', 
  }, 

});
    



/*
                    <View style={styles.buttonContainer}>

                    <Pressable onPress={()=>navigation.push('CameraCapture')}>
                        <Text style={styles.buttonLabel}>take picture</Text>
                    </Pressable>
                    </View>

*/

/*
                    <select
                      value={paymentType} onChange={(event) => setpaymentType(event.target.value)} defaultValue={'Select type of Payment'}
                      style={{ height: '35px', width: '120px', borderRadius: '8px', textAlign: 'center', backgroundColor: '#D9D9D9' }}
                    >
                      <option value="Cash">Cash</option>
                      <option value="Online Banking">Online Banking</option>
                      <option value="Over the Counter">Over the Counter</option>
                    </select>
                    

*/