import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";


export interface IUser {
    userId: number, 
    username: string, 
    password: string,
    email:string, 

}

export interface IDuePayments{
    itemName: string; 
    requiredCollectible: number; 
    dueStatus: Boolean
}

export const RestAPI = (): [(config: AxiosRequestConfig<any>) => void, boolean, string, IUser | any, IDuePayments | any] => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [target_user, setUser] = useState<IUser[]>(); 
    const [target_dues, setDues] = useState<IDuePayments[]>(); 


    function sendRequest(config: AxiosRequestConfig<any>) {
        setLoading(true);

        axios(config)
            .then((response) => {
                setError('');
                console.log(response);
                setUser(response.data); //YOU NEED TO ADD THIS TO PUT ALL RESPONSES TO THE USESTATE
                setDues(response.data)
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
    }

    



    return [sendRequest, loading, error, target_user, target_dues];

}