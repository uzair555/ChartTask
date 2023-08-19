import React, {useEffect} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getBooksData} from '../../redux/reducers/dataReducer';

const HomeScreen = () => {
  const dispatch = useDispatch();
  // const {Loader, bookData} = useSelector(state => {
  //   return state.allDataReducer;
  // });
  const {Loader, bookData} = useSelector(state => state.allDataReducer);

  useEffect(() => {
    dispatch(getBooksData());
  }, []);
  console.log(Loader, bookData);
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default HomeScreen;
