// BookContent.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function BookContent() {
  const [searchText, setSearchText] = useState('');

  const handleClearInput = () => {
    setSearchText('');
  };

  return (
  
    
      
   <View style={{borderWidth:0,borderColor:'red',backgroundColor:'#FEFEFE',height:190,width:380}}>
   <View
     style={{
       top: 10,
       borderWidth: 0,
       borderColor: 'black',
       width: 330,
       alignSelf: 'center',
       flexDirection: 'row',
       borderRadius: 10,
       backgroundColor: '#F3F3F3',
     }}>
     <TextInput
       value={searchText}
       onChangeText={text => setSearchText(text)}
       placeholder="Search For Futsal Venues"
       placeholderTextColor={'#000000'}
       style={{
         color: 'black',
         width: 290,
         borderColor: 'black',
         borderWidth: 0,
         paddingLeft: 15,
         fontSize: 12,
       }}
     />
     {searchText ? (
       <TouchableOpacity onPress={handleClearInput}>
         <Icon
           name="times-circle"
           size={20}
           style={{color: '#8D8A8A', left: 10, top: 15}}></Icon>
       </TouchableOpacity>
     ) : (
       <Icon
         name="search"
         size={20}
         style={{color: '#8D8A8A', left: 10, top: 15}}
       />
     )}
   </View>
   <View
     style={{
       borderWidth: 0,
       borderColor: 'black',
       top: 20,
       height: 100,
       width: 350,
       alignSelf: 'center',
       flexDirection: 'row',
     }}>
     <TouchableOpacity>
       <View
         style={{
           borderWidth: 2,
           borderColor: '#7F7F7F',
           height: 40,
           width: 40,
           left: 15,
           top: 10,
           alignItems: 'center',
           borderRadius: 10,
         }}>
         <Image
           source={require('../Screens/images/sort.png')}
           style={{height: 20, width: 20, resizeMode: 'cover', top: 7}}
         />
       </View>
     </TouchableOpacity>
     <TouchableOpacity>
       <View
         style={{
           borderWidth: 2,
           borderColor: 'black',
           width: 150,
           height: 40,
           left: 30,
           top: 10,
           borderRadius: 10,
           borderColor: '#7F7F7F',
           alignItems: 'center',
         }}>
         <View style={{borderWidth:0,borderColor:'black',width:140,flexDirection:'row',height:40}}>
           <Text style={{color: 'black', top: 5,left:25}}>Availability</Text>
           <Image
             source={require('../Screens/images/angledown.png')}
             style={{height: 15, width: 15,left:45,top:10}}
           />
         </View>
       </View>
     </TouchableOpacity>
     <TouchableOpacity>
       <View
         style={{
           borderWidth: 2,
           borderColor: 'black',
           width: 100,
           height: 40,
           left: 50,
           top: 10,
           borderRadius: 10,
           borderColor: '#7F7F7F',
           alignItems: 'center',
         }}>
         <Text style={{color: 'black', top: 5}}>Favourite</Text>
       </View>
     </TouchableOpacity>
    
    
   </View>
   <View style={{left:30}}>
     <Text style={{color:'#08C208',fontWeight:'bold',fontSize:18}}>Venues(128)</Text>
     </View>
     
      </View>
  );
}
