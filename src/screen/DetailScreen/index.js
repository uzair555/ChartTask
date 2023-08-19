import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/Feather';
import {colors} from '../../constant/theme';
import GlobalStyle from '../../constant/GlobalStyle';

const DetailScreen = props => {
  const item = props?.route?.params;
  console.log(item, 'Detected');
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon
            name={'arrowleft'}
            size={20}
            color={colors.black}
            style={styles.icon}
          />
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.imgCon}>
            <Image
              source={{uri: item.imageLink}}
              style={[GlobalStyle.imageContent, {borderRadius: 10}]}
            />
          </View>

          <View style={styles.ratingContainer}>
            <View style={[styles.ratingStyle, {justifyContent: 'center'}]}>
              <Text
                style={[
                  styles.ratingTxt,
                  {
                    alignSelf: 'center',
                  },
                ]}>
                Rating
              </Text>
            </View>
            <Text style={styles.ratingTxt}>Reviews</Text>
            <Text style={styles.ratingTxt}>Price</Text>
          </View>

          <View style={styles.ratingContainer}>
            <View style={styles.ratingStyle}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={item.rating}
                fullStarColor={colors.gold}
                starSize={12}
                // selectedStar={onStarPress}
              />
            </View>
            <Text> {` (${item.reviews})`}</Text>
            <Text style={styles.ratingTxt}>{item.price} $</Text>
          </View>
        </View>

        <View style={styles.contentCon}>
          <Text style={styles.titleTxt}>{item.title}</Text>
          <View style={{marginTop: 20}}>
            <View style={styles.txtCon}>
              <Text style={styles.headingTxt}>Author:</Text>
              <Text style={styles.txt}>{item.author}</Text>
            </View>
            <View style={styles.txtCon}>
              <Text style={styles.headingTxt}>Country: </Text>
              <Text style={styles.txt}>{item.country}</Text>
            </View>
            <View style={styles.txtCon}>
              <Text style={styles.headingTxt}>Language: </Text>
              <Text style={styles.txt}>{item.language}</Text>
            </View>
            <View style={styles.txtCon}>
              <Text style={styles.headingTxt}>Year: </Text>
              <Text style={styles.txt}>{item.year}</Text>
            </View>
            <View style={styles.txtCon}>
              <Text style={styles.headingTxt}>Pages: </Text>
              <Text style={styles.txt}>{item.pages}</Text>
            </View>
          </View>
        </View>
        <View style={styles.btnCon}>
          <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => Linking.openURL(item.link)}>
            <Text style={styles.btnTxt}>View Details</Text>
            <IconF name={'external-link'} size={20} color={colors.WHITE} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  icon: {
    marginVertical: 20,
    marginLeft: '10%',
  },
  card: {
    backgroundColor: colors.WHITE,
    elevation: 10,
    width: 315,
    height: 498,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
  imgCon: {
    width: 275,
    height: 410,
    borderRadius: 10,
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 6,
    justifyContent: 'space-between',
    width: '80%',
  },
  ratingStyle: {
    width: 50,
  },
  ratingTxt: {fontSize: 12, fontWeight: '500', color: colors.black},
  contentCon: {marginTop: 20, marginLeft: '10%'},
  titleTxt: {fontSize: 22, fontWeight: '600', color: colors.black},
  txtCon: {flexDirection: 'row', width: '50%', marginTop: 5},
  headingTxt: {fontSize: 16, fontWeight: '600', color: colors.black},
  txt: {fontSize: 16, color: colors.black},
  btnCon: {marginTop: 20, alignItems: 'center', marginBottom: 50},
  btnStyle: {
    width: 320,
    height: 45,
    borderRadius: 100,
    backgroundColor: colors.loadColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnTxt: {color: colors.WHITE, paddingRight: 20, fontWeight: '500'},
});
export default DetailScreen;
