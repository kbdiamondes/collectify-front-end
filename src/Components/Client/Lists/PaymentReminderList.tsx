import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'
import {Ionicons} from '@expo/vector-icons'; 

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
        backgroundColor: '#F5F7F9',
        padding: 21, 
        borderRadius: 10, 
        marginBottom: 20
    },
    itemLeft:{
        flexDirection:'row',
        aligntItems: 'center', 
        flexWrap:'wrap'
    },
    square:{
        width: 40,
        height: 40,
        backgroundColor: '#92A0A8', 
        borderRadius: 5,
        marginRight: 15, 
    }, 
    itemText: {
        maxWidth: '80%', 
    }, 
    buttonContainer: {
        width: 50, 
        height: 40,
        marginLeft: 166,
        justifyContent:'space-evenly',
        borderRadius: 5
    }, 
    button:{
        borderRadius: 10 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },
    buttonLabel:{
        color: '#363636', 
        fontSize: 15,
        fontWeight: 'bold'
    },
}); 
