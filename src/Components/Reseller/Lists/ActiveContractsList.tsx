import { useNavigation } from '@react-navigation/native';
import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from '../../../../App';
import Toast from "react-native-toast-message";


type ActiveContractProps = {
    key:number, 
    clientName: String; 
    itemName: String; 
    requiredCollectible: number; 
    paymentType: String; 
    paymentTransactionId: number;
    paid: boolean;

}

const showFailedToast = () => {
    Toast.show({
      type: 'error',        
      text1: 'Unable to collect payments',
      text2: 'Client has not yet paid the required collectible.',
      visibilityTime: 4000,
      position: 'bottom', 
    });
  }


export default function ActiveContractsList(props: ActiveContractProps){

    const borderColors = props.paid ? 'green' : 'red';
    const navigation = useNavigation <CheckScreenNavigationprop>();

    const gotoCollectPayments =()=>{
        if(props.paid===true){            
        navigation.navigate('CollectPayments', { paymentTransactionId: props.paymentTransactionId, dueAmount: props.requiredCollectible});
        }else{
            showFailedToast();
        }
    }
    
    return(
        <SafeAreaView style={[styles.item, {borderColor: borderColors}]}>
            <Pressable onPress={gotoCollectPayments}>
            <View style={styles.itemLeft}>
                    <View style={styles.itemText}>
                        <Text style={{color:'#363636', fontSize: hp(1.8) }}>{props.clientName}</Text>
                        <Text style={{color: '#92A0A8', fontSize: hp(1.5)}}>{props.itemName}</Text>                                  
                    </View>
                <View style={styles.textRightContainer}>
                    <View style={styles.textRightContainer}>
                        <Text style={{color: '#363636', fontWeight: 'bold'}}>Php {props.requiredCollectible}</Text>
                        <Text style={styles.textRightText}>{props.paymentType}</Text>
                    </View>
                </View>
            </View>
            </Pressable>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item:{
        flex:1, 
        backgroundColor: '#FFFFFF',
        borderRadius: 10, 
        marginBottom: hp(2),
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
        flex:1, 
        marginRight: hp(1.5),
        marginLeft: hp(1.5),
        flexDirection:'row',
        aligntItems: 'center', 
        flexWrap:'wrap'
    },
    square:{
        flex: .5, 
        width: 100,
        height: 60,
        margin: hp(1.5), 
        backgroundColor: '#92A0A8', 
        borderRadius: 5,
    }, 
    itemText: {
        flex:1, 
        maxWidth: '75%', 
        marginRight: hp(1.5), 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        textAlign: 'center'
    }, 
    textRightContainer: {
        margin: hp(1.5),
        justifyContent: 'center',
        alignItems: 'flex-end',
    }, 
    textRight:{
        alignItems: 'flex-start', 
    },
    textRightText:{
        color: '#363636', 
        fontSize: hp(1.1)
    },
}); 
