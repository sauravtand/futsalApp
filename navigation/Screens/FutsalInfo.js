import { View, Text,ImageBackground} from 'react-native'
import React from 'react'

export default function FutsalInfo({navigation}) {
  return (
    <View style={{borderWidth:0,borderColor:'red',height:800,width:420}}>
      <View style={{borderWidth:0,borderColor:'green',height:260,width:410,flex:1}}>
      <ImageBackground
                    source={require('../Screens/images/dhukhu2.jpg')}
                    style={{height:260, resizeMode:'cover',flex:1}}
                  />
      </View>
      
    </View>
  )
}