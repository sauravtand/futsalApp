import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'




//Screens
import HomeScreen from './Screens/HomeScreen'
import BookScreen from './Screens/BookScreen'
import PlayScreen from './Screens/PlayScreen'
import ProfileScreen from './Screens/ProfileScreen' 


const Tab=createBottomTabNavigator();
export default function MainContainer() {
  return(
    <NavigationContainer> 
      <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Book" component={BookScreen}/>
      <Tab.Screen name="Play" component={PlayScreen}/>
      <Tab.Screen name="User" component={ProfileScreen}/>
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}
