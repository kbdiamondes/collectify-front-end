import { View, StyleSheet,Text } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import {Ionicons} from '@expo/vector-icons'
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CheckScreenNavigationprop } from "../../../App";

export default function ClientDashboard(){
    const auth = useContext(AuthContext); 
    
    const navigation = useNavigation<CheckScreenNavigationprop>();

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.square}/>
                <View style={{alignItems:'flex-start'}}>
                    <Text style={{ color:'#363636', fontSize:hp(1.5)}}>Hello {auth?.user.username}</Text>
                    <Text style={{color: '#92A0A8', fontSize: hp(2), fontWeight: 'bold'}}>Welcome Back!</Text>              
                </View>


            </View>

            <View style={styles.main}>
                <View style={styles.body}>

                    <View style={styles.item}>

                    <View style={{alignItems:'flex-start'}}>
                        <Text style={{ color:'#363636', fontSize:hp(1.2)}}>Your total due amount</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{marginTop: hp(.5), color: '#92A0A8', fontSize: hp(4), fontWeight: 'bold'}}>P55,250.00</Text>     
                            <View style={{alignItems: 'center'}}><Ionicons name="eye" color="#000000" marginLeft={hp(2)} size={20}/></View>
                            
                        </View>
                    </View>


                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.button}>
                            <Text style={styles.buttonLabel}>Pay your dues</Text>
                        </View>

                        <View style={styles.button}>
                            <Text style={styles.buttonLabel}>Recent contracts</Text>
                        </View>
                    </View>
                    </View>


                    <View style={styles.miniButtonContainer}>

                        <View style={{justifyContent: 'center'}}>
                            <Pressable onPress={()=>navigation.navigate('DuePayments')}>
                            <View style={styles.miniButton}>
                                <Ionicons name="cash" color="#444DD8"  size={hp(4)}/>
                            </View>
                            <View><Text style={{color: '#000000', fontSize: hp(1.5), fontWeight: 'bold'}}>Dues</Text></View>
                            
                            </Pressable>
                        </View>

                        <View style={{justifyContent: 'center'}}>
                            <Pressable onPress={()=>navigation.navigate('ScheduledPayments')}>
                            <View style={styles.schedulesButton}>
                                <Ionicons name="calendar" color="#DBC678"  size={hp(4)}/>
                            </View>
                            <View><Text style={{color: '#000000', fontSize: hp(1.5), fontWeight: 'bold'}}>Schedules</Text></View>
                            
                            </Pressable>
                        </View>

                        <View style={{justifyContent: 'center'}}>
                            <Pressable onPress={()=>navigation.navigate('PaymentReminders')}>
                            <View style={styles.remindersButton}>
                                <Ionicons name="warning" color="#965E65"  size={hp(4)}/>
                            </View>
                            <View><Text style={{color: '#000000', fontSize: hp(1.5), fontWeight: 'bold'}}>Reminders</Text></View>
                            
                            </Pressable>
                        </View>

                        <View style={{justifyContent: 'center'}}>
                            <Pressable onPress={()=>navigation.navigate('TransactionHistory')}>
                            <View style={styles.duesButton}>
                                <Ionicons name="receipt" color="#444DD8"  size={hp(4)}/>
                            </View>
                            <View><Text style={{color: '#000000', fontSize: hp(1.5), fontWeight: 'bold'}}>History</Text></View>
                            
                            </Pressable>
                        </View>

                        <View style={{justifyContent: 'center'}}>
                            <Pressable onPress={()=>navigation.navigate('PaymentReminders')}>
                            <View style={styles.schedulesButton}>
                                <Ionicons name="book" color="#DBC678"  size={hp(4)}/>
                            </View>
                            <View><Text style={{color: '#000000', fontSize: hp(1.5), fontWeight: 'bold'}}>Records</Text></View>
                            
                            </Pressable>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                        <View style={{marginTop: hp(2), marginBottom: hp(2),  alignItems:'flex-start'}}><Text style={{fontSize: hp(2)}}> Recent Transactions</Text></View>
                    </View>

                    <View style={styles.itemTransaction}>
                        <View style={styles.itemLeft}>
                            <View style={styles.square}/>
                                <View style={styles.itemText}>
                                    <Text style={{color:'#363636', fontSize: hp(1.5)}}>John Doe</Text>
                                    <Text style={{color: '#92A0A8', fontSize: hp(1.2)}}>Pay Dues</Text>                                  
                                </View>

                            <View style={styles.textRightContainer}>
                                <View style={styles.textRightContainer}>
                                    <Text style={{color: '#363636', fontWeight: 'bold', fontSize: hp(2)}}>-P4500.00</Text>
                                    <Text style={styles.textRightText}>25-12-2023 5:00pm</Text>
                                </View>
                            </View>
                        </View>
                    
                    </View>

                </View>

                


            </View>

            
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: hp(100)  
    },
    header:{
        flexDirection: 'row', 
        height:hp(10), 
        marginLeft: hp(5), 
        marginRight: hp(5), 
        marginTop: hp(3), 
    }, 
    item:{
        padding: hp(2.5),
        height: hp(18), 
        width: hp(40),
        backgroundColor: '#F5F7F9',
        borderRadius: 10, 
        marginBottom: hp(2),
        shadowColor: '#000', 
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2
    },
    itemTransaction:{
        flex: 1,
        backgroundColor: '#F5F7F9',
        padding: hp(2), 
        borderRadius: 15, 
        marginBottom: hp(2),
        shadowColor: '#000', 
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2
    },
    main:{
        flex: 0.550,
        height: hp(5),
        display: 'flex', 
        flexDirection: 'row', 
    }, 
    body:{ 
        flex: 1,
        width: wp(100), 
        paddingLeft: hp(5), 
        paddingRight: hp(5)
    }, 
    footer:{
        flex:0.3, 
        height: hp(50), 
        paddingLeft: hp(5)
    }, 
    square:{
        width: wp(10),  
        height: hp(5), 
        marginRight: hp(1.5),
        backgroundColor: '#92A0A8', 
        borderRadius: 25
    }, 
    textStyleHeader:{
        fontSize: hp(6), 
        fontWeight: 'bold', 
    },

    textStyleSmallest:{
        fontSize: hp(1.5),
    },

    textSmallestContainer:{ 
        marginTop: hp(2), 
        marginBottom: hp(1), 
        alignItems: 'center', 
        justifyContent: 'center', 

    },  
    textBoxStyle:{
        height: 50, 
        paddingLeft: hp(3),
        marginBottom: hp(1.5), 
        borderColor: '#F0F2F4', 
        borderWidth: 2,
        color:'#363636',
    },
    miniButton:{
        marginTop: hp(2), 
        marginRight: hp(2),
        backgroundColor: '#CFCFEE',
        width: hp(6.2),
        height: hp(6.2),
        alignItems: 'center', 
        alignContent: 'center',
        justifyContent: 'center', 
        borderRadius: 15, 
        shadowColor: '#000', 
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2
    }, 
    miniButtonContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    miniButtonLabel:{
        color: '#fff', 
        fontSize: hp(1.2)
    }, 
    button:{
        marginTop: hp(2), 
        marginRight: hp(2),
        backgroundColor: '#2C85E7',
        width: hp(13),
        height: hp(4),
        alignItems: 'center', 
        alignContent: 'center',
        justifyContent: 'center', 
        borderRadius: 520, 
    },
    buttonLabel:{
        color: '#fff', 
        fontSize: hp(1.2)
    },

    buttonUnfilled:{
        borderRadius: 5,
        borderWidth: 2, 
        borderColor: '#F0F2F4',
        height: hp(7), 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row', 
        backgroundColor: '#fff', 
        marginTop: '5%'
    },

    buttonUnfilledLabel:{
        color: '#4A5B6B', 
    }, 
    itemLeft:{
        flex: 1,
        flexDirection:'row',
        aligntItems: 'center', 
        flexWrap:'wrap'
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
    duesButton:{
        marginTop: hp(2), 
        marginRight: hp(2),
        backgroundColor: '#CFCFEE',
        width: hp(6.2),
        height: hp(6.2),
        alignItems: 'center', 
        alignContent: 'center',
        justifyContent: 'center', 
        borderRadius: 15, 
        shadowColor: '#000', 
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2
    }, 
    schedulesButton:{
        marginTop: hp(2), 
        marginRight: hp(2),
        backgroundColor: '#EBE9C8',
        width: hp(6.2),
        height: hp(6.2),
        alignItems: 'center', 
        alignContent: 'center',
        justifyContent: 'center', 
        borderRadius: 15, 
        shadowColor: '#000', 
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2
    }, 
    remindersButton:{
        marginTop: hp(2), 
        marginRight: hp(2),
        backgroundColor: '#EBE3E4',
        width: hp(6.2),
        height: hp(6.2),
        alignItems: 'center', 
        alignContent: 'center',
        justifyContent: 'center', 
        borderRadius: 15, 
        shadowColor: '#000', 
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2
    }, 

});

////