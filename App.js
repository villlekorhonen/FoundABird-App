import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './HomeScreen';
import AddScreen from './AddScreen';
import ListScreen from './ListScreen';
import WeatherScreen from './WeatherScreen';
import MapScreen from './MapScreen';
import AllBirdsScreen from './AllBirdsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#262626', 
          },
          headerTintColor: 'white', 
          
        }} >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false, 
          }}
        />
        <Stack.Screen name="NewBird" component={AddScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Database" component={AllBirdsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}