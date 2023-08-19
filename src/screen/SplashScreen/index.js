import React, {useEffect, useState, useRef} from 'react';

import {View, StyleSheet, Animated} from 'react-native';
import {images} from '../../constant/images';
import {colors} from '../../constant/theme';

const SplashScreen = ({navigation}) => {
  const scale = useRef(new Animated.Value(10)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  Animated.sequence([
    Animated.timing(scale, {
      toValue: 1.2,
      duration: 2000,
      useNativeDriver: true,
    }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
  ]).start();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 3000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Animated.Image
        source={images.Splash}
        style={{
          width: '90%',
          height: 200,
          resizeMode: 'contain',
          opacity: opacity,
          alignSelf: 'center',
          transform: [
            {
              translateY: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [350, 250],
              }),
            },
          ],
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
});
