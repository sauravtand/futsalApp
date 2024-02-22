import {View, SafeAreaView, Text, Image, TouchableOpacity,ScrollView} from 'react-native';
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GestureHandlerRootView, TextInput} from 'react-native-gesture-handler';


export default function RegistrationScreen(props) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [cpasswordVisible, csetPasswordVisible] = useState(true);
  const togglecPasswordVisibility = () => {
    csetPasswordVisible(!cpasswordVisible);
  };
  const {navigation} = props;
  
  
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#E6E6E6'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 25}}>
        <View>
          <Image
            source={require('../Screens/images/kickers.png')}
            style={{width: 250, height: 250, alignSelf: 'center'}}
          />
        </View>

        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Register
        </Text>
        
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 25,
          }}>
          <Icon
            name="user"
            size={25}
            style={{marginRight: 5, color: 'black'}}
          />
          <GestureHandlerRootView>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor={'black'}
              style={{height: 35, top: -5, paddingVertical: 0}}
              onFocus={() => setIsFocused(true)}
            />
          </GestureHandlerRootView>
        </View>

        


        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 25,
          }}>
          <Icon
            name="envelope"
            size={20}
            style={{marginRight: 5, color: 'black'}}
          />
          <GestureHandlerRootView>
            <TextInput
              placeholder="Email"
              placeholderTextColor={'black'}
              style={{height: 35, top: -5, paddingVertical: 0}}
              keyboardType="email-address"
            />
          </GestureHandlerRootView>
        </View>
          
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 25,
          }}>
          <Icon
            name="phone"
            size={25}
            style={{marginRight: 5, color: 'black'}}
          />
          <GestureHandlerRootView>
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor={'black'}
              style={{height: 35, top: -5, paddingVertical: 0}}
              keyboardType="numeric"
            />
          </GestureHandlerRootView>
        </View>
        

        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 25,
          }}>
          <Icon
            name="lock"
            size={25}
            style={{marginRight: 5, color: 'black'}}
          />
          <GestureHandlerRootView>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'black'}
              style={{height: 35, top: -5, paddingVertical: 0}}
              secureTextEntry={passwordVisible}
            />
          </GestureHandlerRootView>
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={{position: 'absolute', right: 10, alignSelf: 'center'}}>
            <Icon
              name={passwordVisible ? 'eye-slash' : 'eye'}
              size={20}
              color={'black'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            marginBottom: 25,
          }}>
          <Icon
            name="lock"
            size={25}
            style={{marginRight: 5, color: 'black'}}
          />
          <GestureHandlerRootView>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={'black'}
              style={{height: 35, top: -5, paddingVertical: 0,width:150}}
              secureTextEntry={cpasswordVisible}
            />
          </GestureHandlerRootView>
          <TouchableOpacity
            onPress={togglecPasswordVisibility}
            style={{position: 'absolute', right: 10, alignSelf: 'center'}}>
            <Icon
              name={cpasswordVisible ? 'eye-slash' : 'eye'}
              size={20}
              color={'black'}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#FF7F32',
            paddingTop: 10,
            borderRadius: 10,
            marginBottom: 30,
            height: 50,
            alignContent: 'center',
          }}>
          <Text style={{textAlign: 'center', fontWeight: '700', fontSize: 18}}>
            Register
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', marginBottom: 20}}>
          <Text style={{color: 'black', bottom: 10, fontSize: 12}}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <Text style={{alignSelf: 'center', color: 'black'}}>
          Or, login with..
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            top: 10,
            justifyContent: 'space-between',
            gap: -50,
          }}>
          <TouchableOpacity
            style={{
              borderColor: '#ddd',
              // borderWidth:2,
              // borderRadius:10,
              paddingHorizontal: 38,
              paddingVertical: 10,
            }}>
            <Image
              source={require('../Screens/images/google.png')}
              style={{height: 26, width: 26}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#ddd',
              // borderWidth:2,
              // borderRadius:10,
              paddingHorizontal: 38,
              paddingVertical: 10,
            }}>
            <Image
              source={require('../Screens/images/facebook.png')}
              style={{height: 26, width: 26}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderColor: '#ddd',
              // borderWidth:2,
              // borderRadius:10,
              paddingHorizontal: 38,
              paddingVertical: 10,
            }}>
            <Image
              source={require('../Screens/images/twitter.png')}
              style={{height: 26, width: 26}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 80,
            top: 30,
          }}>
          <Text style={{color: 'black'}}>Already registered?</Text>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Text style={{color: '#FF7F32'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
