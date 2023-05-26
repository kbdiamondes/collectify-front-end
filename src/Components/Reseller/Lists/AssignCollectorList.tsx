import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'
import {Ionicons} from '@expo/vector-icons'; 


type AssignCollectorProps = {
    collectorname: string; 
    collectoraddress: string; 
}

export default function AssignCollectorList(props: AssignCollectorProps){
    return(

        <View style={styles.item}>
            <View style={styles.itemLeft}>                    
                <View style={styles.itemText}>
                    <Text style={{color:'#363636', fontSize: 18}}>{props.collectorname}</Text>
                    <Text style={{color: '#92A0A8', fontSize: 12}}>{props.collectoraddress}</Text>                                  
                </View>
                <View style={styles.textRightContainer}>
                    <View style={styles.textRightContainer}>
                        <Pressable onPress={()=>alert("pressed!")}>
                            <Ionicons name="send" color='#000000' size={20}/>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>


    ); 
}
const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 21, 
        marginTop: 16,
        borderRadius: 3, 
        borderColor: '#CED0D1', 
        borderWidth: 2
    },
    itemLeft:{
        flexDirection:'row',
        aligntItems: 'center', 
        flexWrap:'wrap'
    }, 
    itemText: {
        maxWidth: '80%', 
    }, 
    textRightContainer: {
        width: 130, 
        height: 40,
        paddingLeft: 100, 
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
}); 