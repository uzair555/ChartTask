import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';
import Chart from '../screen/Chart';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({route, navigation}) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={({route, navigation}) => ({
          headerShown: false,
        })}
      />

<Stack.Screen
        name="Chart"
        component={Chart}
        options={({route, navigation}) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
