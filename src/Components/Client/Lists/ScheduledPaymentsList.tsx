import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'

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
                        <Text style={{color:'#363636', fontSize: 13 }}>{props.itemName}</Text>
                        <Text style={{color: '#92A0A8', fontSize: 12}}>{props.paymentStatus}</Text>                                  
                    </View>
                <View style={styles.textRightContainer}>
                    <View style={styles.textRightContainer}>
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
        backgroundColor: '#F5F7F9',
        padding: 21, 
        borderRadius: 10, 
        marginBottom: 20,
        shadowColor: '#000', 
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2
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
    textRightContainer: {
        width: 90, 
        height: 40,
        marginLeft: 30,
        justifyContent:'space-evenly',
        borderRadius: 5
    }, 
    textRight:{
        borderRadius: 10 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },
    textRightText:{
        color: '#363636', 
        fontSize: 10
    },
}); 
