import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, Pressable, StyleSheet, Image, Modal} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { CheckScreenNavigationprop } from "../../../../App";
import { AuthContext } from "../../../Context/AuthContext";
import { useContext, useEffect, useState } from "react";

export default function ClientProfileModals(){
    const navigation = useNavigation<CheckScreenNavigationprop>();
    const auth = useContext(AuthContext);

    const [isLoggedIn, setIsLoggedIn] = useState(auth?.user?.isLoggedIn);

    useEffect(() => {
      setIsLoggedIn(auth?.user?.isLoggedIn);
  
    }, [auth?.user?.isLoggedIn]);

    const logOut = async () => {
        try {
          auth?.logout();
          setIsLoggedIn(false);
          navigation.navigate('Login')
        } catch (error) {
          console.warn(error);
        } finally {
            console.assert("Logged out!")
        }
    };
        
        
        


    return(
        <SafeAreaView style={{ alignItems: 'center' }}>
        {isLoggedIn && ( // Display the sign out option only if the user is logged in
          <Pressable onPress={logOut}>
            <Text style={{ flexDirection: 'row', textAlignVertical: 'center', marginTop: hp(5) }}>Sign out</Text>
          </Pressable>
        )}
      </SafeAreaView>
    );

}
