
import axios from "axios";
import { Key, useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { IClient, RestAPI } from "./RestAPI";
import React from "react";



export default function TestApp(){
    const [sendRequest, loading, error, client_user, reseller_user, collector_user] = RestAPI(); 

    useEffect(() => {
        /*
        sendRequest({
            method: 'GET', 
            url: "http://localhost:8080/users"
        }),*/
        sendRequest({
            method: 'GET', 
            url: "http://192.168.1.6:8080/client"
        })
    },[] )

    
    return(
        <SafeAreaView style={{backgroundColor:'#2C85E7', width: '80%'}}>
            <View>

            <Text>Hello</Text>
            </View>
        </SafeAreaView>
    
    );

    
}


/*
            {
                target_user ? target_user.map((user: IUser, index: Key)=>(
                    <Text style={{color: '#000'}} key={index}>{user.email}, {user.username}</Text>
                )):null
            }

    {.map(()=>())}
        <View >
        {target_user ? target_user.map((user: IUser, index: Key)=>(
            <Text style={{color: '#000'}} key={index}>{user.email}, {user.username}</Text>
        )):null}

        {target_dues ? target_dues.map((dues: IDuePayments, index: Key)=>(
            <Text style={{color: '#000'}} key={index}>{dues.itemName}, {dues.requiredCollectible}, {dues.dueStatus.toString()}</Text>
        )):null}
    </View>

                    target_user?target_user.map((client:IClient, index: Key) => (
                    <Text key={index}>{client.client_id}, {client.fullName}, {client.address} </Text>
                )):null


*/
