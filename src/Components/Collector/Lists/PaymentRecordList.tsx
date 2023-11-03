
import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'
import {Ionicons} from '@expo/vector-icons'; 

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type PaymentRecordListProps = {
    key:number, 
    clientName: String; 
    itemName: String; 
    requiredCollectible: number; 
    paymentType: String; 
    paymentStatus: String;
    contractId: number 
}

export default function PaymentRecordList(props: PaymentRecordListProps){
    return(
        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
                    <View style={styles.itemText}>
                        <Text style={{color:'#363636',fontSize: hp(2)}}>{props.clientName}</Text>
                        <Text style={{fontSize: hp(1.2),  color: props.paymentStatus === 'Paid' ? 'green' : 'red' }}>{props.paymentStatus}</Text>                                  
                    </View>
                    <View style={styles.textRightContainer}>
                    <View style={styles.textRight}>
                        <Text style={{color: '#363636', fontWeight: 'bold'}}>Php {props.requiredCollectible}</Text>
                        <Text style={styles.textRightText}>{props.paymentType}</Text>
                    </View>
                </View>
            </View>
            
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
        height: 40,
        margin: hp(1.5), 
        backgroundColor: '#92A0A8', 
        borderRadius: 5 
    }, 
    itemText: {
        flex:1, 
        maxWidth: '75%', 
        marginRight: hp(1.5), 
        justifyContent: 'center', 
        alignItems :'flex-start', 
        textAlign: 'left'
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
