import { View, Text } from 'react-native'
import React from 'react'

export default function HomeScreen(navigation) {
  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Text onPress={()=> alert('This is the Home Screen.')} style={{fontSize:26,fontWeight:'bold'}}>HomeScreen</Text>
    </View>
  )
}