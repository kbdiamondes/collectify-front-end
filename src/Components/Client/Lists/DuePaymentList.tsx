import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'

type PaymentProps = {
    key:number, 
    itemName:String; 
    itemCollectible: number; 
}

export default function DuePaymentList(props: PaymentProps){
    return(
        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}/>
                    <View style={styles.itemText}>
                        <Text style={{color:'#363636'}}>{props.itemName}</Text>
                        <Text style={{color: '#92A0A8'}}>Php {props.itemCollectible}</Text>                                  
                    </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={()=>alert("hello")}>
                        <Text style={styles.buttonLabel}>Pay</Text>
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
    buttonContainer: {
        width: 50, 
        height: 40,
        backgroundColor:'#2C85E7',
        marginLeft: 80,
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
        color: '#fff', 
        fontSize: 12
    },
}); 
