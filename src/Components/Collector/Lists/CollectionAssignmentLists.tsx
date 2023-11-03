import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from '../../../../App';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import Toast from "react-native-toast-message";

type CollectionAssignmentProps = {
    key:number, 
    clientName:String; 
    requiredCollectible: number; 
    collectionStatus: boolean;
    contractId: number; 
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

export default function CollectionAssignmentLists(props: CollectionAssignmentProps){
    const navigation = useNavigation<CheckScreenNavigationprop>();

    const gotoCollectPayments =()=>{
        if(!props.collectionStatus){
            showFailedToast();
        }else if(props.collectionStatus){
            navigation.navigate('CollectorCollectPaymentForm', { contractId: props.contractId});
        }
        
    }

    const statusText = props.collectionStatus ? 'Ready to Collect' : 'Unpaid';

    return(
        <SafeAreaView style={styles.item}>
            <Pressable onPress={gotoCollectPayments}>
                <View style={styles.itemLeft}>
                    
                        <View style={styles.itemText}>
                            <Text style={{color:'#363636',fontSize: 14}}>{props.clientName}</Text>
                            <Text style={{ color: props.collectionStatus ? '#00B761' : '#FF0000', fontSize: 12 }}>{statusText}</Text>                               
                        </View>
                    <View style={styles.priceContainer}>
                                <Text style={styles.priceLabel}>Php {props.requiredCollectible}</Text>
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
        flex:1, 
        padding: hp(1.5),
        marginLeft: hp(1), 
        marginRight: hp(1.5),
        flexDirection:'row',
        aligntItems: 'center', 
        flexWrap:'wrap'
    },
    square:{
        flex: .5, 
        width: 100,
        height: 50,
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
        textAlign: 'left'
    }, 
    priceContainer: {
        flex: .7, 
        justifyContent: 'center', 
        alignItems: 'flex-end',
    }, 
    priceLabel:{
        color: '#363636', 
        fontSize: hp(1.5),
        fontWeight: 'bold'
    },
}); 
