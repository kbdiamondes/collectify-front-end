import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


type ScheduledPaymentProps = {
    key:number, 
    itemName:String; 
    itemCollectible: number; 
    paymentStatus: String; 
    scheduledDate: String;
}

export default function ScheduledPaymentsList(props: ScheduledPaymentProps){
    return(
        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}/>
                    <View style={styles.itemText}>
                        <Text style={{color:'#363636', fontSize: hp(1.3) }}>{props.itemName}</Text>
                        <Text style={{color: '#92A0A8', fontSize: hp(1.2)}}>{props.paymentStatus}</Text>                                  
                    </View>
                <View style={styles.textRightContainer}>
                    <View style={styles.textRight}>
                        <Text style={{color: '#363636', fontWeight: 'bold'}}>Php {props.itemCollectible}</Text>
                        <Text style={styles.textRightText}>{props.scheduledDate}</Text>
                    </View>
                </View>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item:{
        flex:1, 
        backgroundColor: '#F5F7F9',
        padding: 20, 
        borderRadius: 10, 
        marginBottom: 20,
        marginLeft: hp(1), 
        marginRight: hp(1), 
        shadowColor: '#000', 
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
        justifyContent: 'center'
    }, 
    textRight:{
        alignItems: 'flex-start', 
    },
    textRightText:{
        color: '#363636', 
        fontSize: hp(1.1)
    },
}); 
