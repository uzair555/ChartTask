import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getBooksData} from '../../redux/reducers/dataReducer';
import {colors} from '../../constant/theme';
import {images} from '../../constant/images';
import GlobalStyle from '../../constant/GlobalStyle';
import Header from '../../component/Header';
import SearchBar from '../../component/SearchBar';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {Loader, bookData} = useSelector(state => state.allDataReducer);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    dispatch(getBooksData());
  }, []);
  const onRefresh = () => {
    dispatch(getBooksData());
  };

  useEffect(() => {
    setSearchResult(bookData);
  }, [bookData]);

  const handleSearch = searchText => {
    if (searchText) {
      const NewData = searchResult.filter(item => {
        const itemData = item?.title
          ?.toLowerCase()
          ?.match(searchText.toLowerCase());

        return itemData;
      });
      setSearchResult(NewData);
    } else {
      setSearchResult(bookData);
    }
  };

  const CardComponent = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen', item)}
        style={styles.cardStyle}>
        <View>
          <ImageBackground source={{uri: item.imageLink}} style={styles.imgCon}>
            <View style={styles.iconCon}>
              <Icon
                name={item.is_liked == true ? 'heart' : 'hearto'}
                size={20}
                color={colors.red}
                style={styles.icon}
              />
            </View>
          </ImageBackground>

          <View style={{marginTop: 6}}>
            <Text style={styles.titleStyle}>
              {item.title.length < 18
                ? item.title
                : item.title.substring(0, 18) + '...'}
            </Text>
          </View>
          <View style={styles.ratingCon}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={item.rating}
              fullStarColor={colors.gold}
              starSize={20}
            />
            <Text> {` (${item.reviews})`}</Text>
          </View>
          <Text style={styles.priceTxt}>{item.price} $</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem = ({item}) => {
    return <CardComponent item={item} />;
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <SearchBar onSearch={handleSearch} />

      {Loader ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={`${colors.loadColor}`} />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          numColumns={2}
          contentContainerStyle={{
            width: '100%',
            paddingTop: 10,
            marginLeft: 10,
          }}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => onRefresh()}
            />
          }
          renderItem={renderItem}
          ListEmptyComponent={() => (
            <Text style={{fontSize: 24, fontWeight: '900'}}>
              No Request at the moment
            </Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  loaderContainer: {
    flex: 1,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {marginRight: 20, marginLeft: 20, width: 147, marginBottom: 10},
  imgCon: {width: 147, height: 219, borderRadius: 5},
  iconCon: {
    width: 30,
    height: 30,
    backgroundColor: colors.WHITE,
    borderRadius: 30 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 5,
  },
  titleStyle: {fontSize: 14, fontWeight: '600', color: colors.black},
  ratingCon: {flexDirection: 'row', marginTop: 6},
  priceTxt: {fontSize: 12, fontWeight: '500', color: colors.black},
});
export default HomeScreen;
