import {SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Camera} from 'expo-camera'
import CameraPreview from './CameraPreview';
import { CheckScreenNavigationprop, RootStackParamList } from "../../../App";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';

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

      /*
      const __takePicture = async () => {
        if (!camera) return;

    
        const photo = await camera.takePictureAsync();

        // Fetch the image and convert it to a Blob
        const response = await fetch(photo.uri);
        const data = await response.blob();

        // Convert the Blob to a base64 string
        const reader = new FileReader();
        reader.onloadend = () => {
          if (reader.result !== null && typeof reader.result === 'string') {
            const base64Image = reader.result.split(',')[1]; // Remove the 'data:image/png;base64,' part
            // Now you have the base64Image without the data URL prefix

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

        console.log(priceProp); 
        reader.readAsDataURL(data);
      };*/
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
              navigation.navigate('ImageScreenPreview', {
                imageprop: base64Image,
                nameprop: nameProp,
                priceprop: priceProp,
                contractId: contractIdProp,
                clientId: clientIdProp,
              });
            }
          };
    
          reader.readAsDataURL(data);
        }
      };
      
        
    let camera: Camera | null;
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
                  height: '100%',
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