import { View, Text, Linking, SafeAreaView, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import FastImage from 'react-native-fast-image'
import IconII from 'react-native-vector-icons/Ionicons'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const FullDetails = ({ navigation, route }) => {

  const { id } = route.params;

  const [foodData, setFoodData] = useState({});

  const getFood = async () => {

    const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
    const json = await response.json();
    setFoodData(json.meals[0]);

  }

  useEffect(() => {

    getFood();

  }, [id])

  return (
    <SafeAreaView style={{
      width: '100%',
      height: '100%',
      backgroundColor: Colors.light,
    }}>

      <View style={{
        width: '100%',
        backgroundColor: 'white',
        padding: '2%',
        alignItems: 'center',
        flexDirection: 'row'
      }}>

        <Text style={{
          fontSize: 24,
          color: 'orange',
          fontWeight: 'bold',
          position: 'absolute',
          width: '100%',
          textAlign: 'center'
        }}>
          Detail
        </Text>

        <TouchableOpacity onPress={() => {
          navigation.navigate("CategoriesDetails", {
            categoriesName: foodData.strCategory
          })
        }} style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <IconII
            name='chevron-back'
            size={24}
            color='orange'
          />

          <Text style={{
            fontSize: 14,
            color: 'orange',
            marginLeft: '2%'
          }}>
            Meals
          </Text>
        </TouchableOpacity>

      </View>

      <FastImage
        style={{
          width: '100%',
          height: '25%',
        }}
        source={{
          uri: foodData.strMealThumb,
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <View style={{
        padding: '2%',
        width: '100%'
      }}>

        <Text style={{
          fontSize: 20,
          color: '#8B0000',
          fontWeight: 'bold'
        }}>
          {foodData.strMeal}
        </Text>

        <Text style={{
          fontSize: 16,
          color: '#8B0000',
          fontWeight: 'bold'
        }}>
          {foodData.strArea}
        </Text>

      </View>

      <View style={{
        width: '100%',
        height: '57%'
      }}>
        <ScrollView style={{
          borderWidth: 1,
          borderColor: 'gray',
          padding: '1%',
          marginTop: '1%'
        }}>

          <Text style={{
            color:'black'
          }}>
            {foodData.strInstructions}
          </Text>

        </ScrollView>

        <TouchableOpacity onPress={() => {
          Linking.openURL(foodData.strYoutube)
        }} style={{
          backgroundColor: 'red',
          alignItems: 'center',
          padding: '2%',
          borderRadius: 20,
          marginTop: '2%'
        }}>
          <Text style={{
            color: 'white',
            fontSize: 20
          }}>
            Watch on Youtube
          </Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )
}

export default FullDetails