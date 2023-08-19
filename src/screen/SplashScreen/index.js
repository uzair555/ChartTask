import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const SplashScreen = ({navigation}) => {
  console.log(navigation);
  useEffect(() => {
    // navigation.navigate('HomeScreen');
    // alert('Called');
  }, []);
  return (
    <View style={{flex: 1}}>
      <Text>Splash Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text>App</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SplashScreen;
