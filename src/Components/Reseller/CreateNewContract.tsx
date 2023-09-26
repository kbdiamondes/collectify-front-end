import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, Pressable, StyleSheet, Image, Modal} from "react-native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from "../../../App";
import { useState } from "react";

const PlaceHolderImage = require('../../../assets/vector-purchase.png');


export default function CreateNewContractScreen(){
  const navigation = useNavigation<CheckScreenNavigationprop>(); 
  
  const visitFullPaymentScreen = () => {
    navigation.push('FullPaymentContract')
  }

  const visitMonthlyInstallmentScreen = () => {
    navigation.navigate('MonthlyPaymentContract')
  }

  const returnPrevScreen = () => {
    navigation.goBack(); 
  }


  return(
      <SafeAreaView style={styles.container}>
          <View style={styles.headerimage}>
              <View style={styles.imageContainer}>
              <Image style={styles.image} source={PlaceHolderImage}/>
              </View>
          </View>
          
          <View style={styles.main}>
              <View style={styles.body}>
                <Text style={styles.textHeader}>Purchase Method</Text>
                <Text style={styles.textMultiline}>You may select your preferred purchase method</Text>

                <View style={styles.primaryActionButton}>
                      <Pressable onPressIn={visitFullPaymentScreen}>
                              <Text style={styles.primaryActionButtonLabel}>Full Payment</Text>
                      </Pressable>
                </View>

                <View style={styles.secondaryActionButton}>
                      <Pressable onPressIn={visitMonthlyInstallmentScreen}>
                              <Text style={styles.secondaryActionButtonLabel}>Monthly Installment</Text>
                      </Pressable>
                </View>
              </View>
          </View>


          <View style={styles.footer}>
              <View style={styles.button}>
                      <Pressable onPress={returnPrevScreen}>
                              <Text style={styles.buttonLabel}>Return</Text>
                      </Pressable>
              </View>
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: hp(100)
    },
    headerimage:{
        flex: 0.5, 
        height:hp(50)
    }, 
    main:{
        flex: 0.5, 
        //height: hp(35), 
        display: 'flex', 
        flexDirection: 'row'
    }, 
    body:{
        flex:1,
        width: wp(100), 
        paddingLeft: 25, 
        paddingRight: 25
    }, 
    footer:{
        flex:0.15, 
        height: hp(50)
    }, 
    textHeader:{
        marginTop: hp(.5),
        fontSize:hp(3),
        fontWeight: 'bold', 
        textAlign: 'center', 
        textAlignVertical: 'center',
        height: hp(4),
        color: '#203949'
    }, 

    textMultiline:{
        flex: .5, 
        fontSize: hp(2.5),
        color: '#707070',
        textAlign: 'center', 
        textAlignVertical: 'center'
    },

    imageContainer:{
        flexDirection: 'row', 
    },
    
    image:{
        margin: hp(5),
        width: 450, 
        height: 450,
        bottom: hp(.5), 
        flexDirection: "row", 
        flex: 1,
        aspectRatio: 1
    }, 
    primaryActionButton:{
        height: hp(5.5),
        backgroundColor: '#F0F0F0',
        alignContent: 'center',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        marginBottom: hp(1)
    },
    secondaryActionButton:{
      height: hp(5.5),
      backgroundColor: '#2C85E7',
      alignItems: 'center', 
      justifyContent: 'center', 
      borderRadius: 5, 
      marginBottom: hp(1)
  },
    primaryActionButtonLabel:{
      color: '#203949', 
      fontSize: hp(1.5), 
      fontWeight: 'bold'
    }, 
    secondaryActionButtonLabel:{
      color: '#fff', 
      fontSize: hp(1.5), 
      fontWeight: 'bold'
    }, 
    button:{
        height: hp(7),
        backgroundColor: '#707070',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        margin: '5%'
    },

    buttonLabel:{
        color: '#fff', 
        fontSize: hp(2)
    },
});


/*
export default function CreateNewContractModal(){
    const [modalVisible, setModalVisible] = useState(true); 

    const modalState = () =>  {
        setModalVisible(!modalVisible)
        //navigation.navigate('ActiveContracts')
    }

    return (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            style={styles.centeredView}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={()=> setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
      );
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(52, 52, 52, 0.8)' //sets background to transparent
      },
      modalView: {
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },

})*/