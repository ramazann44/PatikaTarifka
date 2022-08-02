import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriesDetailnfo from './CategoriesDetailnfo'
import IconII from 'react-native-vector-icons/Ionicons'

const CategoriesDetails = ({ navigation, route }) => {

  const { categoriesName } = route.params;

  const [categoriesData, setCategoriesData] = useState({});

  const getCategories = async () => {

    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + categoriesName);
    const json = await response.json();
    setCategoriesData(json.meals);

  }

  function renderItem({ item, index }) {

    return (
      <CategoriesDetailnfo
        navigation={navigation}
        item={item}
      />
    )

  }

  useEffect(() => {

    getCategories();

  }, [categoriesName])


  return (
    <SafeAreaView style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'orange',
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
          {categoriesName}
        </Text>

        <TouchableOpacity onPress={() => {
          navigation.navigate("Categories")
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
            Categories
          </Text>
        </TouchableOpacity>

      </View>

      <FlatList style={{
        width: '100%'
      }}
        data={categoriesData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

    </SafeAreaView>
  )
}

export default CategoriesDetails