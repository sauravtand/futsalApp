import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {sizes, spacing, shadow, colors} from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TOP_BOOKING } from '../data/constList';
import MyMatchList from './MyMatchList';


export default function MyGame({list}) {
  return (
   <View style={{flex:1,backgroundColor:'#E6E6E6'}}>
    <MyMatchList list={TOP_BOOKING} /> 
   </View>
  
  )
}