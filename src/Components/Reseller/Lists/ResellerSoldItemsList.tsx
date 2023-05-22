import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent, ScrollView} from 'react-native'

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
                            <Text style={{color:'#363636',fontSize: 18, fontWeight: 'bold', paddingTop: 15, paddingLeft: 5}}>{props.itemName}</Text>
                            <Text style={{color: '#92A0A8', fontSize: 12, paddingLeft: 5}}>{props.piecesLeft} pieces left.</Text>                                  
                        </View>
                </View>
                
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item:{
        height: 200, 
        width: 360, 
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
        width: 315,
        height: 100,
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
