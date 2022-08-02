import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import IconII from 'react-native-vector-icons/Ionicons'

const CategoriesDetailnfo = ({ navigation, item }) => {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("FullDetails", {
                id: item.idMeal
            })
        }} style={{
            width: '96%',
            margin: '2%',
            justifyContent: 'center'
        }}>

            <FastImage
                style={{
                    width: '100%',
                    height: 200,
                    borderRadius: 10,
                }}
                source={{
                    uri: item.strMealThumb,
                    headers: { Authorization: 'someAuthToken' },
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />

            <Text style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                fontSize: 20,
                backgroundColor: 'black',
                opacity: 0.6,
                padding: '1%',
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'right',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10
            }}>
                {item.strMeal}
            </Text>

        </TouchableOpacity>
    )
}

export default CategoriesDetailnfo