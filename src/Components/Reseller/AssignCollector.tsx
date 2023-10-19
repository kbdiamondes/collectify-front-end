import { SafeAreaView,View,  StyleSheet, Text, ScrollView, Pressable, Button, FlatList } from "react-native";
import {Ionicons} from '@expo/vector-icons'; 
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { CheckScreenNavigationprop, RootStackParamList } from "../../../App";
import { Key, useContext, useEffect, useState } from "react";
import { ICollector, RestAPI } from "../../Services/RestAPI";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AssignCollectorList from "./Lists/AssignCollectorList";
import { heightPercentageToDP } from "react-native-responsive-screen";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from "react";
import { AuthContext } from "../../Context/AuthContext";
import { BASE_URL } from "../../../config";


//naa ni siyay parameter dapat (client_id)
export default function AssignCollectorScreen(){
    
    const auth = useContext(AuthContext);
    
    const [sendRequest, assignCollector, loading, error,client_user, reseller_user, collector_user] = RestAPI(); 
    useEffect(() => {
        sendRequest({ 
            method: 'GET', 
            url: BASE_URL+"/collectors"
        })
    },[] )


    const navigation = useNavigation<CheckScreenNavigationprop>(); 
    
    //Function to receive the collector ID that is mapped on the Flatlist
    const handleSendButton = (collectorId: number) => {
        // Do something with the collector ID
        console.log('Clicked collector ID:', collectorId);
      };

      
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize: hp(4), fontWeight: 'bold',color: '#203949'}}>Assign Collector</Text>
                <Text style={{fontSize: hp(1.8),flexWrap: 'wrap'}} >Prioritize your deals by assigning collectors to borrowers whom you have lent to.</Text>
            </View>

            <View style={styles.main}>
                <View style={styles.body}>
                    
                <FlatList
                    style={{height: '56%', paddingVertical: 5, marginTop: 12, marginBottom: 17}}
                    data={client_user}
                    keyExtractor={(collector: ICollector) => collector.collector_id.toString()}
                    renderItem={({ item: collector}) => (
                    <React.Fragment>
                        <AssignCollectorList collector_id={collector.collector_id} collectorname={collector.fullName} collectoraddress={collector.address} onSend={handleSendButton}/>
                    </React.Fragment>
                    )}
                />
                    <View style={styles.body2}>
                        <Text style={styles.messageStyle}><Ionicons name="checkmark-circle" color='#8FC152' size={15}/>  Select only available collectors.</Text>
                        <Text style={styles.messageStyle}><Ionicons name="checkmark-circle" color='#8FC152' size={15}/>  Make sure to assign collectors with relevant expertise to the task.</Text>
                        <Text style={styles.messageStyle}><Ionicons name="close-circle" color='#97231E' size={15}/>   Please review before assigning a collector for this task.</Text>
                    </View>   
                </View>
            </View>


            <View style={styles.footer}>

                <View>
                    <Pressable style={styles.button} onPress={()=>navigation.goBack()}>
                        <Text style={styles.buttonLabel}>Back</Text>
                    </Pressable>
                </View>

            </View>

        </SafeAreaView>
        
    ); 

}


const styles = StyleSheet.create({
    container:{
        flex:1, 
        height: hp(100), 
    }, 
    header:{
        flex:.150,  
        display: 'flex', 
        flexDirection: 'column', 
        marginTop: hp(10),
        paddingLeft: hp(4), 
        paddingRight: hp(4)
    }, 
    main:{
        flex:1, 
        display: 'flex', 
        flexDirection: 'row',
        paddingTop: hp(5), 
        paddingLeft: hp(2.5), 
        paddingRight: hp(2.5),
        marginBottom: hp(1)
    }, 
    body:{
        flex:1, 
        width: wp(100), 
    }, 
    body2:{
        flex:1, 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        marginLeft: hp(1),
        marginRight: hp(1), 
        marginTop: hp(1)
    }, 
    messageStyle:{
        fontSize: hp(1.8), 
        marginBottom: hp(1)
    }, 
    footer:{
        flex:.5, 
        height: hp(50), 
        marginTop: hp(2),
        justifyContent: 'center'
    }, 
    button:{
        height: hp(7),
        backgroundColor: '#2C85E7',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        margin: '5%'
    },

    buttonLabel:{
        color: '#fff', 
        fontSize: hp(2)
    },

}); 

/*
const styles = StyleSheet.create({
    container:{
        flex:1, 
        height: hp(100), 
        margin: hp(2)
    },
    headerContainer:{
        flex:2, 
        marginTop: hp(5) ,
        height: hp(50),
        marginBottom: hp(5)
    },
    header:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#203949'
    }, 
    subheader:{
        fontSize: 18, 
        color: '#707070', 
        flexWrap: 'wrap', 

    }, 
    main:{
        flex:12, 
        display: 'flex', 
        flexDirection: 'row'
    }, 
    itemLeft:{
        flex:1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        flexWrap: 'wrap'
    }, 

    footer:{
        flex: 5,
        height: hp(50)
    },
    reminder:{
        flex:1, 
        paddingHorizontal: hp(1.5), 
        flexWrap: 'wrap', 
        alignItems:'center'
    }, 
    buttonContainer:{ 
        height: 48, 
        backgroundColor: '#2C85E7',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        marginTop: 100
    }, 

    button:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexDirection: 'row'
    },

    buttonLabel:{
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: hp(1.5)
    },
})

*/
/*

                <FlatList
                    style={{height: '56%', paddingVertical: 5, marginTop: 12, marginBottom: 17}}
                    data={client_user}
                    keyExtractor={(collector: ICollector) => collector.collector_id.toString()}
                    renderItem={({ item: collector}) => (
                        
                        <AssignCollectorList collector_id={collector.collector_id} collectorname={collector.fullName} collectoraddress={collector.address} onSend={handleSendButton}/>

                    )}
                />

*/
/*

const styles = StyleSheet.create({
    container:{
        flex:1, 
        height: hp(100)
    },
    header:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#203949'
    }, 
    subheader:{
        fontSize: 18, 
        color: '#707070', 
        flexWrap: 'wrap', 

    }, 
    reminder:{
        paddingHorizontal: 15, 
        flexWrap: 'wrap', 
        alignItems:'center'
    }, 
    buttonContainer:{ 
        height: 48, 
        backgroundColor: '#2C85E7',
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 5, 
        marginTop: 100
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
        fontWeight: 'bold'
    },
})



*/
    

/*
//<ScrollView alwaysBounceVertical={false} style={{height: '56%', paddingVertical: 5, marginTop: 12, marginBottom: 17}}>

                {
                    availableCollectors.map((item, index)=>{
                        return <AssignCollectorList key={index} collectorname={item.collectorname} collectoraddress={item.collectoraddress}/>; 
                    })
                }

                */