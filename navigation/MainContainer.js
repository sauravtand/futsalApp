import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



//Screens
import HomeScreen from './Screens/HomeScreen'
import BookScreen from './Screens/BookScreen'
import PlayScreen from './Screens/PlayScreen'
import ProfileScreen from './Screens/ProfileScreen' 
import SplashScreen from './Screens/SplashScreen'





//for bottom tab navigation
const Tab=createBottomTabNavigator();
const Stack=createNativeStackNavigator();
export default function MainContainer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for SplashScreen
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
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
        },
        headerShown:false,
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
  