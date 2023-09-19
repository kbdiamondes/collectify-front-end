import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'
import {Ionicons} from '@expo/vector-icons'; 

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type PaymentReminderProps = {
    key:number, 
    collectorName:String; 
    messageStatus: String; 
}

export default function PaymentReminderList(props: PaymentReminderProps){
    return(
        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}/>
                    <View style={styles.itemText}>
                        <Text style={{color:'#363636', fontSize: 14}}>{props.collectorName}</Text>
                        <Text style={{color: '#92A0A8', fontSize: 12}}>{props.messageStatus}</Text>                                  
                    </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={()=>alert("hello")}>
                        <Text style={styles.buttonLabel}>Reply</Text>
                    </Pressable>
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
        marginBottom: hp(2),
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
        maxWidth: '80%', 
        marginRight: hp(1.5), 
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        textAlign: 'left'
    }, 
    buttonContainer: {
        flex:.8, 
        justifyContent: 'center'
    }, 
    button:{
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'right'
    },
    buttonLabel:{
        color: '#363636', 
        fontSize: hp(1.9),
        fontWeight: 'bold'
    },
}); 
