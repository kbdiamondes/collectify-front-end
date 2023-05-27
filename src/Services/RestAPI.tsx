import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";


/*
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
*/

export interface IClient{
    client_id: number, 
    username: String, 
    password: String, 
    fullName: String, 
    address: String, 
    email: String, 
}

export interface ICollector{
    collector_id: number, 
    username: String, 
    password: String, 
    fullName: String, 
    address: String, 
    email: String, 
}

export interface IReseller{
    reseller_id: number, 
    username: String, 
    password: String, 
    fullName: String, 
    address: String, 
    email: String, 
}

export interface IData{
    paymentDues: number, 
    reseller: {reseller_id: number} ,
    collector: {collector_id: number} ,
    client: {client_id: number}; 

}

export const RestAPI = (): [(config: AxiosRequestConfig<any>) => void, (idata:IData) => void, boolean, string, IClient | any, IReseller | any, ICollector | any] => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [client_user, setClientUser] = useState<IClient[]>([]); 
    const [reseller_user, setResellerUser] = useState<IReseller[]>(); 
    const [collector_user, setCollectorUser] = useState<ICollector[]>(); 
    const [data, setData] = useState<IData[]>();

    function sendRequest(config: AxiosRequestConfig<any>) {
        setLoading(true);

         axios(config)
            .then((response) => {
                setError('');
                console.log(response);
                setClientUser(response.data); //YOU NEED TO ADD THIS TO PUT ALL RESPONSES TO THE USESTATE
                setResellerUser(response.data);
                setCollectorUser(response.data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
    }

        //POST - USER
        function assignCollector(idata: IData) {
            setLoading(true);
            const body = JSON.stringify(idata);
            const config = {
              headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
              },
            };
          
            axios
              .post("http://192.168.1.6:8080/sendCollectors", body, config)
              .then((response) => {
                setData(response.data);
                console.log(response.data)
              })
              .catch((error) => {
                setError(error.response.data.message);
                console.log(error.response.data.message);
              })
              .finally(() => {
                setLoading(false);
              });
          }
          

    



    return [sendRequest, assignCollector,loading, error, client_user, reseller_user, collector_user];

}