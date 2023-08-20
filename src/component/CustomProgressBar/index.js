import React from 'react';
import { View, StyleSheet } from 'react-native';

const CustomProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden', // Clip the progress bar
  },
  progress: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 10,
  },
});

export default CustomProgressBar;
