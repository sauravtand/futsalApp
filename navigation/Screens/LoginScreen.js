import { View,SafeAreaView, Text,Image } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <SafeAreaView style={{flex:1, alignItems:'center',justifyContent:'center',backgroundColor:'grey'}}>
      <Image source={require('../Screens/images/logo.png')}/>
      <Image source={require('../Screens/images/kickboy1.png')} style={{width:350,height:250}}/>
      <Text>LoginScreen</Text>
    </SafeAreaView>
  )
}