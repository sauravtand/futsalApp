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

const CARD_WIDTH = sizes.width - 80;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

export default function BookingList({list, navigation}) {
  return (
    <FlatList
      data={list}
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={i => i.id}
      style={{borderWidth: 0, borderColor: 'red', flex: 1, marginBottom: 70}}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          
            <View style={[styles.card, shadow.dark]}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    borderWidth: 0,
                    borderColor: 'red',
                    height: 120,
                    width: 170,
                    left: 20,
                    top: 20,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      name="map-marker"
                      size={20}
                      style={{color: 'black'}}
                    />
                    <Text style={{color: 'black', left: 10}}>{item.title}</Text>
                  </View>
                  <View style={{flexDirection: 'row', top: 10}}>
                    <Icon name="calendar" size={20} style={{color: 'black'}} />
                    <Text style={{color: 'black', left: 10}}>{item.date}</Text>
                  </View>
                  <View style={{flexDirection: 'row', top: 20}}>
                    <Icon name="clock-o" size={20} style={{color: 'black'}} />
                    <Text style={{color: 'black', left: 10}}>{item.time}</Text>
                  </View>
                  <View style={{flexDirection: 'row', top: 30}}>
                    <Image source={require('../Screens/images/field.png')} style={{height:20,width:20,resizeMode:'cover'}}/>
                    <Text style={{color: 'black', left: 10}}>{item.type}</Text>
                  </View>
                  <View style={{flexDirection: 'row', top: 40}}>
                    <Text style={{color:"black"}}>Booking Status:</Text>
                    <Text style={{color: 'black', left: 10,fontWeight:'bold'}}>{item.status}</Text>
                  </View>
                  <View style={{flexDirection: 'row', top: 50}}>
                  <Text style={{color:"black"}}>Payment method:</Text>
                    <Text style={{color: 'black', left: 10,fontWeight:'bold'}}>{item.method}</Text>
                  </View>
                 
                
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate("BookingDetails")}>
                  <Image source={require('../Screens/images/angle-right.png')} style={{height:20,width:20,left:130,top:15}}/>
                </TouchableOpacity>
               
                
              </View>
              <TouchableOpacity> 
              <View
                  style={{
                    borderWidth: 0,
                    borderRadius:6,
                    height: 40,
                    top: 100,
                    left: 120,
                    width: 100,
                    backgroundColor: '#C11919',
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: 'white',
                      fontSize: 12,
                      fontWeight: 'bold',
                      top: 10,
                    }}>
                    Cancel
                  </Text>
                </View>
                </TouchableOpacity>
            </View>
         
        );
      }}
    />
  );
}
const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: 280,
    marginVertical: 10,
    backgroundColor: '#FEFEFE',
    borderRadius: 16,
    alignSelf:'center'
  },

  titleBox: {
    position: 'absolute',
    top: CARD_HEIGHT - 80,
    left: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
  location: {
    fontSize: 10,
    color: colors.white,
  },
  description: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.white,
    //
  },
});
