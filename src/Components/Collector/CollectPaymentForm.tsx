import {SafeAreaView, View, Text, StyleSheet, ScrollView, Image,  TextInput, Pressable, Modal, Button, Alert, TouchableOpacity} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import axios from 'axios';
import { CheckScreenNavigationprop, RootStackParamList } from '../../../App';
import {Ionicons} from '@expo/vector-icons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Camera } from 'expo-camera';
import { AuthContext } from '../../Context/AuthContext';
import { BASE_URL } from '../../../config';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';


export default function CollectPaymentForm() {
    const contractIdprop= useRoute<RouteProp<RootStackParamList, 'PaymentForm'>>().params.contractId;

    const [requiredCollectible, setrequiredCollectible] = useState()
    const [contractId, setContractId] = useState(contractIdprop)
    const [paymentType, setpaymentType] = useState("")
    const [transactionProof, settransactionProof] = useState<any>(null)
    const [selected, setselected] = useState (0)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [startCamera,setStartCamera] = useState(false)
    const handleModal = () => setIsModalVisible(()=>!isModalVisible)

    const [CapturedImage, setCapturedImage] = useState<any>(); 
    const [showImagePreview, setImagePreview] = useState(false); 

    const [error, setError] = useState(false)

    const auth = useContext(AuthContext); 

     //checks passed data from console
     const continueButton = () => {
        console.log(contractId)
        console.log(requiredCollectible);
        console.log(paymentType);
        console.log(CapturedImage);
        handleModal() //shows the modal
    }

    const confirmContract = () => {
        handleSubmit();
      
        alert("Success");
        handleModal();

      };
      

      const generateUniqueFilename = (fileExtension: string) => {
        const uniqueId = new Date().getTime(); // Use a timestamp as a unique identifier
        return `${uniqueId}.${fileExtension}`;
      };
  


      const handleSubmit = async () => {
        const formData = new FormData();

            // Generate a unique filename
        const fileExtension = 'png'; // Change this to the actual file extension
        const uniqueFilename = generateUniqueFilename(fileExtension);


       
        formData.append('base64Image', CapturedImage);
        formData.append('fileName', uniqueFilename);
        formData.append('contentType', 'image/png');
        formData.append('paymentType', paymentType);
        axios.post(BASE_URL+`/collector/collectPayment/${auth?.user.entityId}/contracts/${contractId}/collect-payment?paymentType=`+ paymentType, formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Corrected header value
          }
        })
        .then(function (response) {
          console.log(CapturedImage);
          console.log("Filename: " + uniqueFilename);
          console.log("Collectible:" + requiredCollectible); 
          console.log(response);
          setError(false); 
        })
        .catch(function (error) {
          console.log(error);
          setError(!error)
         
        });
        
        console.log("Due Amount: " + requiredCollectible);
        console.log(CapturedImage);
      }
      

    let camera: Camera | null; 

    const requestCameraPermissions = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status === 'granted') {
          // start the camera
          setStartCamera(true);
        } else {
          Alert.alert('Access denied');
        }
      };
  

      const __takePicture = async () => {
        if (!camera) return;
    
        const photo = await camera.takePictureAsync();
    
        const manipResult = await manipulateAsync(
          photo.uri,
          [],
          { compress: 0.5, format: SaveFormat.JPEG }
        );
    
        if (manipResult.uri) {
          // Fetch the manipulated image and convert it to a Blob
          const response = await fetch(manipResult.uri);
          const data = await response.blob();
    
          // Convert the Blob to a base64 string
          const reader = new FileReader();
          reader.onloadend = () => {
            if (reader.result !== null && typeof reader.result === 'string') {
              const base64Image = reader.result.split(',')[1]; // Remove the 'data:image/jpeg;base64,' part
    
              // Now you have the base64Image without the data URL prefix
              console.log(manipResult);
              setCapturedImage(base64Image);
  
              setImagePreview(true)
            }
          };
    
          reader.readAsDataURL(data);
        }
      };
  
      const goBack = () => {
          if(showImagePreview){
              setImagePreview(false)
              setStartCamera(false)
              console.log(CapturedImage)
          }
      }
  
      
      const setCashButton = () => {
        setselected(0) 
        setpaymentType("Cash")
      }
  
      const setOnlineBankingButton = () => {
        setselected(1) 
        setpaymentType("Online Banking")
      }
  
      const setOverTheCounterButton = () => {
        setselected(2) 
        setpaymentType("Over The Counter")
      }

    



    if(startCamera) {
    return(
          <SafeAreaView style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Modal animationType="slide" transparent={false} visible={showImagePreview}>
                <SafeAreaView style={image_preview.container}>
                <Image
                    source={{ uri: `data:image/png;base64,${CapturedImage}`}}
                    style={image_preview.image}
                    resizeMode="contain" // You can choose the resizeMode that fits your needs
                />
                <View style={image_preview.undoButtonContainer}>
                    <TouchableOpacity style={image_preview.button} onPress={()=>setImagePreview(false)}>
                        <Ionicons name="arrow-undo-circle" color="#000000" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={image_preview.buttonContainer}>
                    <TouchableOpacity style={image_preview.button} onPress={goBack}>
                        <Ionicons name="arrow-forward" color="#000000" size={25} />
                    </TouchableOpacity>
                </View>
                </SafeAreaView>
            </Modal>
                <Camera
                  style={{flex: 1, width: "100%"}}
                  ref={(r) => {
                    camera = r
                  }}
                  ratio='16:9'
                  focusable={true}
                >
                  <View
                    style={{
                      flex: 1,
                      width: '100%',
                      backgroundColor: 'transparent',
                      flexDirection: 'row'
                    }}
                  >
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        flexDirection: 'row',
                        flex: 1,
                        width: '100%',
                        padding: 20,
                        justifyContent: 'space-between'
                      }}
                      >
                      <View
                        style={{
                          alignSelf: 'center',
                          flex: 1,
                          alignItems: 'center'
                        }}
                      >
                        <TouchableOpacity
                          onPress={__takePicture}
                          style={{
                            width: 70,
                            height: 70,
                            bottom: 0,
                            borderRadius: 50,
                            backgroundColor: '#fff'
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </Camera>

          </SafeAreaView>
        );
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
                <Text style={styles.textHeader} >Collect Payment</Text>
                <Text style={styles.textSubHeader} >Enter the amount of required collectibles and take a picture of your proof of payment such as receipt & etc.</Text>
                
               
                <View>
                    <Text style={styles.textLabel}>Collectibles</Text>
                    <TextInput style={styles.textInput} editable={true} keyboardType="numeric" placeholder='Enter amount to be collected'></TextInput>
                    <Text style={styles.textLabel}>Type of Payment</Text>
                <View style={styles.buttonGrid}>

                    <View style={selected==0? styles.containerSelected:styles.containerNotSelected}>
                        <Pressable onPress={setCashButton} style={selected==0? styles.buttonSelected:styles.buttonnotSelected}>
                                <Text style={selected==0? styles.buttonLabel: styles.buttonNotSelectedLabel}>
                                    Cash
                                </Text>
                        </Pressable>   
                    </View>
                    
                    <View style={selected==1? styles.containerSelected:styles.containerNotSelected}>
                        <Pressable onPress={setOnlineBankingButton} style={selected==1? styles.buttonSelected:styles.buttonnotSelected}>
                            <Text style={selected==1? styles.buttonLabel: styles.buttonNotSelectedLabel}>
                                    Online Banking
                                </Text>
                        </Pressable>   
                    </View>
                    
                    <View style={selected==2? styles.containerSelected:styles.containerNotSelected}>
                        <Pressable onPress={setOverTheCounterButton} style={selected==2? styles.buttonSelected:styles.buttonnotSelected}>
                            <Text style={selected==2? styles.buttonLabel: styles.buttonNotSelectedLabel}>
                                    Over the Counter
                                </Text>
                        </Pressable>   
                    </View>
                </View>

                <Text style={styles.textLabel}>Transaction Proof</Text>
                <View style={styles.buttonUnfilled}>
                        <Pressable style={styles.button} onPress={requestCameraPermissions}>
                        <Text style={styles.buttonUnfilledLabel}>
                            <Ionicons name="camera" color="#000000" size={15} margin={5} /> Take a Picture
                        </Text>
                        </Pressable>
                     
                    </View>

                    <View style={styles.body2}>
                        <Text style={styles.messageStyle}><Ionicons name="checkmark-circle" color='#8FC152' size={15}/>  Must have the correct and valid collectibles.</Text>
                        <Text style={styles.messageStyle}><Ionicons name="checkmark-circle" color='#8FC152' size={15}/>  Check and review all details to verify integrity.</Text>
                        <Text style={styles.messageStyle}><Ionicons name="close-circle" color='#97231E' size={15}/>   Can’t be false or deceptive information.</Text>
                    </View>   

                    <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPressIn={continueButton}>
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
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
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
          fontSize: hp(1.5), 
          
    },
    buttonNotSelectedLabel:{
        color: '#203949', 
        fontSize: hp(1.5),
        
        
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
        alignItems: 'stretch', 
        justifyContent: 'space-between'
      },
    buttonSelected:{
        borderRadius: 10 ,
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonnotSelected:{
        borderRadius: 10 ,
        width: wp(25), 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexWrap: 'wrap',
        alignContent: 'center'
    },
    containerSelected:{
      flex:1,
      borderRadius: 5,
      borderWidth: 2, 
      borderColor: '#F0F2F4',
      padding: 5,
      height: hp(8),
      width: hp(15),
      marginLeft: hp(.01), 
      marginRight: hp(2),
      justifyContent:'space-evenly',
      backgroundColor:'#2C85E7',
      alignSelf:'center',
        
    },
    containerNotSelected:{
        flex:1,
        borderRadius: 5,
        borderWidth: 2, 
        borderColor: '#F0F2F4',
        padding: 5,
        height: hp(8),
        width: hp(15),
        marginLeft: hp(.01), 
        marginRight: hp(2),
        justifyContent:'space-evenly',

        alignSelf:'center',

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



  
const image_preview = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    undoButtonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 20,
        alignItems: 'flex-start'
      },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      padding: 20,
      alignItems: 'flex-end'
    },
    button: {
      width: 100,
      height: 50,
      borderRadius: 50,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

function generateUniqueFilename(fileExtension: string) {
  throw new Error('Function not implemented.');
}
