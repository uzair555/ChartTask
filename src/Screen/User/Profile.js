import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../Component/Constant/Color';
import { FONTS } from '../../Component/Constant/Font';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, setUser } from '../../redux/reducers/dataReducer';
import SimpleToast from "react-native-simple-toast"
import database from '@react-native-firebase/database';
import useTranslate from '../../hooks/useTranslat';
import {withLocalize} from 'react-localize-redux';

const ProfileScreen = ({activeLanguage,setActiveLanguage}) => {
  const dispatch = useDispatch();
  const translate = useTranslate();
//   const {activeLanguage, setActiveLanguage} = route.params;s
  const { userData } = useSelector(state => state.allDataReducer);
  
 
  console.log(activeLanguage, 'Langggggs');

  const [lang, setLang] = useState(activeLanguage.code);
  
  const [updatedUserInfo, setUpdatedUserInfo] = useState({
    name: userData.name,
    email: userData.emailId,
    about: userData.about,
    // Add more fields as needed
  });

  const handleUpdateProfile = async () => {
   
    
  
    
    let updatedData = {
      name: updatedUserInfo.name,
      emailId: updatedUserInfo.email,
      about: updatedUserInfo.about,
     
    };
  let tempData ={
    id:userData.id,
    name: updatedUserInfo.name,
    emailId: updatedUserInfo.email,
    about: updatedUserInfo.about,
    img:userData.img,
    password:userData.password,
  }

    database()
      .ref('/users/' + userData.id) // Assuming userData contains the current user's information
      .update(updatedData)
      .then(() => {
        SimpleToast.show('Profile updated successfully!');
        dispatch(setUser(tempData));
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        SimpleToast.show('Failed to update profile. Please try again later.');
      });
  };
  

  const handleLogout = async () => {
    
    dispatch(removeUser());
    await Auth.logout();
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: userData.img }} style={styles.profileImage} />
        <Text style={styles.profileText}>{userData.name}</Text>
        <Text style={styles.profileText}>{userData.email}</Text>
        <Text style={styles.profileText}>{translate("how")}</Text>
       
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={updatedUserInfo.name}
          onChangeText={text => setUpdatedUserInfo({ ...updatedUserInfo, name: text })}
        />
         <View style={styles.horizontalLine}></View>
        <TextInput
          style={styles.input}
          placeholder="About"
          value={updatedUserInfo.about}
          onChangeText={text => setUpdatedUserInfo({ ...updatedUserInfo, about: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={updatedUserInfo.email}
          onChangeText={text => setUpdatedUserInfo({ ...updatedUserInfo, email: text })}
        />
       
        <TouchableOpacity style={styles.btn} onPress={handleUpdateProfile}>
          <Text style={styles.btnText}>Update Profile</Text>
        </TouchableOpacity>
       
               <TouchableOpacity style={styles.logoutButton} onPress={()=>{
                 if (lang === 'so') {
                    setActiveLanguage('en');
                    setLang('en');
                  } else {
                    setActiveLanguage('so');
                    setLang('so');
                  }
               }}>
          <Text style={styles.buttonText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileText: {
    fontFamily: FONTS.Regular,
    fontSize: 16,
    marginBottom: 5,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    backgroundColor: COLORS.textInput,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontFamily: FONTS.Regular,
    fontSize: 16,
    color:COLORS.white
  },
  btnText: {
    color: '#fff',
    fontFamily : FONTS.SemiBold,
    fontSize: 14,
    marginTop: 2,
  },
  btn: {
    backgroundColor : COLORS.theme,
    width: '100%',
    height: 50,
    borderRadius: 30,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.theme,
    fontFamily : FONTS.SemiBold,
    fontSize: 14,
    marginTop: 2,
  },
  logoutButton: {
    backgroundColor : COLORS.white,
    width: '100%',
    height: 50,
    borderRadius: 30,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },
  
  horizontalLine: {
    height: 1,
    backgroundColor: COLORS.textInput,
    marginBottom: 10,
    opacity:0.2
  },
});

export default  withLocalize(ProfileScreen);;
