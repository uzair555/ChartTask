import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {images} from '../../constant/images';
import GlobalStyle from '../../constant/GlobalStyle';
import {colors} from '../../constant/theme';

const Header = () => {
  return (
    <View style={styles.headerCon}>
      <View>
        <Text style={styles.headingStyle}>Hi Nick</Text>
      </View>
      <View style={styles.imgStyle}>
        <Image source={images.Elilipse} style={GlobalStyle.imageContent} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headingStyle: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '600',
  },
  imgStyle: {width: 50, height: 50},
});
