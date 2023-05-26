import { SafeAreaView,View,  StyleSheet, Text, ScrollView, Pressable, Button } from "react-native";
import AssignCollectorList from "./Lists/AssignCollectorList";
import {Ionicons} from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import { CheckScreenNavigationprop } from "../../../App";

const availableCollectors = [
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 
    {
        collectorname: "John Doe", 
        collectoraddress: "Cebu City"
    }, 

]


//naa ni siyay parameter dapat (client_id)
export default function AssignCollectorScreen(){


    const navigation = useNavigation<CheckScreenNavigationprop>(); 
    
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.header}>Assign Collector</Text>
                <Text style={styles.subheader} >Prioritize your deals by assigning collectors to borrowers whom you have lent to.</Text>

                <ScrollView style={{height: '55%', paddingVertical: 25, marginTop: 17, marginBottom: 17}}>
                {
                    availableCollectors.map((item, index)=>{
                        return <AssignCollectorList key={index} collectorname={item.collectorname} collectoraddress={item.collectoraddress}/>; 
                    })
                }
                </ScrollView>
                <Text style={styles.reminder}><Ionicons name="checkmark-circle" color='#8FC152' size={15}/>  Select only available collectors.</Text>
                <Text style={styles.reminder}><Ionicons name="checkmark-circle" color='#8FC152' size={15}/>  Make sure to assign collectors with relevant expertise to the task.</Text>
                <Text style={styles.reminder}><Ionicons name="close-circle" color='#97231E' size={15}/>   Please review before assigning a collector for this task.</Text>
                
                <View style={styles.buttonContainer}>
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
        width: '100%', 
        height: '100%', 
        paddingVertical: 138, 
        paddingHorizontal: 26
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