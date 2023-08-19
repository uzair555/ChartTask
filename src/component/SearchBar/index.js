import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../constant/theme';

const SearchBar = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color={colors.black} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={colors.black}
        onChangeText={handleSearch}
        value={searchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 30,
    margin: 10,
    paddingHorizontal: 10,
    width: '85%',
    alignSelf: 'center',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default SearchBar;
