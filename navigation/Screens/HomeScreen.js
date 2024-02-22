import {View, Text,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import React from 'react';


export default function HomeScreen(navigation) {
  return (
    
    <View
      style={{
        borderRadius: 10,
        height: 160,
        width: 340,
        borderWidth: 0,
        alignSelf: 'center',
        top: 20,
        backgroundColor: '#FEFEFE',
        
      }}>
        <View style={{flexDirection:'row',width:340,height:20}}> 
      <View
        style={{
          backgroundColor: '#F3F3F3',
          width: 100,
          left: 20,
          top: 20,
          height: 25,
          justifyContent: 'center',
        }}>
        <Text style={{color: 'black', alignSelf: 'center', fontSize: 10}}>
          START PLAYING!
        </Text>
      </View>
      <TouchableOpacity>
      <View style={{borderWidth:1,left:130,height:30,top:30,width:90,alignItems:'center',borderRadius:10}}>
        
          <Text style={{color:'black', alignSelf:'center'}}>Create</Text> 
          </View>
          </TouchableOpacity>
      </View>
     
      <View>
      <View style={{ width: 110,left:20,top:30,height:25,justifyContent:'center'}}>
        <Text style={{color: 'black', alignSelf: 'center',fontSize:16,fontWeight:'bold'}}>
        Create Game
        </Text>
      </View>

      </View>
      <View style={{ width: 115,left:22,top:30,height:25,justifyContent:'center'}}>
        <Text style={{color: 'black', alignSelf: 'center',fontSize:10}}>
          Find opponent near you
        </Text>
      </View>
      <View style={styles.line}></View>
      <TouchableOpacity>
        <Text style={{color:'black',alignSelf:'center',top:30,textDecorationLine:'underline'}}>View My Schedule</Text>
      </TouchableOpacity>
      <View style={{top:70,paddingLeft:20,borderWidth:2,height:100,width:100,borderBottomColor:'white'}}><Text>Hello</Text></View>
    </View>
   
     

     

  );
}
const styles=StyleSheet.create({
  line: {
    borderBottomColor: '#F1E8E8', 
    borderBottomWidth: 1,
    width: '100%',
    height:20,
    top:20
  },

}

)