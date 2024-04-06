import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import MainContainer from './navigation/MainContainer'



export default function App() {
  return (
     
    <MainContainer/> 
  )
}