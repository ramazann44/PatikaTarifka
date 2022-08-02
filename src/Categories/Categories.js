import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import CategoriesInfo from './CategoriesInfo'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Categories = ({ navigation }) => {

  const [categoriesData, setCategoriesData] = useState({});

  const getJobs = async () => {

    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const json = await response.json();
    setCategoriesData(json.categories);

  }

  function renderItem({ item, index }) {

    return (
      <CategoriesInfo
        navigation={navigation}
        item={item}
      />
    )

  }

  useEffect(() => {

    getJobs();

  }, [])


  return (
    <SafeAreaView style={{
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: 'orange',
    }}>

      <Text style={{
        width: '100%',
        padding: '2%',
        backgroundColor: Colors.white,
        color: 'orange',
        fontSize: 20,
        marginBottom: '2%',
        textAlign:'center'
      }}>Categories</Text>



      <FlatList style={{
        width:'100%',
        marginRight:'2%'
      }}
        data={categoriesData}
        renderItem={renderItem}
      />



    </SafeAreaView>
  )
}

export default Categories