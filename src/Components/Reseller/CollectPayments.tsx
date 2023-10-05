import {SafeAreaView, View, Text, StyleSheet, ScrollView, TextInput, Pressable, Modal, Button} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { CheckScreenNavigationprop } from '../../../App';
import {Ionicons} from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function CollectPayments(){
    const [requiredCollectible, setrequiredCollectible] = useState(0)
    const [paymentType, setpaymentType] = useState('')
    const [transactionProof, settransactionProof] = useState<any>(null)
    const [selected, setselected] = useState (0)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleModal = () => setIsModalVisible(()=>!isModalVisible)

     //checks passed data from console
     const continueButton = () => {
        console.log(requiredCollectible);
        console.log(paymentType);
        console.log(transactionProof);
        handleModal() //shows the modal
    }

    const confirmContract = () =>{
        alert("Success")
        handleModal() //hides the modal
        //pass value here
    }

    const navigation  = useNavigation<CheckScreenNavigationprop>();

    const handleSubmit = ()=>{axios.put('/user', {
      })
      .then(function (response) {
        console.log(response);
        handleModal()
      })
      .catch(function (error) {
        console.log(error);
      });}

      const clickSubmit = ()=>{axios.post('/user', {
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });}

      const Submit = ()=> {
        clickSubmit()
        handleSubmit()
    }
   
    return(
//modal
        


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
                <Text style={styles.textHeader} >Collectible Details</Text>
                <Text style={styles.textSubHeader} >Enter the amount of required collectibles and take a picture of your proof of payment such as receipt & etc.</Text>
                <View>
                    <Text style={styles.textLabel}>Collectibles</Text>
                    <TextInput style={styles.textInput}  placeholder='Enter amount to be collected'></TextInput>
                    <Text style={styles.textLabel}>Type of Payment</Text>

                <View style={styles.buttonGrid}>

                <View style={selected==0? styles.containerSelected:styles.containerNotSelected}>
                <Pressable onPress={()=>setselected(0)} style={selected==0? styles.buttonSelected:styles.buttonnotSelected}>
                        <Text style={styles.buttonLabel}>
                           Cash
                        </Text>
                </Pressable>   
                </View>

                <View style={selected==1? styles.containerSelected:styles.containerNotSelected}>
                <Pressable onPress={()=>setselected(1)} style={selected==1? styles.buttonSelected:styles.buttonnotSelected}>
                        <Text style={styles.buttonLabel}>
                            Online Banking
                        </Text>
                </Pressable>   
                </View>
                
                <View style={selected==2? styles.containerSelected:styles.containerNotSelected}>
                <Pressable onPress={()=>setselected(2)} style={selected==2? styles.buttonSelected:styles.buttonnotSelected}>
                        <Text style={styles.buttonLabel}>
                            Over the Counter
                        </Text>
                </Pressable>   
                </View>
                </View>
                    
                  

                <Text style={styles.textLabel}>Transaction Proof</Text>
                    <View style={styles.cameraButton}>
                        <Pressable style={styles.button} onPressIn={()=>navigation.navigate('CameraShot2')}>
                        <Text style={styles.cameraLabel}>
                            Take picture
                        </Text>
                        </Pressable>
                     
                    </View>

                    <View style={styles.body2}>
                        <Text style={styles.messageStyle}><Ionicons name="checkmark-circle" color='#8FC152' size={15}/>  Must have the correct and valid collectibles.</Text>
                        <Text style={styles.messageStyle}><Ionicons name="checkmark-circle" color='#8FC152' size={15}/>  Check and review all details to verify integrity.</Text>
                        <Text style={styles.messageStyle}><Ionicons name="close-circle" color='#97231E' size={15}/>   Can’t be false or deceptive information.</Text>
                    </View>   

                    <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPressIn={handleSubmit}>
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
        paddingTop: 120, 
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
        fontSize: 17,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        marginVertical: 5,
        borderColor: "#523009",
        borderWidth: .5,

    },
    buttonContainer: {
        padding: 5,
        height: 50,
        backgroundColor:'#2C85E7',
        marginLeft: 10,
        justifyContent:'space-evenly',
        borderRadius: 5,
        width: '20%',
        alignSelf:'center',
        margin: 7
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
        height: 40,
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
      buttonGrid:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
      },
      buttonSelected:{
        borderRadius: 10 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
      },
      buttonnotSelected:{
        borderRadius: 10 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
      },
      containerSelected:{
        padding: 5,
        height: 50,
        backgroundColor:'#2C85E7',
        marginLeft: 10,
        justifyContent:'space-evenly',
        borderRadius: 5,
        width: '20%',
        alignSelf:'center',
        margin: 7
      },
      containerNotSelected:{
        padding: 5,
        height: 50,
        backgroundColor:'#9a9a9a',
        marginLeft: 10,
        justifyContent:'space-evenly',
        borderRadius: 5,
        width: '20%',
        alignSelf:'center',
        margin: 7
      },
      body2:{
        flex:1, 
        marginLeft: hp(1),
        marginRight: hp(1), 
        marginTop: hp(1)
    }, 
    messageStyle:{
        fontSize: hp(1.8), 
        marginBottom: hp(1)
    }, 
    cameraButton:{
        padding: 5,
        height: 50,
        marginLeft: 10,
        justifyContent:'space-evenly',
        borderRadius: 5,
        width: '80%',
        alignSelf:'center',
        margin: 7,
        color: '#cdcdcd',
        border: '2px #cdcdcd solid' 
        
    },
    cameraLabel:{
        color: '#232323', 
        fontSize: 12
    }
    

});