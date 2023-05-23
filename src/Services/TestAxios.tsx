
import axios from "axios";
import { Key, useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { RestAPI, IUser } from "./RestAPI";



export default function TestApp(){
    const [sendRequest, loading, error, target_user] = RestAPI(); 

    useEffect(() => {
        sendRequest(
            {
                method: 'GET',
                url: "http://localhost:8080/users"
            }
        )
    },[] )

    
    return(
        <View>
        {target_user ? target_user.map((user: IUser, index: Key)=>(
            <Text style={{color: '#000'}} key={index}>{user.email}, {user.username}</Text>
        )):null}
    </View>
    
    );

    
}


/*




*/
