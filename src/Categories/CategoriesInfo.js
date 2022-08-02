import { View, Text, Image, useColorScheme, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import FastImage from 'react-native-fast-image'

const CategoriesInfo = ({ navigation, item }) => {

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: '2%'
    }}>
      <TouchableOpacity onPress={() => {
        navigation.navigate("CategoriesDetails", {
          categoriesName: item.strCategory
        })
      }} style={{
        width: '95%',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 2,
        borderColor: '#a4b0be',
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '5%',
        paddingRight: '5%'
      }}>

        <FastImage
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginRight: '5%',
          }}
          source={{
            uri: item.strCategoryThumb,
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />

        <Text style={{
          color: Colors.black,
          fontSize: 20
        }}>
          {item.strCategory}
        </Text>

      </TouchableOpacity>
    </View>
  )
}

export default CategoriesInfo