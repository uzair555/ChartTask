import {Container} from 'native-base';
import React, {useEffect, useState} from 'react';
import {FlatList, StatusBar, StyleSheet, TextInput, View} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {COLORS} from '../../Component/Constant/Color';
import {FONTS} from '../../Component/Constant/Font';
import database from '@react-native-firebase/database';
import {useSelector} from 'react-redux';
import Navigation from '../../Service/Navigation';
import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons/FontAwesome';
const listData = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle: 'Hey there, how are you?',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle: 'Where are you?',
  },
  {
    name: 'Jenifar Lawrence',
    avatar_url:
      'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
    subtitle: 'I am good, how are you?',
  },
  {
    name: 'Tom Holland',
    avatar_url:
      'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    name: 'Robert',
    avatar_url:
      'https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/male-poses-squint.jpg',
    subtitle: 'Where does it come from?',
  },
  {
    name: 'downey junior',
    avatar_url:
      'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg',
    subtitle: 'Where can I get some?',
  },
  {
    name: 'Ema Watson',
    avatar_url:
      'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    subtitle: 'I am good, how are you?',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle:
      ' If you use this site regularly and would like to help keep the site',
  },
  {
    name: 'Jenifar Lawrence',
    avatar_url:
      'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
    subtitle: 'Why do we use it?',
  },
  {
    name: 'Tom Holland',
    avatar_url:
      'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
    subtitle:
      ' If you use this site regularly and would like to help keep the site',
  },
];

const AllUser = () => {
  const {userData} = useSelector(state => state.allDataReducer);

  const [search, setsearch] = useState('');
  const [allUser, setallUser] = useState([]);
  const [allUserBackup, setallUserBackup] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = () => {
    database()
      .ref('users/')
      .once('value')
      .then(snapshot => {
        console.log('all User data: ', Object.values(snapshot.val()));
        setallUser(
          Object.values(snapshot.val()).filter(it => it.id != userData.id),
        );
        setallUserBackup(
          Object.values(snapshot.val()).filter(it => it.id != userData.id),
        );
      });
  };

  const searchuser = val => {
    setsearch(val);
    setallUser(allUserBackup.filter(it => it.name.match(val)));
  };

  const createChatList = data => {
    database()
      .ref('/chatlist/' + userData.id + '/' + data.id)
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());

        if (snapshot.val() == null) {
          let roomId = uuid.v4();
          let myData = {
            roomId,
            id: userData.id,
            name: userData.name,
            img: userData.img,
            emailId: userData.emailId,
            about: userData.about,
            lastMsg: '',
          };
          database()
            .ref('/chatlist/' + data.id + '/' + userData.id)
            .update(myData)
            .then(() => console.log('Data updated.'));

          delete data['password'];
          data.lastMsg = '';
          data.roomId = roomId;
          database()
            .ref('/chatlist/' + userData.id + '/' + data.id)
            .update(data)
            .then(() => console.log('Data updated.'));

          Navigation.navigate('SingleChat', {receiverData: data});
        } else {
          Navigation.navigate('SingleChat', {receiverData: snapshot.val()});
        }
      });
  };

  const renderItem = ({item}) => (
    <ListItem
      onPress={() => createChatList(item)}
      bottomDivider
      containerStyle={styles.listStyle}>
      <Avatar
        source={{uri: item.img}}
        rounded
        title={item.name}
        size="medium"
      />
      <ListItem.Content>
        <ListItem.Title style={{fontFamily: FONTS.Medium, fontSize: 14}}>
          {item.name}
        </ListItem.Title>
        <ListItem.Subtitle
          style={{fontFamily: FONTS.Regular, fontSize: 12}}
          numberOfLines={1}>
          {item.about}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <Container style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      
  <View style={styles.searchContainer}>
        <Icon name="search" size={20} color={COLORS.black} style={styles.searchIcon} /> 
        <TextInput 
          style={styles.searchInput}
          placeholder="Search by name..."
          onChangeText={val => searchuser(val)}
          value={search}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={allUser}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default AllUser;

const styles = StyleSheet.create({
  searchContainer: {
    elevation: 2,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    flexDirection:"row",
    // justifyContent:"center",
    alignItems:"center"
  },
  searchInput: {
    fontSize: 15,
    fontFamily: FONTS.Regular,
    color: COLORS.black,
    opacity: 0.7,
  },
  listStyle: {paddingVertical: 7, marginVertical: 2},
});
