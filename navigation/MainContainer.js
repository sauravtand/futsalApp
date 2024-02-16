import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
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
      <Tab.Navigator
      screenOptions={{
        tabBarShowLabel:false,
        tabBarStyle:{
          position:'absolute',
          backgroundColor:'#FEFEFE',
          bottom:1,
          height:65,
        }
      }}
      >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:({focused})=>(
         <View style={{alignItems:'center',justifyContent:'center',top:10}}>
           <Image source={require('../assets/pictures/home.png')}
           resizeMode='contain'
           style={{
            width:25,
            height:25,
            bottom:5,
            tintColor:focused? '#08C208':'#748c94'
           }}
            />
           <Text style={{color:focused ? '#08C208':'#748c94',fontSize:16,bottom:5}}>Home</Text>
         </View>
        ),
      }}/>
      <Tab.Screen name="Book" component={BookScreen} options={{
        tabBarIcon:({focused})=>(
         <View style={{alignItems:'center',justifyContent:'center',top:10}}>
           <Image source={require('../assets/pictures/field.png')}
           resizeMode='contain'
           style={{
            width:25,
            height:25,
            bottom:5,
            tintColor:focused? '#08C208':'#748c94'
           }}
            />
           <Text style={{color:focused ? '#08C208':'#748c94',fontSize:16,bottom:5}}>Book</Text>
         </View>
        ),
      }}/>
      <Tab.Screen name="Play" component={PlayScreen} options={{
        tabBarIcon:({focused})=>(
         <View style={{alignItems:'center',justifyContent:'center',top:10}}>
           <Image source={require('../assets/pictures/users.png')}
           resizeMode='contain'
           style={{
            width:25,
            height:25,
            bottom:5,
            tintColor:focused? '#08C208':'#748c94'
           }}
            />
           <Text style={{color:focused ? '#08C208':'#748c94',fontSize:16,bottom:5}}>Play</Text>
         </View>
        ),
      }}/>
      <Tab.Screen name="User" component={ProfileScreen}options={{
        tabBarIcon:({focused})=>(
         <View style={{alignItems:'center',justifyContent:'center',top:10}}>
           <Image source={require('../assets/pictures/circle-user.png')}
           resizeMode='contain'
           style={{
            width:25,
            height:25,
            bottom:5,
            tintColor:focused? '#08C208':'#748c94'
           }}
            />
           <Text style={{color:focused ? '#08C208':'#748c94',fontSize:16,bottom:5}}>User</Text>
         </View>
        ),
      }}/>
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}
  