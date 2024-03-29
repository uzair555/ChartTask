import { Icon } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { useSelector } from 'react-redux'
import { COLORS } from '../Constant/Color'
import { FONTS } from '../Constant/Font'
import Navigation from '../../Service/Navigation'
import useTranslate from '../../hooks/useTranslat'

const HomeHeader = () => {
  const translate = useTranslate();

    const {userData} = useSelector(state => state.allDataReducer);
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',
        padding:10,paddingHorizontal:15,backgroundColor:COLORS.white,elevation:2,paddingVertical:15}}>
            <Text style={styles.logo}>ZENKODERS</Text>
            <View style={{alignItems:'center'}}>
                {/* <Icon 
                 name="notifications"
                 type="Ionicons"   
                 style={{color:COLORS.theme,marginRight:7}}
                /> */}
                <TouchableOpacity 
                style={{alignItems:'center'}}
                onPress={()=>Navigation.navigate("ProfileScreen")}
                >
                <Avatar 
                  source={{uri: userData.img}} 
                  rounded
                  size="small" 
                  
                  
                  />
                 <Text>{translate("Edit")}</Text> 
                 </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeHeader;

const styles = StyleSheet.create({
    logo: {
        fontFamily: FONTS.Bold,
        color: COLORS.theme,
        fontSize: 22,
      },
})
