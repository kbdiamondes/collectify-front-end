import {SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, Pressable, Modal, Platform} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import CameraCapture from './Camera';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import axios from 'axios';
import { CheckScreenNavigationprop, RootStackParamList } from '../../../App';
import { Picker, PickerIOS } from '@react-native-picker/picker';
import {Ionicons} from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BASE_URL } from '../../../config';
import Toast from "react-native-toast-message";
import { AuthContext } from '../../Context/AuthContext';


export default function PaymentForm(){
    const nameProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.nameprop;

    const contractIdProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.paymentTransactionId;
    const photoProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.photo;
    
    const orderIdProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.orderId;
    const dueAmountProp = useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.dueAmount;

    const [itemName, setitemName] = useState('')
    const [itemPrice, setitemPrice] = useState<any>(dueAmountProp)
    const [requiredCollectible, setrequiredCollectible] = useState(dueAmountProp) 
    const [referenceNumber, setreferenceNumber] = useState(orderIdProp)
    const [paymentType, setpaymentType] = useState('')
    const [transactionProof, settransactionProof] = useState<any>(null)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isModalVisible2, setIsModalVisible2] = useState(false)
    const [selectedValue, setSelectedValue] = useState('');

    const [error, setError] = useState(false)
    const handleModal = () => setIsModalVisible(()=>!isModalVisible)
    
    const [fileName, setfileName] = useState('')

    const isPhotoExist = () => {setPhotoExist(()=>photoProp!='' ? true : false)}
    const [photoExist, setPhotoExist] = useState<boolean>(); 

    useEffect((
     )=>{console.log("\nOrder ID: " + orderIdProp + "\nFull Price: "+ dueAmountProp + "\nMode of Payment: " + selectedValue)  },[])


     const generateUniqueFilename = (fileExtension: string) => {
      const uniqueId = new Date().getTime(); // Use a timestamp as a unique identifier
      return `${uniqueId}.${fileExtension}`;
    };



    const confirmContract = () =>{
      handleSubmit()
    }

    const navigation  = useNavigation<CheckScreenNavigationprop>();

    const auth = useContext(AuthContext);
    const clientidProp = auth?.user?.entityId ?? 0;

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('amount', requiredCollectible);
        formData.append('base64Image', photoProp);
        formData.append('fileName', fileName);
        formData.append('contentType', 'image/png');
        //console.log(BASE_URL+`/paydues/client/${clientidProp}/contracts/${contractIdProp}/pay`)
        axios.post(BASE_URL+`/paydues/transaction/${contractIdProp}/pay`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Corrected header value
          }
        })
        .then(function (response) {
          
          console.log(photoProp);
          console.log(contractIdProp);
          console.log(requiredCollectible); 
          console.log(response);
          showSuccessToast(); 
          handleModal();
          setError(false); 
          navigation.goBack();
          navigation.goBack();
        })
        .catch(function (error) {
          showFailedToast();
          console.log(error);
          console.log(contractIdProp);
          console.log(clientidProp);
          setError(true); 
          handleModal();
         
        });
        
        console.log("Full Amount: " + dueAmountProp);
        console.log("Due Amount: " + dueAmountProp);
        console.log(photoProp);
      }
      
      

    return(
        <SafeAreaView>
            <Modal animationType="fade" transparent={true} visible={isModalVisible}>
                <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>

                    <View style={styles.modalView}>

                        <Ionicons name="help" color="grey" size={hp(12)}></Ionicons>
                        <Text style={{fontSize: hp(2.5)}}>Confirm Payment?</Text>
                        <Text style={{fontSize: hp(1.5), fontWeight: '300', flexWrap: 'wrap', marginTop: hp(1)}}>Make sure to confirm your payment details. </Text>
                        <View style={styles.modalButtonConfirmation}>
                            <Pressable onPressIn={confirmContract}>
                                <Text style={{fontSize: hp(1.7), fontWeight: 'bold', color: '#fff'}}>Confirm</Text>
                            </Pressable>
                        </View> 

                        <View style={styles.modalButtonCancel}>
                            <Pressable onPressIn={handleModal}>
                                <Text style={{fontSize: hp(1.7), fontWeight: 'bold', color: '#fff'}}>Cancel</Text>
                            </Pressable>
                        </View>           
                    </View>
                </View>
            </Modal>            
            <View style={styles.container}>
                <Text style={styles.textHeader} >Pay Dues</Text>
                <Text style={styles.textSubHeader} >Easily pay your outstanding dues online with our convenient and secure payment platform.</Text>
                <View>
                    
                    <Text style={styles.textLabel}>Item Name</Text>
                    <TextInput defaultValue={nameProp} style={styles.textInput}  editable={false} placeholder='Enter item name'></TextInput>
                    
                    <Text style={styles.textLabel}>Item Price</Text>
                    <TextInput defaultValue={itemPrice.toString()} editable={false} keyboardType={'numeric'} style={styles.textInput}></TextInput>
                    
                    <Text style={styles.textLabel}>Required Collectible</Text>
                    <TextInput defaultValue={requiredCollectible.toString()} editable={false} style={styles.textInput}></TextInput>
                    
                    <Text style={styles.textLabel}>Reference Number</Text>
                    <TextInput defaultValue = {referenceNumber ? referenceNumber : null} editable={false} style={styles.textInput}></TextInput>
                    
                    <Text style={styles.textLabel}>Type of Payment</Text>

                    {Platform.OS === 'ios' ? (
                      <View style={styles.textInput}>
                      <Pressable onPress={()=> (setIsModalVisible2(true))}>
                        <Text style={{textAlignVertical: 'center', alignItems: 'center', paddingTop: hp(1.2)}}>{selectedValue}</Text>
                        </Pressable>
                        <Modal                 
                          animationType="slide"
                          transparent={false}
                          visible={isModalVisible2}
                          onRequestClose={() => setIsModalVisible2(false)}
                        >
                          
                          <View style={{justifyContent: 'center', alignContent: 'center', marginHorizontal: hp(2), marginVertical: hp(25)}}>
                          <View>
                            <Text style={{textAlign: 'center', fontSize: hp(2),color: '#203949', fontWeight: 'bold', marginBottom: hp(2)}}> Select your mode of payment</Text>
                          </View>
                          <PickerIOS
                            selectedValue={selectedValue}
                            onValueChange={(itemValue:any) => {
                              setSelectedValue(itemValue);
                              setIsModalVisible2(false);
                            }}                        
                          >
                            <Picker.Item label='Bank' value={'Bank'}/> 
                            <Picker.Item label='Cash' value={'Cash'}/>
                            <Picker.Item label='Over the Counter' value={'Over the Counter'}/> 
                          </PickerIOS>
                          </View>
                        </Modal>

                      </View>

                    ) : (
                      <Picker mode='dropdown' style={styles.textInput} selectedValue={selectedValue}
                      onValueChange={(itemValue: any)=>{
                        setSelectedValue(itemValue);
                      }}>
                        <Picker.Item label='Bank' value={'Bank'}/> 
                        <Picker.Item label='Cash' value={'Cash'}/>
                        <Picker.Item label='Over the Counter' value={'Over the Counter'}/> 
                      </Picker>
                    )}  


                    {photoExist?(
                      <View style={styles.buttonUnfilled}>
                        <View style={styles.button} >
                        <Text style={styles.buttonUnfilledLabel}>
                        <Ionicons name="image" color="#000000" size={15} style={{ marginRight: 5 }} />
                        {fileName}
                        </Text>
                      </View>
                 
                    </View>
                    ):(
                      <View style={styles.buttonUnfilled}>
                        <Pressable style={styles.button} onPressIn={()=>{
                          isPhotoExist();
                          setfileName(generateUniqueFilename('png'));
                          navigation.navigate('CameraShot',{nameprop:nameProp, paymentTransactionId: contractIdProp, priceprop: dueAmountProp})}}>
                          <Text style={styles.buttonUnfilledLabel}>
                              <Ionicons name="camera" color="#000000" size={15} margin={5} /> Take a Picture
                          </Text>
                        </Pressable>
                   
                      </View>
                    )}  

                    <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPressIn={handleModal}>
                        <Text style={styles.buttonLabel}>
                            Continue
                        </Text>
                        </Pressable>
                    </View>
                </View>
            </View>     
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    container:{
        marginTop: hp(1),
        paddingHorizontal: Platform.OS === 'ios' ? hp(3) : hp(3), 
        paddingTop: Platform.OS === 'ios' ? hp(1) : hp(5)
    }, 
    textHeader:{
        fontSize: hp(4),
        fontWeight: 'bold', 
        color: '#203949',        
    },
    textSubHeader:{
        fontSize: hp(2),
        color: '#203949',
        paddingVertical: hp(1),
    },
    textLabel:{
        paddingTop: 15,
        fontSize: 15,
        paddingHorizontal: 15,
        marginVertical: 5
    },
    textInput:{
        height: Platform.OS === 'ios' ? hp(5) : hp(5),
        paddingLeft: hp(3),
        marginBottom: Platform.OS === 'ios' ? hp(1) : hp(1.5), 
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
        width: wp(60),
        height: hp(5),
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
    }, 
    modalButtonCancel:{
      marginTop: hp(1), 
      backgroundColor: '#707070',
      width: wp(60),
      height: hp(5),
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
        borderStyle: 'dashed',
        borderColor: '#F0F2F4',
        height: Platform.OS === 'ios' ? hp(8) : hp(8), 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row', 
        backgroundColor: '#fff', 
    },
    buttonUnfilledLabel:{
      color: '#4A5B6B', 
  }, 

});
    

const showSuccessToast = () => {
  Toast.show({
    type: 'success',
    text1: 'Payment Successful!',
    visibilityTime: 4000, 
  });
}

const showFailedToast = () => {
  Toast.show({
    type: 'error',        
    text1: 'Payment Failed!',
    text2: 'Please check your payment details.',
    visibilityTime: 4000,
    position: 'bottom', 
  });
}




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