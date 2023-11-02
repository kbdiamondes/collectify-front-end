import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent, ScrollView} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type ResellerSoldItemsListProps = {
    key:number, 
    itemName:String; 
    piecesLeft: number; 
}

export default function ResellerSoldItemsList(props: ResellerSoldItemsListProps){
    return(
        <SafeAreaView style={{flexDirection: 'row'}}>
            <ScrollView>
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <View style={styles.square}/>
                        <View style={styles.itemText}>
                            <Text style={{color:'#363636',fontSize: hp(2), fontWeight: 'bold'}}>{props.itemName}</Text>
                            <Text style={{color: '#92A0A8', fontSize: hp(1.8)}}>{props.piecesLeft} pieces left.</Text>                                  
                        </View>
                </View>
                
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item:{
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 10, 
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
        elevation: 2
    },
    itemLeft:{
        flex:1, 
        flexDirection:'row',
        aligntItems: 'center', 
        flexWrap:'wrap'
    },
    square:{
        flex:.5,
        width: 50,
        height: 70,
        margin: hp(.5),
        backgroundColor: '#92A0A8', 
        borderRadius: 5
        
    }, 
    itemText: {
        flex: 1, 
        maxWidth: '80%', 
        marginRight: hp(1.5),
        marginLeft: hp(1),  
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        textAlign: 'left'
    },
    button:{
        borderRadius: 10 ,
        width: '100%', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    }
}); 
