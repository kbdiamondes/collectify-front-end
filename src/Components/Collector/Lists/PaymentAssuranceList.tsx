
import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'
import {Ionicons} from '@expo/vector-icons'; 

type PaymentAssuranceProps = {
    key:number, 
    personName:String; 
    responseStatus: String; 
}

export default function PaymentAssuranceList(props: PaymentAssuranceProps){
    return(
        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}/>
                    <View style={styles.itemText}>
                        <Text style={{color:'#363636',fontSize: 14}}>{props.personName}</Text>
                        <Text style={{color: '#92A0A8', fontSize: 12}}>{props.responseStatus}</Text>                                  
                    </View>
                <View style={styles.followupContainer}>
                        <Ionicons name="arrow-forward" marginLeft={45} size={25}/>
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
    followupContainer: {
        width: 80, 
        height: 40,
        marginLeft: 130, 
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
    followupLabel:{
        color: '#363636', 
        fontSize: 15,
        fontWeight: 'bold'
    },
}); 
