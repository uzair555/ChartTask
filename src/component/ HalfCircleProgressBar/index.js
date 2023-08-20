import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HalfCircleProgressBar = ({ progress , diameter, strokeWidth, backgroundStrokeColor, progressStrokeColor}) => {
    const radius = diameter / 2;
    const circumference = Math.PI * radius;
    const progressLength = (circumference * progress) / 100;
  
    return (
      <View style={styles.container}>
        <View style={[styles.backgroundCircle, { width: diameter, height: diameter, borderWidth: strokeWidth, borderColor: backgroundStrokeColor }]} />
        <View
          style={[
            styles.progressCircle,
            {
              width: diameter,
              height: diameter,
              borderTopWidth: strokeWidth,
              borderRightWidth: strokeWidth,
              borderColor: progressStrokeColor,
              transform: [{ rotate: '-90deg' }],
            },
          ]}
        />
        <View
          style={[
            styles.progressMask,
            {
              width: radius,
              height: diameter,
              overflow: 'hidden',
            },
          ]}
        >
          <View style={[styles.progressMaskContent, { top: -radius, left: -radius, width: diameter, height: diameter }]}>
            <View
              style={[
                styles.progressMaskFill,
                {
                  width: diameter,
                  height: diameter,
                  borderTopWidth: strokeWidth,
                  borderRightWidth: strokeWidth,
                  borderColor: progressStrokeColor,
                  transform: [{ rotate: `${(progress * 180) / 100}deg` }],
                },
              ]}
            />
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    backgroundCircle: {
      position: 'absolute',
      borderRadius: 999,
      transform: [{ rotate: '-45deg' }],
    },
    progressCircle: {
      position: 'absolute',
      borderRadius: 999,
      transform: [{ rotate: '-45deg' }],
    },
    progressMask: {
      position: 'absolute',
      transform: [{ rotate: '45deg' }],
    },
    progressMaskContent: {
      position: 'absolute',
      overflow: 'hidden',
      transform: [{ rotate: '-45deg' }],
    },
    progressMaskFill: {
      position: 'absolute',
      borderTopLeftRadius: 999,
      borderBottomLeftRadius: 999,
      transform: [{ rotate: '0deg' }],
    },
  });
    
export default HalfCircleProgressBar;

