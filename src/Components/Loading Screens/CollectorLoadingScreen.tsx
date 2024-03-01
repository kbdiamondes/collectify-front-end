import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CheckScreenNavigationprop } from '../../../App';

const CollectorLoadingScreen = () => {
  


  const navigation = useNavigation<CheckScreenNavigationprop>();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('CollectorTabNavigator', {screen: 'Collection'})
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
       <View style={styles.container}>
           <ActivityIndicator size="large" color="#0000ff"/>
        </View>
        
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999, // Ensure it's above other content
  },
});

export default CollectorLoadingScreen;