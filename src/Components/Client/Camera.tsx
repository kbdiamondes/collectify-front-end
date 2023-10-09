import {SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import {Camera} from 'expo-camera'
import CameraPreview from './CameraPreview';
import { CheckScreenNavigationprop, RootStackParamList } from "../../../App";
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

export default function CameraShot(){
  const nameProp = useRoute<RouteProp<RootStackParamList, 'CameraShot'>>().params.nameprop;
  const priceProp = useRoute<RouteProp<RootStackParamList, 'CameraShot'>>().params.priceprop;
  const contractIdProp = useRoute<RouteProp<RootStackParamList, 'CameraShot'>>().params.contractId;
    const [startCamera,setStartCamera] = React.useState(false)
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)
    const navigation = useNavigation <CheckScreenNavigationprop>();
    const __startCamera = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync()
        if (status === 'granted') {
          // start the camera
          setStartCamera(true)
        } else {
          Alert.alert('Access denied')
        }
      }


      const [imageLink, setImageLink] = React.useState()
      const setImage = (photo:any)=> {
        setImageLink(photo)
      }
       

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
                contractId: contractIdProp
              });
            }
          };

          console.log(priceProp); 
          reader.readAsDataURL(data);
        };
        
    let camera: Camera
    return(
      <SafeAreaView style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      {startCamera ? (
       
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
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            onPress={__startCamera}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: '#14274e',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Picture of Receipt
            </Text>
          </TouchableOpacity>
        </View>
       
      )}
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