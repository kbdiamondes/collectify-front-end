
import { Pressable, SafeAreaView, Text, TextInput, View, Button,StyleSheet, KeyboardAvoidingView, Modal} from "react-native";
import { CheckScreenNavigationprop } from "../../../App";
import { useNavigation } from "@react-navigation/native";

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Ionicons} from '@expo/vector-icons'
import { useState } from "react";

export default function MonthlyPaymentmentScreen(){
    const navigation = useNavigation<CheckScreenNavigationprop>()

    const [buyerName, setBuyername] = useState<String>(""); 
    const [itemName, setItemName] = useState<String>(""); 
    const [itemPrice, setItemPrice] = useState<String>(""); 
    const [itemSpecs, setItemSpecs] = useState<String>(""); 
    const [installmentDuration, setInstallmentDuration] = useState<String>(""); 

    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleModal = () => setIsModalVisible(()=>!isModalVisible)


    //checks passed data from console
    const continueButton = () => {
        console.log(buyerName);
        console.log(itemName);
        console.log(itemPrice);
        console.log(itemSpecs);
        console.log(installmentDuration);
        handleModal() //shows the modal
    }

    const confirmContract = () =>{
        alert("Purchase confirmed")
        handleModal() //hides the modal
        //pass value here

        var message = "Name:" + buyerName +  "\nItem Name:" + itemName + "\nItem Price: "+ itemPrice + "\nItem Specs:" +itemSpecs + "\nInstallment Amount: "+installmentDuration;

        console.log(message)
        navigation.goBack();
        navigation.goBack();
    }   


    return(
        
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

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

            <View style={styles.main}>
                <View style={styles.body}>
                <Pressable style={styles.goBackButton} onPressIn={navigation.goBack}>
                     <Ionicons name="arrow-back-outline" color='#000' size={hp(4.5)}/>
                </Pressable>
                <Text style={styles.textStyleHeader}>Monthly Installment</Text>
                <Text style={styles.textStyleSubheader}>Easily track and manage monthly installments with our user-friendly interface. </Text>
                    <TextInput onChangeText={(name)=>setBuyername(name)}   placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Buyer Username" ></TextInput>
                    <TextInput onChangeText={(name)=>setItemName(name)} placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Item Name" ></TextInput>
                    <TextInput onChangeText={(price)=>setItemPrice(price)}  keyboardType="numeric" placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Item Price" ></TextInput>
                    <TextInput onChangeText={(specs)=>setItemSpecs(specs)}  keyboardType="numeric" placeholderTextColor="#C2C6CC" style={styles.textBoxStyle} placeholder="Specifications" ></TextInput>
                    <TextInput onChangeText={(amount)=>setInstallmentDuration(amount)}   keyboardType="numeric" placeholderTextColor="#C2C6CC"  style={styles.textBoxStyle} placeholder="Installment Duration" ></TextInput>
                    
                    <View style={styles.button}>
                        <Pressable onPressIn={continueButton}>
                            <Text style={styles.buttonLabel}>Continue</Text>
                        </Pressable>
                    </View>               
                </View>
            </View> 
            
        
        </KeyboardAvoidingView>
    ); 
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
        backgroundColor: '#2C85E7',
        width: wp(35),
        height: hp(6.5),
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
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