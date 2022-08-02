import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './Categories/Categories'
import CategoriesDetails from './Categories/CategoriesDetails'
import FullDetails from './Categories/FullDetails'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Categories" 
        component={Categories}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen 
        name="CategoriesDetails" 
        component={CategoriesDetails} 
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen 
        name="FullDetails" 
        component={FullDetails} 
        options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;