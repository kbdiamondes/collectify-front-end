import { View, Text, StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Avatar } from '@rneui/themed';

type DashboardHeaderProps = {
    username: string; 
}

export default function DashboardHeader(user: DashboardHeaderProps){
    

    return(
        <View style={{flexDirection: 'row'}}>
                {generateAvatarFromUsername(user.username)}
                <View style={{alignItems:'flex-start'}}>
                    <Text style={{ color:'#363636', fontSize:hp(1.5)}}>Hello {user.username}</Text>
                    <Text style={{color: '#92A0A8', fontSize: hp(2), fontWeight: 'bold'}}>Welcome Back!</Text>              
                </View>
        </View>
        
    );
}

const generateAvatarFromUsername = (username: any) => {
    if (!username || typeof username !== 'string') return null;
  
    // Extracting the first and second capital letters from the username
    const matches = username.match(/[A-Z]/g);
    const initials = matches ? matches.slice(0, 2).join('') : '';
  
      // Generate a random color for the background
    const backgroundColor = getRandomColor();


    return (
      <Avatar
        size={32}
        rounded
        title={initials}
        containerStyle={[styles.circle, {backgroundColor}]}
      />
    );
  };

  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  

const styles = StyleSheet.create({
    circle:{
        width: wp(10.5),  
        height: hp(5), 
        marginRight: hp(1.5),
        backgroundColor: '#92A0A8', 
        borderRadius: 25
    }, 

});