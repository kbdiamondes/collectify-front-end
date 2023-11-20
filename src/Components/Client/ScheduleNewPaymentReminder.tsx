
import { Pressable, SafeAreaView, Text, TextInput, View, Button,StyleSheet, KeyboardAvoidingView, Modal, Platform} from "react-native";
import { CheckScreenNavigationprop } from "../../../App";
import { useNavigation } from "@react-navigation/native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Ionicons} from '@expo/vector-icons'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config";
import { AuthContext } from "../../Context/AuthContext";
//import {Picker, PickerIOS} from '@react-native-picker/picker';
import { Contract, PaymentTransaction } from "../../Services/RestAPI";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Toast from "react-native-toast-message";



export default function ScheduleNewPaymentReminder(){
    const navigation = useNavigation<CheckScreenNavigationprop>()

    const [reminderTitle, setReminderTitle] = useState<String>(""); 
    const [reminderDate, setReminderDate] = useState<String>(""); 
    const [dateReminderPreview, setDateReminderPreview] = useState<String>(""); 

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isModalVisible2, setIsModalVisible2] = useState(false)

    const auth = useContext(AuthContext);
    const handleModal = () => setIsModalVisible(()=>!isModalVisible)

    const [unpaidPaymentTransaction, setUnpaidPaymentTransaction] = useState<PaymentTransaction[]>([]);
    const [selectedPaymentTransaction, setSelectedPaymentTransaction] = useState<string>('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    

    useEffect(() => {
      const clientId = auth?.user.entityId; // Replace this with the actual client ID
      axios.get(BASE_URL+`/due-payments/client/${clientId}/unpaid-transactions`)
        .then((response) => {
          setUnpaidPaymentTransaction(response.data);
        })
        .catch((error) => {
          alert('Failed to fetch unpaid transactions');
          console.error(error);
        });
    }, []);


    //checks passed data from console
    const continueButton = () => {
        handleModal() //shows the modal
    }

    const confirmDate = () => {
        const clientId = auth?.user.entityId; // Replace with your actual client ID
        const formData = new FormData();
        formData.append('clientId', clientId.toString());
        formData.append('paymentTransactionId', selectedPaymentTransaction.toString());
        formData.append('reminderTitle', reminderTitle.toString());
        formData.append('reminderDateTime', reminderDate.toString());
        
        axios.post(BASE_URL + '/schedule-payment-reminder/set-reminder', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
          .then(response => {
            console.log('Response:', response);
            showSuccessToast()
            handleModal();
            navigation.goBack();
          })
          .catch(error => {
            showFailedToast(error)
            console.error(error);
          });
        
    }
    /*
    const confirmDate = () => {
        const clientId = auth?.user.entityId; // Replace with the actual client ID
        const contractId = selectedContract; // Assuming selectedContract holds the contract ID
      
        // Get the current formatted date
        const reminderDateTime = reminderDate; // Ensure reminderDate is formatted as YYYY-MM-DDTHH:mm:ss
      
        // Replace BASE_URL with the actual API URL
        axios.post(BASE_URL + '/schedule-payment-reminder/set-reminder', {
          clientId: clientId,
          contractId: contractId,
          reminderTitle: reminderTitle,
          reminderDateTime: reminderDateTime
        })
          .then(response => {
            // Handle the response here (e.g., show a success message)
            alert('Reminder set successfully');
            handleModal();
            navigation.goBack();
            navigation.goBack();
          })
          .catch(error => {
            // Handle any errors (e.g., show an error message)
            alert('Error setting reminder');
            console.error(error);
          });
      };
      */

    const cancelDate = () => {
        handleModal()
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date:any) => {
        //console.warn("A date has been picked: ", date);
        
        console.log(date)
        const formattedDate = date.toISOString();
        setReminderDate(formattedDate);
        setDateReminderPreview(date.toString());
        hideDatePicker();
      };

    return(
        
        <View style={styles.container}>

            <Modal animationType="fade" transparent={true} visible={isModalVisible}>
                <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>

                    <View style={styles.modalView}>

                        <Ionicons name="warning-sharp" color="grey" size={hp(12)}></Ionicons>
                        <Text style={{fontSize: hp(2.5)}}>Confirm Date</Text>
                        <Text style={{fontSize: hp(1.5), fontWeight: '300', flexWrap: 'wrap', padding: hp(1.2)}}>Get Reminded on {dateReminderPreview} </Text>
                        <View style={styles.modalButtonConfirmation}>
                            <Pressable onPressIn={confirmDate}>
                                <Text style={{fontSize: hp(1.5), fontWeight: 'bold', color: '#fff'}}>Confirm</Text>
                            </Pressable>
                        </View>         
                        <View style={styles.modalButtonCancel}>
                            <Pressable onPressIn={cancelDate}>
                                <Text style={{fontSize: hp(1.5), fontWeight: 'bold', color: '#fff'}}>Cancel</Text>
                            </Pressable>
                        </View>   
                    </View>
                </View>
            </Modal>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            <View style={styles.main}>
                <View style={styles.body}>
                <Pressable style={styles.goBackButton} onPressIn={navigation.goBack}>
                     <Ionicons name="arrow-back-outline" color='#000' size={hp(4.5)}/>
                </Pressable>
                <Text style={styles.textStyleHeader}>Set Reminders</Text>
                <Text style={styles.textStyleSubheader}>Never miss a payment again. Set reminders for upcoming payments with our easy-to-use feature and receive notifications straight to your mobile device. </Text>
                    <Text style={styles.textLabel}>Select Contract for your Reminder: </Text>
                    

                    
                    {Platform.OS === 'ios' ? (
                        <View style={styles.textInput}>
                            <Pressable onPress={()=>(setIsModalVisible2(true))}>
                                <Text style={{textAlignVertical: 'center', alignItems: 'center', paddingTop: hp(1.2)}}>{selectedPaymentTransaction}</Text>
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
                                {/*
                                    <PickerIOS
                                        selectedValue={selectedPaymentTransaction}
                                        onValueChange={(itemValue, itemIndex) =>
                                        {setSelectedPaymentTransaction(itemValue.toString())
                                        setIsModalVisible2(false)                            
                                        }}>
                                        {unpaidPaymentTransaction.map((paymenttransaction) => (
                                        <Picker.Item
                                            key={paymenttransaction.payment_transactionid}
                                            label={paymenttransaction.itemName.toString()}
                                            value={paymenttransaction.payment_transactionid.toString()}
                                        />
                                        
                                        ))}
                                    </PickerIOS>
                                     */}
                                    </View>
                                   
                                    </Modal>
                                        
                        </View>

                    )
                    :(
                        <View>{/*
                        <Picker
                            dropdownIconColor={'#2C85E7'}
                            selectedValue={selectedPaymentTransaction}
                            onValueChange={(itemValue, itemIndex) =>
                            setSelectedPaymentTransaction(itemValue)
                            }>
                            {unpaidPaymentTransaction.map((paymenttransaction) => (
                            <Picker.Item
                                key={paymenttransaction.payment_transactionid}
                                label={paymenttransaction.itemName.toString()}
                                value={paymenttransaction.payment_transactionid.toString()}
                            />
                            
                            ))}
                        </Picker>
                            */}
                        </View>
                    )}


                    

                    <Text style={styles.textLabel}>Set Reminder Name</Text>
                    <TextInput onChangeText={(name)=>setReminderTitle(name)} placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Enter your reminder title" ></TextInput>
                    <Text style={styles.textLabel}>Set Reminder Date</Text>
                    
                    <View style={styles.textBoxCalendar}>
                        <TextInput defaultValue={reminderDate.toString()} placeholderTextColor="#C2C6CC" placeholder="Set date" style={styles.input}> </TextInput>
                        
                        <Pressable onPressIn={showDatePicker}>
                            <View style={styles.calendarIcon}>
                                <Ionicons name="calendar" color="#c2c6cc" size={hp(4)} margin={5}/>
                            </View>
                        </Pressable>
                    </View>


                    <View style={styles.button}>
                        <Pressable onPressIn={continueButton}>
                            <Text style={styles.buttonLabel}>Continue</Text>
                        </Pressable>
                    </View>               
                </View>
            </View> 
            
        
        </View>
    ); 
}


const showSuccessToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Successfully scheduled payment reminder!',
      visibilityTime: 4000, 
    });
  }
  
  const showFailedToast = (error:any) => {
    Toast.show({
      type: 'error',        
      text1: 'Payment reminder setup failed!',
      text2: error,
      visibilityTime: 4000,
      position: 'bottom', 
    });
  }
