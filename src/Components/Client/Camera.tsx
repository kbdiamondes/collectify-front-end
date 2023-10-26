import {SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Camera} from 'expo-camera'
import CameraPreview from './CameraPreview';
import { CheckScreenNavigationprop, RootStackParamList } from "../../../App";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import ImageResizer from 'react-native-image-resizer';


export default function CameraShot(){
  const nameProp = useRoute<RouteProp<RootStackParamList, 'CameraShot'>>().params.nameprop;
  const priceProp = useRoute<RouteProp<RootStackParamList, 'CameraShot'>>().params.priceprop;
  const contractIdProp = useRoute<RouteProp<RootStackParamList, 'CameraShot'>>().params.contractId;
  const clientIdProp = useRoute<RouteProp<RootStackParamList, 'CameraShot'>>().params.clientId;

    const [startCamera,setStartCamera] = React.useState(false)
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)
    const navigation = useNavigation <CheckScreenNavigationprop>();
    useEffect(() => {
      // Request camera permissions when the component mounts
      const requestCameraPermissions = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status === 'granted') {
          // start the camera
          setStartCamera(true);
        } else {
          Alert.alert('Access denied');
        }
      };
  
      requestCameraPermissions();
    }, []); // Empty dependency array to run the effect only once
  


      const [imageLink, setImageLink] = React.useState()
      const setImage = (photo:any)=> {
        setImageLink(photo)
      }

      const __takePicture = async () => {
        if (!camera) return;
    
        const photo = await camera.takePictureAsync();
    
        // Create a canvas element to resize and compress the image
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        const image = new Image();
    
        if (context) { // Check if context is not null
            // Set the canvas dimensions to your desired size
            canvas.width = 800; // Set the width you want
            canvas.height = 600; // Set the height you want
    
            image.onload = () => {
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
                canvas.toBlob((blob) => {
                  if (blob) { // Check if blob is not null
                      // Convert the Blob to a base64 string
                      const reader = new FileReader();
                      reader.onloadend = () => {
                          if (reader.result !== null && typeof reader.result === 'string') {
                              const base64Image = reader.result.split(',')[1]; // Remove the 'data:image/png;base64,' part
                              // Now you have the compressed base64Image without the data URL prefix
              
                              console.log(photo);
                              navigation.navigate('ImageScreenPreview', {
                                  imageprop: base64Image,
                                  nameprop: nameProp,
                                  priceprop: priceProp,
                                  contractId: contractIdProp,
                                  clientId: clientIdProp
                              });
                          }
                      };
              
                      reader.readAsDataURL(blob);
                  }
              }, 'image/jpeg', 0.8);
            };
    
            // Load the image into the canvas
            image.src = photo.uri;
        }
    };
    
      
        
    let camera: Camera
    return(
      <SafeAreaView style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Camera
              style={{flex: 1, width: "100%"}}
              ref={(r) => {
                camera = r
              }}
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

const styles = StyleSheet.create({
    container:{
        paddingTop: 31, 
        paddingHorizontal: 21
    }, 
    textHeader:{
        fontSize: 15,
        fontWeight: 'bold', 
        color: '#9F9F9F',
        paddingHorizontal: 23,
        marginBottom: 10
    }
});