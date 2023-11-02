import {SafeAreaView, View, Text, StyleSheet, Pressable, GestureResponderEvent} from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type MyCollectorListProps = {
    key:number, 
    personName:String; 
    itemCollectible: number; 
    collectionStatus: String; 
}

export default function MyCollectorList(props: MyCollectorListProps){
    return(
        <SafeAreaView style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}/>
                    <View style={styles.itemText}>
                        <Text style={{color:'#363636', fontSize: hp(1.8)}}>{props.personName}</Text>
                        <Text style={{color: '#92A0A8', fontSize: hp(1.4)}}>Collectibles: Php{props.itemCollectible}</Text>                                  
                    </View>
                <View style={styles.textRightContainer}>
                    <View style={styles.textRightContainer}>
                        <Text style={{color: '#363636', fontWeight: 'bold', fontSize: hp(2)}}>{props.collectionStatus}</Text>
                        <Text style={styles.textRightText}>Status</Text>
                    </View>
                </View>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    item:{
        flex:1, 
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
        flex: 1,
        flexDirection:'row',
        aligntItems: 'center', 
        flexWrap:'wrap'
    },
    square:{
        flex: .8, 
        width: 100,
        height: 60,
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
    textRightContainer: {
        margin: hp(1.5), 
        justifyContent: 'center'
    }, 
    textRight:{
        alignItems: 'flex-start', 
    },
    textRightText:{
        color: '#363636', 
        fontSize: hp(1.1)
    },
}); 
