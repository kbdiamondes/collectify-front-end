import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, Image, StyleSheet, Pressable} from "react-native";
import { CheckScreenNavigationprop } from "../../App";
import { useNavigation } from "@react-navigation/native";

const ResellImagePlaceHolder = require('../../assets/vector-2.png');
const ClientImagePlaceHolder = require('../../assets/vector-3.png');
const CollectorImagePlaceHolder = require('../../assets/vector-4.png');

export default function TellMeAboutYourself(){
    const navigation = useNavigation<CheckScreenNavigationprop>(); 
    return(
        <SafeAreaProvider>
            <View style={styles.containerTop}>
                
                <Text style={styles.textHeader}>Tell us about yourself</Text> 
                <Text style={styles.textMultiline}>Select the business model that apply to you from the cards below</Text>               
            </View>
            <View style={styles.containerBottom} >
                <Pressable onPress={()=>navigation.navigate('SoldItems')}>
                    <View style={styles.box}> 
                        <View style={styles.imageContainer}>    
                                <Image source={ResellImagePlaceHolder}/>
                        </View>                       
                        <Text style={styles.containerTextHeader}>I want to Resell </Text>
                    </View>
                </Pressable>

                <Pressable onPress={()=>navigation.navigate('DuePayments')}>
                    <View style={styles.box}>
                        <View style={styles.imageContainer}>    
                                <Image source={ClientImagePlaceHolder}/>
                        </View>                       
                        <Text style={styles.containerTextHeader}>I want to Loan </Text>
                    </View>
                </Pressable>


                <Pressable onPress={()=>navigation.navigate('Collect')}>
                    <View style={styles.box}>
                        <View style={styles.imageContainer}>    
                            <Image source={CollectorImagePlaceHolder}/>
                        </View>                       
                        <Text style={styles.containerTextHeader}>I want to Collect</Text>
                    </View>
                </Pressable>

            </View>

            
          
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        paddingLeft: 20, 
        paddingTop: 10, 
        width: '80%',
        height: 40, 
        
    },
    textHeader:{
        fontSize:32,
        fontWeight: 'bold', 
        paddingTop: 70, 
        paddingHorizontal: 35, 
        color: '#203949'
    }, 

    textMultiline:{
        fontSize: 15,
        flexWrap: 'wrap',
        flexDirection: 'row', 
        paddingTop: 7, 
        paddingHorizontal: 35, 
        color: '#92A0A8'

    },
    containerTop:{
        width: 400, 
        height: 250, 
        backgroundColor: '#F5F7F9F5F7F9',
        alignItems: 'center', 
        justifyContent: 'center',
    }, 
    containerBottom:{
        width: 450, 
        height: 800, 
        backgroundColor: '#F5F7F9'
    }, 
    containerTextHeader:{
        width: 500,
        fontSize: 18,
        color: '#203949', 
        paddingHorizontal: 66,
        paddingTop: 100,
        justifyContent: 'center', 
        alignItems: 'center', 
        fontWeight: 'bold'
 
    },
    box:{
        width: 257, 
        height: 170, 
        marginHorizontal: 75,
        marginBottom: 15, 
        marginTop: 18, 
        backgroundColor: '#FFFFFF', 
        shadowColor: '#000', 
        shadowOffset: {
            width:0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2, 
        borderRadius: 10
    }, 

});