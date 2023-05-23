import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";


export interface IUser {
    userId: number, 
    username: string, 
    password: string,
    email:string, 

}

export const RestAPI = (): [(config: AxiosRequestConfig<any>) => void, boolean, string, IUser | any] => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [target_user, setUser] = useState<IUser[]>(); 


    function sendRequest(config: AxiosRequestConfig<any>) {
        setLoading(true);

        axios(config)
            .then((response) => {
                setError('');
                console.log(response);
                setUser(response.data); //YOU NEED TO ADD THIS TO PUT ALL RESPONSES TO THE USESTATE
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
    }

    



    return [sendRequest, loading, error, target_user];

}