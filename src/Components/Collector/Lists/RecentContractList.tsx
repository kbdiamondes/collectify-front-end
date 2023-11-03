import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type RecentCollectionProps = { 
    orderId: string;
    requiredCollectible: number;
    paymentType: string; 
    productName: string;
    clientName: string;
    paymentStatus: string; 
}

export default function RecentCollectionList(props: RecentCollectionProps){
    return(
        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
                    <View style={styles.itemText}>
                        <Text style={{color:'#363636',fontSize: hp(1.7), fontWeight: 'normal'}}>{props.productName}</Text>
                        <Text style={[styles.paymentLabel, { color: props.paymentStatus === 'Paid' ? 'green' : 'red' }]}>
                            {props.paymentStatus}
                        </Text>
                    </View>
                <View style={styles.priceContainer}>
                        <Text style={styles.priceLabel}>Php {props.requiredCollectible}</Text>
                        <Text style={{color: '#92A0A8', fontSize: hp(1.5)}}>{props.paymentType}</Text>                                  
                </View>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item:{
        flex: 1, 
        backgroundColor: '#FFFFFF',
        borderRadius: 15, 
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
        elevation: 2,
    },
    itemLeft:{
        flex:1, 
        marginRight: hp(1), 
        marginLeft: hp(2),
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
    priceContainer: {
        flex: .8,
        width: wp(19), 
        height: hp(5.5), 
        margin: hp(1.5), 
        justifyContent:'space-evenly',
        alignItems:'flex-end',
        borderRadius: 5,
        maxWidth: '80%'
    }, 
    priceLabel:{
        color: '#2C85E7', 
        fontSize: hp(1.6),
        fontWeight: 'bold'
    },
    paymentLabel:{
        color: '#2C85E7', 
        fontSize: hp(1.5),
        fontWeight: 'bold'
    },
}); 
