import { View, StyleSheet,Text, ActivityIndicator, FlatList, ScrollView } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../Context/AuthContext";
import { useContext, useEffect, useState } from "react";
import {Ionicons} from '@expo/vector-icons'
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CheckScreenNavigationprop } from "../../../App";
import { LinearGradient } from 'expo-linear-gradient';
import DashboardHeader from "../DashboardHeader";
import { BASE_URL } from "../../../config";
import { RestAPI } from "../../Services/RestAPI";
import axios from "axios";

export default function ResellerDashboard(){
    const [shown, setShown] = useState(false);
    const [selected, setSelected] = useState<Number>();
    const [totalDueAmount, setTotalDueAmount] = useState(123);
    const auth = useContext(AuthContext); 
    
    const navigation = useNavigation<CheckScreenNavigationprop>();

    const hideAmount = () => {
        setShown(!shown)
    }

    function formatNumberWithCommas(number: any) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }

    /* To work upon
    useEffect(() => {
        const fetchTotalDueAmount = async () => {
          try {
            const response = await axios.get(BASE_URL+ `/clients/${auth?.user.entityId}/total-due-amount`);
            setTotalDueAmount(response.data);
          } catch (error) {
            // Handle error, e.g., set error state
            console.error('Error fetching total due amount:', error);
          }
        };
    
        fetchTotalDueAmount();
      }, [auth?.user?.entityId]);
    */
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.secondaryContainer}>
            <View style={styles.header}>
                <DashboardHeader username={auth?.user?.username ?? ''}/>
            </View>

            <View style={styles.main}>
                <View style={styles.body}>


                <View style={{                        
                        shadowColor: '#000000', 
                        shadowOpacity: 0.2,                        
                        shadowOffset: {
                            width:0,
                            height: 2,
                        },
                        shadowRadius: 4,
                        elevation: 2,                        
                        }}>
                    <LinearGradient 
                            colors={['#1FA0FF', '#12DAFB', '#A7FDCC']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 2 }}
                            style={{
                            padding: hp(2.5),
                            borderRadius: 10, 
                            marginBottom: hp(2),
                            display:'flex', 
                            }}>
                        <View style={{alignItems:'flex-start'}}>

                                <Text style={{ color:'#141414', fontSize:hp(1.5)}}>Your total due amount</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                {shown ? (
                                    totalDueAmount && totalDueAmount > 0 ? (
                                        <Text style={{marginTop: hp(.5), color: '#141414', fontSize: hp(5), fontWeight: 'bold'}}>
                                        P{formatNumberWithCommas(totalDueAmount)}
                                        </Text>
                                    ) : (
                                        <Text style={{marginTop: hp(.5), color: '#141414', fontSize: hp(5), fontWeight: 'bold'}}>
                                        P0.00
                                        </Text>
                                    )
                                    ) : (
                                    <Text style={{marginTop: hp(.5), color: '#141414', fontSize: hp(5), fontWeight: 'bold'}}>
                                        P**********
                                    </Text>
                                    )}
                                    <View style={{alignItems: 'center'}}>
                                        <Pressable onPress={hideAmount}>
                                            {shown ? 
                                            (<Ionicons name="eye" color="#000000" marginLeft={hp(2)} size={20}/> )
                                            : ( <Ionicons name="eye-off" color="#000000" marginLeft={hp(2)} size={20}/>)}
                                            
                                        </Pressable>
                                    </View>                            
                                </View>
                            </View>
                            
                    </LinearGradient> 
                </View> 
                
                <View style={styles2.miniButtonContainer}>
                    <View style={styles2.miniButtonWrapper}>
                        <Pressable onPress={() => {navigation.navigate('ResellerTabNavigator', {screen: 'ActiveContracts'})}} style={styles2.miniButtonPressable}>
                        <View style={styles2.miniButton}>
                            <Ionicons name="newspaper" color="#444DD8" size={hp(4)} />
                        </View>
                        <Text style={styles2.textLabelStyle}>Contracts</Text>
                        </Pressable>
                    </View>

                    <View style={styles2.miniButtonWrapper}>
                    <Pressable onPress={()=>( navigation.navigate('ResellerTabNavigator', { screen: 'ItemsSold' }))} style={styles2.miniButtonPressable}>   
                        <View style={styles2.scheduleMiniButton}>
                            <Ionicons name="list" color="#DBC678"  size={hp(4)}/>
                        </View>
                        <Text style={styles2.scheduletextLabelStyle}>Listing</Text>
                        </Pressable>
                    </View>

                    <View style={styles2.miniButtonWrapper}>
                        <Pressable onPress={() => (navigation.navigate('ResellerTabNavigator', {screen: 'MyCollectors'}))} style={styles2.miniButtonPressable}>
                        <View style={styles2.reminderMiniButton}>
                        <Ionicons name="people" color="#965E65"  size={hp(4)}/>
                        </View>
                        <Text style={styles2.remindertextLabelStyle}>My Collector</Text>
                        </Pressable>
                    </View>

                    <View style={styles2.miniButtonWrapper}>
                        <Pressable onPress={() => (navigation.navigate('ResellerTabNavigator', { screen: 'CollectorCollection' }))} style={styles2.miniButtonPressable}>
                        <View style={styles2.miniButton}>
                            <Ionicons name="send" color="#444DD8"  size={hp(4)}/>
                        </View>
                        <Text style={styles2.textLabelStyle}>Collection</Text>
                        </Pressable>
                    </View>

                </View>


                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        
                        <View style={{marginTop: hp(2), marginBottom: hp(2),  alignItems:'flex-start'}}>
                            <Text style={{fontSize: hp(2)}}> Recent Transactions</Text>
                        </View>                

                    </View>
                    
                </View>

                

                
            </View>
         </View>
        </SafeAreaView>
    );
}

