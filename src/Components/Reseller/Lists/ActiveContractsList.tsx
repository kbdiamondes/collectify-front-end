import { useNavigation } from '@react-navigation/native';
import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from '../../../../App';


type ActiveContractProps = {
    key:number, 
    clientName: String; 
    itemName: String; 
    requiredCollectible: number; 
    paymentType: String; 
    contractId: number

}
export default function ActiveContractsList(props: ActiveContractProps){


    const navigation = useNavigation <CheckScreenNavigationprop>();

    const gotoCollectPayments =()=>{
        navigation.navigate('CollectPayments', { contractId: props.contractId, dueAmount: props.requiredCollectible});
    }
    
    return(
        <SafeAreaView style={styles.item}>
            <Pressable onPress={gotoCollectPayments}>
            <View style={styles.itemLeft}>
                    <View style={styles.itemText}>
                        <Text style={{color:'#363636', fontSize: hp(2) }}>{props.clientName}</Text>
                        <Text style={{color: '#92A0A8', fontSize: hp(1.5)}}>{props.itemName}</Text>                                  
                    </View>
                <View style={styles.textRightContainer}>
                    <View style={styles.textRight}>
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
        marginRight: hp(1),
        marginLeft: hp(1.5),
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
