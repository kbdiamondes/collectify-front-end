
import axios from "axios";
import { Key, useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { RestAPI, IUser, IDuePayments } from "./RestAPI";



export default function TestApp(){
    const [sendRequest, loading, error, target_user, target_dues] = RestAPI(); 

    useEffect(() => {
        /*
        sendRequest({
            method: 'GET', 
            url: "http://localhost:8080/users"
        }),*/
        sendRequest({
            method: 'GET', 
            url: "http://localhost:8080/paymentDues"
        })
    },[] )

    
    return(
        <View>
        {target_user ? target_user.map((user: IUser, index: Key)=>(
            <Text style={{color: '#000'}} key={index}>{user.email}, {user.username}</Text>
        )):null}

        {target_dues ? target_dues.map((dues: IDuePayments, index: Key)=>(
            <Text style={{color: '#000'}} key={index}>{dues.itemName}, {dues.requiredCollectible}, {dues.dueStatus.toString()}</Text>
        )):null}
    </View>
    
    );

    
}


/*




*/
