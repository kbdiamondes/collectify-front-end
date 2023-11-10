import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type PaymentRecordProps = {
    orderId: string;
    amountPaid: number;
    paymentStatus: string;
    productName: string;
    clientName: string;
    collectorName: string;
    
}

export default function PaymentRecordLists(props: PaymentRecordProps){
    return(
        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
                    <View style={styles.itemText}>
                        <Text style={{color:'#363636', fontSize: hp(1.7), fontWeight: 'bold'}}>{props.collectorName}</Text>
                        <Text style={{color: '#92A0A8', fontSize: hp(1.5)}}>Php {props.amountPaid}</Text>                                  
                    </View>

                    
                    <View style={styles.dateContainer}>
                        <Text style={[styles.dateLabel, {color: props.paymentStatus === 'Collected' ? 'green' : 'red'}]}>{props.paymentStatus}</Text>        
                    </View>                       
                    
            </View>            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item:{
        flex:1, 
        backgroundColor: '#FFFFFF',     
        alignContent:'center',
        verticalAlign:'center',
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
        elevation: 2,       
        
    },
    itemLeft:{
        flex:1, 
        marginRight: hp(1),
        marginLeft: hp(1.5),
        flexDirection:'row',
        aligntItems: 'center', 
        flexWrap:'wrap',

    },
    square:{
        flex:.5, 
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
        justifyContent: 'center', //vertical alignment
        alignItems: 'flex-start', 
        textAlign: 'center'
    }, 
    mainDateContainer:{
        margin: hp(1.5), 
        justifyContent: 'center', 
        
    },
    dateContainer: {
        flex: .8,
        width: wp(19), 
        height: hp(5.5), 
        margin: hp(1.5), 
        justifyContent:'space-evenly',
        alignItems:'flex-end',
        borderRadius: 5,
        maxWidth: '80%'
    }, 
    dateLabel:{
        color: '#92A0A8', 
        fontSize: hp(1.2)
    },
}); 
