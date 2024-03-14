import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';


export default function PriceChart({navigation}) {
  return (
    <View style={{borderWidth: 0, height: 810}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../Screens/images/left.png')}
          style={{
            height: 40,
            width: 40,
            left: 15,
            top: 20,
            resizeMode: 'cover',
          }}
        />
      </TouchableOpacity>
      <View
        style={{borderWidth: 0, top: 25, height: 100, flexDirection: 'row'}}>
        <Text
          style={{
            color: 'black',
            fontSize: 26,
            fontWeight: 'bold',
            left: 10,
            top: 25,
          }}>
          Price Chart
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('BookFutsal')}>
          <View
            style={{
              height: 60,
              width: 160,
              borderWidth: 0,
              top: 20,
              alignSelf: 'center',
              backgroundColor: '#01B460',
              borderRadius: 15,
              left: 80,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                top: 15,
              }}>
              BOOK NOW!
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{borderWidth: 0, top: 30, height: 120}}>
        <Text
          style={{color: 'black', fontWeight: 'bold', fontSize: 16, left: 15}}>
          Dhukhu Futsal Hub
        </Text>
        <View
          style={{
            borderWidth: 2,
            borderColor: '#D9D9D9',
            borderRadius: 10,
            height: 60,
            width: 370,
            alignSelf: 'center',
            top: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
              alignSelf: 'center',
              top: 15,
            }}>
            Pricing is subjected to change and is controlled by venue
          </Text>
        </View>
      </View>
      <View style={{borderWidth: 0, top: 30, height: 500}}>
        <Text
          style={{
            color: '#1178B2',
            fontWeight: 'bold',
            left: 20,
            top: 10,
            fontSize: 16,
          }}>
          Futsal 5a side
        </Text>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            top: 25,
            left: 20,
            fontSize: 18,
          }}>
          Sunday-Friday
        </Text>
        <View style={{borderBottomWidth:2,borderColor:'#D9D9D9',top:25,height:70,flexDirection:'row'}}>
           <Text style={{color:'black',fontSize:16,fontWeight:'bold',top:20,left:20}}>07:00 AM - 02:00 PM</Text>
           <Text style={{color:'black',fontSize:16,fontWeight:'bold',top:20,left:80}}>NPR 1500 / hour</Text>
        </View>
        <View style={{borderBottomWidth:2,borderColor:'#D9D9D9',top:25,height:70,flexDirection:'row'}}>
           <Text style={{color:'black',fontSize:16,fontWeight:'bold',top:20,left:20}}>02:00 PM - 08:00 PM</Text>
           <Text style={{color:'black',fontSize:16,fontWeight:'bold',top:20,left:80}}>NPR 2000 / hour</Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            top: 45,
            left: 20,
            fontSize: 18,
          }}>
          Saturday
        </Text>
        <View style={{borderBottomWidth:2,borderColor:'#D9D9D9',top:45,height:70,flexDirection:'row'}}>
           <Text style={{color:'black',fontSize:16,fontWeight:'bold',top:20,left:20}}>06:00 AM - 08:00 PM</Text>
           <Text style={{color:'black',fontSize:16,fontWeight:'bold',top:20,left:80}}>NPR 2000 / hour</Text>
        </View>
      </View>
    </View>
  );
}
