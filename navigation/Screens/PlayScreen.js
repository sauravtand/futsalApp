import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Calendar from './Calendar'
import Booking from './Booking'
import Opponent from './Opponent'
import Match from './Match'

const Tab=createMaterialTopTabNavigator();
export default function PlayScreen() {
  return (
    <Tab.Navigator
     initialRouteName='Calendar'
     screenOptions={{
      tabBarLabelStyle: { fontSize: 12 },
      
     }}
    >
     <Tab.Screen name="Calendar" component={Calendar}/>
     <Tab.Screen name="Booking" component={Booking}/>
     <Tab.Screen name="Opponent" component={Opponent}/>
     <Tab.Screen name="Match" component={Match}/>
    </Tab.Navigator>
  )
}