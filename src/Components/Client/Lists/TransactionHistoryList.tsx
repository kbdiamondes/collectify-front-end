import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'

type TransactionHistoryProps = {
    key:number, 
    personName:String; 
    itemCollectible: number; 
    transactionDate: String; 
}

export default function DuePaymentList(props: TransactionHistoryProps){
    return(
        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}/>
                    <View style={styles.itemText}>
                        <Text style={{color:'#363636',fontSize: 14}}>{props.personName}</Text>
                        <Text style={{color: '#92A0A8', fontSize: 12}}>{props.transactionDate}</Text>                                  
                    </View>
                <View style={styles.priceContainer}>
                        <Text style={styles.priceLabel}>Php {props.itemCollectible}</Text>
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
    priceContainer: {
        width: 80, 
        height: 40,
        marginLeft: 100, 
        justifyContent:'space-evenly',
        borderRadius: 5,
        maxWidth: '80%'
    }, 
    button:{
        borderRadius: 10 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },
    priceLabel:{
        color: '#363636', 
        fontSize: 15,
        fontWeight: 'bold'
    },
}); 