function formatDate(dateString:string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
}

/*
function RecentTransaction(){
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user, contract, scheduledReminders, transaction] = RestAPI(); 
    const auth = useContext(AuthContext);
 
    useEffect(() => {
        if (auth?.user.entityId) {
            sendRequest({
                method: 'GET',
                url: BASE_URL + "/transaction-history/client/" + auth?.user.entityId
            });
        } else {
            alert("Error: Missing user entityId");
        }
    },[]);

    return(

        <View style={styles3.container}>
            {loading ? (
                <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator style={{margin: hp(25)}}size="large" />
                </View>
            ) : error ? (
                <Text>{error}</Text>
            ) : transaction && transaction.length> 0 ? (
                <View style={styles3.container}>
                <FlatList
                  data={transaction}
                  keyExtractor={(item) => item.orderId}
                  renderItem={({ item }) => (
                        <RecentTransactionList
                        orderId={item.orderId}
                        clientName={item.clientName}
                        paymentDate={formatDate(item.paymentDate)}
                        amountPaid={item.amountPaid}
                        productName={item.productName}
                        />
                  )}
                />
              </View>


            ) : (
                <View style={styles3.container}>
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                      
                        <Ionicons name="alert" size={hp(10)} color="#9F9F9F" />
                        <Text style={{fontSize: hp(2), fontWeight: 'bold', color: '#9F9F9F'}}>No recent transactions yet.</Text>

                    </View>
                 </View>
            )}
        </View>

    );
}*/

const styles3 = StyleSheet.create({
    container:{
        flex:1, 
 

    }, 
    textHeader:{
        fontSize: hp(2),
        fontWeight: 'bold', 
        color: '#9F9F9F',
        padding: hp(1.2)
    },
    header:{
        justifyContent: 'flex-start',
        flexDirection: 'row', 
        height:hp(10), 
    }, 
    square:{
        width: wp(10),  
        height: hp(5), 
        marginRight: hp(1.5),
        backgroundColor: '#92A0A8', 
        borderRadius: 25
    }, 
});

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: hp(100),
        backgroundColor: '#F5F7F9'
    },
    secondaryContainer: {
        flex:1,
        height: hp(100),
        marginHorizontal: hp(2.5),
    }, 
    header:{
        flexDirection: 'row', 
        height:hp(10), 
        marginRight: hp(5), 
        marginTop: hp(3), 
    }, 
    item:{
        padding: hp(2.5),
        backgroundColor: '#F5F7F9',
        borderRadius: 10, 
        marginBottom: hp(2),
        shadowColor: '#000', 
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2,
        display:'flex', 
    },
    itemTransaction:{
        backgroundColor: '#F5F7F9',
        padding: 20, 
        borderRadius: 10, 
        marginBottom: 20,
        marginLeft: hp(1),
        marginRight: hp(1),
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
        width: wp(100),
        display: 'flex', 
        flexDirection: 'row', 
    }, 
    body:{ 
        flex: 1,
        width: wp(100), 
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
        marginLeft: hp(1.5),
        marginRight: hp(1.5),
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch', 
        justifyContent: 'space-between'
    },
    miniButtonLabel:{
        color: '#fff', 
        fontSize: hp(1.2)
    }, 
    button:{
        marginTop: hp(1), 
        marginRight: hp(2),
        backgroundColor: '#2C85E7',
        width: hp(13),
        height: hp(5),
        alignItems: 'center', 
        alignContent: 'center',
        justifyContent: 'center', 
        borderRadius: 5, 
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
    textLabelStyle:{
        color: '#000000', fontSize: hp(1), fontWeight: 'bold', alignSelf: 'center'
    },


});

const styles2 = StyleSheet.create({
    // Existing styles...
  
    miniButtonContainer: {
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
    },
    miniButtonWrapper: {
      alignItems: 'center',
    },
    miniButtonPressable: {
      alignItems: 'center',
    },
    miniButton: {
      marginTop: hp(2),
      backgroundColor: '#CFCFEE',
      width: hp(6.2),
      height: hp(6.2),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 4,
      elevation: 2,
    },
    textLabelStyle: {
      color: '#000000',
      fontSize: hp(1.5),
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: hp(1),
    },
    scheduleMiniButton: {
        marginTop: hp(2),
        backgroundColor: '#EBE9C8',
        width: hp(6.2),
        height: hp(6.2),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 4,
        elevation: 2,
      },
      scheduletextLabelStyle: {
        color: '#000000',
        fontSize: hp(1.5),
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: hp(1),
      },
      reminderMiniButton: {
        marginTop: hp(2),
        backgroundColor: '#EBE3E4',
        width: hp(6.2),
        height: hp(6.2),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 4,
        elevation: 2,
      },
      remindertextLabelStyle: {
        color: '#000000',
        fontSize: hp(1.5),
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: hp(1),
      },
  });

////


/*
                    <View style={styles.itemTransaction}>
                        
                        <View style={styles.itemLeft}>
                                <View style={styles.itemText}>
                                    <Text style={{color:'#363636', fontSize: hp(1.5)}}>John Doe</Text>
                                    <Text style={{color: '#92A0A8', fontSize: hp(1.2)}}>Pay Dues</Text>                                  
                                </View>

                            <View style={styles.textRightContainer}>
                                <View style={styles.textRight}>
                                    <Text style={{color: '#363636', fontWeight: 'bold', fontSize: hp(2)}}>-P4500.00</Text>
                                    <Text style={styles.textRightText}>25-12-2023 5:00pm</Text>
                                </View>
                            </View>
                        </View>
                    
                    </View>

*/