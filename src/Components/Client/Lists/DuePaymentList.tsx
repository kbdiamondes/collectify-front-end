import { useEffect, useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent, TextInput, Modal} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { CheckScreenNavigationprop } from '../../../../App';
        
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


type PaymentProps = {
    payment_transactionid: number;
    orderid: string;
    amountdue: number;
    startingDate: string;
    endDate: string;
    installmentNumber: number;
    isPaid: boolean;
    isCollected: boolean;
    itemName: string;
};



export default function DuePaymentList(props: PaymentProps){

    const [amountCollectible, setamountCollectible] = useState(props.amountdue);
    const navigation = useNavigation<CheckScreenNavigationprop>();
    return(
        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.itemText}>
                    <Text style={{color:'#363636', fontSize:hp(1.7), fontWeight: 'bold'}}>{props.itemName}</Text>
                    <Text style={{color: '#92A0A8', fontSize: hp(1.5)}}>Php {props.amountdue}</Text>                                  
                </View>

                <View style={styles.buttonMainContainer}>
                    <View style={styles.buttonContainer}>

                    <Pressable style={styles.button}  onPress={() => {
                        navigation.navigate("PaymentForm", { nameprop: props.itemName, paymentTransactionId: props.payment_transactionid, orderId: props.orderid, dueAmount: props.amountdue});
    
                        }}
                        >
                            <Text style={styles.buttonLabel}>Pay</Text>
                        </Pressable>
                    </View>
                </View>    
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10, 
        marginBottom: 20,
        marginLeft: hp(1), 
        marginRight: hp(1), 
        shadowColor: '#000', 
        shadowOpacity: 0.10,
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2
    },
    itemLeft:{
        flex: 1,
        marginRight: hp(1),
        marginLeft: hp(1.5),
        flexDirection:'row',
        aligntItems: 'center', 
        flexWrap:'wrap'
    },
    square:{
        flex:.5,
        width: 100,  
        height: 50,
        margin: hp(1.5), 
        backgroundColor: '#92A0A8', 
        borderRadius: 5
    }, 
    itemText: {
        flex:1, 
        maxWidth: '75%', 
        marginRight: hp(1.5), 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        textAlign: 'center'
    }, 
    buttonMainContainer:{
        width: wp(20), 
        height: hp(5.5),
        margin: hp(1.5), 
        justifyContent: 'center', 
        alignItems:'flex-end'
    }, 
    buttonContainer: {
        flex:.8,
        width: wp(15),
        backgroundColor:'#2C85E7',
        borderRadius: 5
    }, 
    button:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },
    buttonLabel:{
        color: '#fff', 
        fontSize: hp(1.5),
    },
}); 