const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },
    header:{
        flex: .7,
        height: hp(50), 
        marginLeft: hp(5), 
        marginRight: hp(5), 
        
    }, 
    main:{
        flex: 1.2,
        display: 'flex', 
        flexDirection: 'row', 
    }, 
    body:{
        flex: 1, 
        height: hp(50),
        paddingLeft: hp(5), 
        paddingRight: hp(5),
        marginTop: hp(10)
    }, 
    footer:{
        flex:0.3, 
        height: hp(50), 
        paddingLeft: hp(5)
    }, 
    textLabel:{
        color: '#9F9F9F',
        marginBottom: hp(1.5), 
        fontSize: 15,
    },
    textStyleSubheader:{
        paddingTop: hp(1), 
        paddingBottom: hp(2)
    },
    textStyleHeader:{
        fontSize: hp(5), 
        fontWeight: 'bold', 
    },
    textStyleSmallest:{
        fontSize: hp(1.5),
    },
    goBackButton:{
        marginBottom: hp(1), 
        marginTop: hp(1)
    }, 
    textInput:{
        height: Platform.OS === 'ios' ? hp(5) : hp(5),
        paddingLeft: hp(3),
        marginBottom: Platform.OS === 'ios' ? hp(1) : hp(1.5), 
        borderColor: '#F0F2F4', 
        borderWidth: 2,
        color:'#363636',

    },

    textSmallestContainer:{ 
        flex:1,
        marginTop: hp(2), 
        marginBottom: hp(1), 
        alignItems: 'center', 
        justifyContent: 'center', 


    },  
    textBoxStyle:{
        height: hp(7), 
        paddingLeft: hp(3),
        marginBottom: hp(1.5), 
        borderColor: '#F0F2F4', 
        borderWidth: 2,
        color:'#363636', 
        verticalAlign: 'middle'

    },
    textBoxPickerStyle:{
        height: hp(7), 
        marginBottom: hp(1.5), 
        borderColor: '#F0F2F4', 
        borderWidth: 2,
        color:'#363636', 

    },
    button:{
        marginTop: hp(5), 
        backgroundColor: '#2C85E7',
        height: hp(6.5),
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
    },
    modalButtonConfirmation:{
        marginTop: hp(2), 
        backgroundColor: '#C2C6CC',
        width: wp(50),
        height: hp(5),
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 60, 
    }, 
    modalButtonCancel:{
        marginTop: hp(1.5), 
        backgroundColor: '#2C85E7',
        width: wp(50),
        height: hp(5),
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 60, 
    }, 
    buttonLabel:{
        color: '#fff', 
        fontSize: hp(2)
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
        fontSize: hp(1.2)
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
    textBoxCalendar: {
        height: hp(7), 
        paddingLeft: hp(3),
        marginBottom: hp(1.5), 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#F0F2F4', 
        borderWidth: 2,
    },
    calendarIcon: {
        padding: hp(.5),
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#424242',
    },

});



/*
            <View style={styles.header}>    
                <Pressable onPressIn={navigation.goBack}>
                     <Ionicons name="arrow-back-outline" color='#000' size={hp(4.5)}/>
                </Pressable>
                <Text style={styles.textStyleHeader}>Monthly Installment</Text>
                <Text style={styles.textStyleSubheader}>Easily track and manage monthly installments with our user-friendly interface. </Text>
            </View>

*/