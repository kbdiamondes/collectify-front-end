import { useNavigation } from "@react-navigation/native";
import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import { Alert } from "react-native";
import { CheckScreenNavigationprop } from "../../App";

export interface IClient{
    client_id: number, 
    username: String, 
    password: String, 
    fullName: String, 
    address: String, 
    email: String, 
    contracts: Contract[];
}
export interface Contract{
    contract_id: number,
    orderid: String,
    username: String, 
    itemName: String, 
    dueAmount: number, 
    fullPrice: number, 
    isPaid: Boolean,
    isMonthly: Boolean,
}

export interface ICollector{
    collector_id: number, 
    username: String, 
    password: String, 
    fullName: String, 
    address: String, 
    email: String, 
    contracts: Contract[]
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
    reseller: {reseller_id: number} ,
    collector: {collector_id: number} , 
    contract: {contract_id: number}

}

export interface ScheduledReminder {
  id: number;
  reminderTitle: String;
  reminderDateTime: String;
  dueAmount: number;
  paid: Boolean;
}

export interface Transaction {
  orderId: string;
  amountPaid: number;
  paymentDate: string;
  transactionProof: {
    id: string;
    name: string;
    type: string;
    data: string; // This might be a file path, URL, or some form of data representation
  };
  productName: string;
  clientName: string;
}

export interface CollectionHistory{
  orderId: string; 
  collectedAmount: number; 
  collectionDate: string;
  paymentType: string; 
  itemName: string;
  reseller_name: string;
  client_username: string;
  collector_username: string;
  transactionProof:{
    id: string;
    name: string;
    type: string;
    data: string;
  };
}



export const RestAPI = (): [(config: AxiosRequestConfig<any>) => void, (idata:IData) => void, boolean, string, IClient | any, IReseller | any, ICollector | any, Contract | any, ScheduledReminder | any, Transaction | any, CollectionHistory | any] => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [client_user, setClientUser] = useState<IClient[]>([]); 
    const [reseller_user, setResellerUser] = useState<IReseller[]>(); 
    const [collector_user, setCollectorUser] = useState<ICollector[]>(); 
    const [contract, setContract] = useState<Contract[]>([]);
    const [scheduledReminders, setScheduledReminders] = useState<ScheduledReminder[]>([]); 
    const [data, setData] = useState<IData[]>();
    const [transaction, setTransaction] = useState<Transaction[]>([]);
    const [collectionHistory, setCollectionHistory] = useState<CollectionHistory[]>([]);
    const navigation = useNavigation<CheckScreenNavigationprop>();
    function sendRequest(config: AxiosRequestConfig<any>) {
        setLoading(true);

         axios(config)
            .then((response) => {
                setError('');
                console.log(response);
                setClientUser(response.data); //YOU NEED TO ADD THIS TO PUT ALL RESPONSES TO THE USESTATE
                setResellerUser(response.data);
                setCollectorUser(response.data);
                setContract(response.data);
                setScheduledReminders(response.data);
                setTransaction(response.data);
                setCollectionHistory(response.data);
                
                if (Array.isArray(response.data)) {
                  
                  //console.log("Collection Log:", response.data.collectionHistory);
              } else {
                  console.log("Response data is not an array:", response.data);
              }
                
            })
            .catch((error) => {
                setError(error.message);
                Alert.alert("Cannot connect to the server. Please try again later.")
                
            })
            .finally(() => setLoading(false))
    }

        //POST - USER
        function assignCollector(idata: IData) {
            setLoading(true);
            
            // Construct the URL with the collectorId as a query parameter
            const url = `http://192.168.134.53:8080/${idata.reseller.reseller_id}/contracts/${idata.contract.contract_id}/assign-collector?collectorId=${idata.collector.collector_id}`;
            
            const config = {
              headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
              },
            };
          
            axios
              .post(url, null, config) // You don't need a request body in this case
              .then((response) => {
                setData(response.data);
                console.log(response.data);
                console.log(idata);
                console.log("Connection success");
              })
              .catch((error) => {
                setError(error.response.data.message);
                console.log(error.response.data.message);
              })
              .finally(() => {
                setLoading(false);
              });
          }
          
        
        
          
          

    



    return [sendRequest, assignCollector,loading, error, client_user, reseller_user, collector_user, contract, scheduledReminders, transaction, collectionHistory];

}