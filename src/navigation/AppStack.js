import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { COLORS } from '../Component/Constant/Color';
import Home from '../Screen/Home';
import AllUser from '../Screen/User/AllUser';
import SingleChat from '../Screen/Home/SingleChat';
import Login from '../Screen/Auth/Login';
import Register from '../Screen/Auth/Register';
import ProfileScreen from '../Screen/User/Profile';
const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator 
    initialRouteName="Home"screenOptions={{ headerShown: false }} >
           <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AllUser" component={AllUser} />
        <Stack.Screen name="SingleChat" component={SingleChat} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
