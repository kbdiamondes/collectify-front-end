import {SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import {Camera} from 'expo-camera'
import CameraPreview from './CameraPreview';
import { CheckScreenNavigationprop } from "../../App";
import { useNavigation } from 'expo-router';

export default function CameraCapture(){

    const navigation = useNavigation<ImagePreview>(); 
    const [startCamera,setStartCamera] = React.useState(false)
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)
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
        
        // Access the base64 image data
        const photoBase64 = photo.base64;
      
        console.log("test " + photoBase64); // This is the base64-encoded image data
        
        // Set the photoBase64 in your component's state or use it as needed
        setPreviewVisible(true);
        setCapturedImage(photoBase64)
      
    

        //buhaton is convert STRING (PHOTO VARIABLE) -> IMAGE
        //const [imageLink, setImageLink] 
        //setImageLink(photo)
        //const base64 = setImageLink
        //type binaryImageData = Base64.decode(base64)

        /*
        import { FileSystem } from 'expo';

        const fileName = 'myImage.png'; // Set a desired file name

        FileSystem.writeAsStringAsync(FileSystem.documentDirectory + fileName, binaryImageData, {
          encoding: FileSystem.EncodingType.Base64,
        })
          .then(() => {
            console.log(`Image saved as ${fileName}`);
          })
          .catch((error) => {
            console.error('Error saving image:', error);
          });

        */
          //import sa ug "const navigation = useNavigate<CheckScreenPropschu>"
          //navigation.push('')
          //navigation.goBack()
          //navigation.goBack()
        

      }
      
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