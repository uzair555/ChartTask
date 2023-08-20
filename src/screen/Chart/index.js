import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomProgressBar from '../../component/CustomProgressBar'; // Import the CustomProgressBar component
import HalfCircleProgressBar from '../../component/ HalfCircleProgressBar';
import SemiCircleProgress from '../../component/SemiCircleProgress';

const Chart = () => {
  const progress = 70; // Example progress value
  const data = [
    // { value: 80, color: '#ff0000' },
    { value: 45, color: 'red' },
    // { value: 25, color: '#0000ff' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom Progress Bar Example</Text>
      <CustomProgressBar progress={progress} />
    <View style={{alignSelf:'center'}}>

        <SemiCircleProgress
        strokeWidth={10}
        percentage={80}
        size={{ width: 150, height: 150 }}
        strokeColor="#007AFF"
        fontStyle={{
          fontSize: "20",
          fontFamily: "Arial",
          fill: "#04001b",
        }}
        hasBackground
        bgStrokeColor="#d3d3d3"
      />
     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Chart;
