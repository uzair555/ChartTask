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
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import StackNavigator from './src/Navigation/StackNavigator';
import Navigation from './src/Service/Navigation';
import { store } from './src/redux/store';
import {LocalizeProvider} from 'react-localize-redux';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const settings = {
    languages: [
      {name: 'Somali', code: 'so'},
      {name: 'English', code: 'en'},
    ],
    options: {
      defaultLanguage: 'en',
      renderToStaticMarkup: false,
    },
  };
  return (
    <Provider store={store}>
          <LocalizeProvider initialize={settings} defaultLanguage="en">
      <NavigationContainer ref={r => Navigation.setTopLevelNavigator(r)}>
        <SafeAreaView style={styles.mainContainer}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <StackNavigator />
        </SafeAreaView>
      </NavigationContainer>
      </LocalizeProvider>
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
