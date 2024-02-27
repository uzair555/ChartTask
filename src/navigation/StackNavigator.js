import React, { useEffect, useState } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../Service/Auth';
import { setUser } from '../redux/reducers/dataReducer';
import Translator from '../translator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const dispatch = useDispatch();

    // const { login } = useSelector(state => state.allDataReducer);

    const {
      login
    } = useSelector((state) => {
      return state.allDataReducer;
    });
    
    const [loginChk, setloginChk] = useState(true);
  
  console.log(login,"Loginnnn ")
    useEffect(() => {
      getUser();
    }, []);
  
    const getUser = async () => {
       let data = await Auth.getAccount();
       if (data != null) {
          dispatch(setUser(data));
          setloginChk(false)
       }else{
          setloginChk(false)
       }
    }
  
    if (loginChk) {
      return null;
    }
  return (
    <Translator>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
      {/* <Stack.Screen name="Auth" component={AuthStack} /> */}
      {/* <Stack.Screen name="AppStack" component={AppStack} /> */}
      
      {!login ?  
          <Stack.Screen name="Auth" component={AuthStack} /> :
          <Stack.Screen name="AppStack" component={AppStack} /> }
     
     
    </Stack.Navigator>
    </Translator>
  );
};

export default StackNavigator;
