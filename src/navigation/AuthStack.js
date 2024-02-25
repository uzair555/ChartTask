import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { COLORS } from '../Component/Constant/Color';
import Login from '../Screen/Auth/Login';
import Register from '../Screen/Auth/Register';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator 
    
    initialRouteName="Login" headerMode="none" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
