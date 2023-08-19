import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.mainContainer}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <StackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
