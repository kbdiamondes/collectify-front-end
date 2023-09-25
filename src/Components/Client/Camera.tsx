import {SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import {Camera} from 'expo-camera'
import CameraPreview from './CameraPreview';



export default function CameraCapture(){
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

      const __takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync()
        console.log(photo)
        setPreviewVisible(true)
        setCapturedImage(photo)
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
              Take picture
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