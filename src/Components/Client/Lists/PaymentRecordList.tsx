import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'

type PaymentRecordProps = {
    key:number, 
    collectorName:String; 
    transactionDate: String; 
    recentMessage: String; 
    
}

export default function PaymentRecordLists(props: PaymentRecordProps){
    return(
        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}/>
                    <View style={styles.itemText}>
                        <Text style={{color:'#363636'}}>{props.collectorName}</Text>
                        <Text style={{color: '#92A0A8', fontSize: 10}}>{props.recentMessage}</Text>                                  
                    </View>
                    <View style={styles.dateContainer}>
                        <Text style={styles.dateLabel}>{props.transactionDate}</Text>        
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
    dateContainer: {
        width: 55, 
        height: 40,
        marginLeft: 70,
    }, 
    dateLabel:{
        color: '#92A0A8', 
        fontSize: 11
    },
}); 
