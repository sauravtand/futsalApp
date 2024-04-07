import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GestureHandlerRootView, TextInput} from 'react-native-gesture-handler';
//firebase config key

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

export default function RegistrationScreen(props) {
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // Define registration success state
  const [passwordVisible, setPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [cpasswordVisible, csetPasswordVisible] = useState(true);
  const togglecPasswordVisibility = () => {
    csetPasswordVisible(!cpasswordVisible);
  };
  const {navigation} = props;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const registerUser = () => {
    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Check if the phone number is already registered
    firebase
      .firestore()
      .collection('users')
      .where('phoneNumber', '==', phoneNumber)
      .get()
      .then(querySnapshot => {
        if (!querySnapshot.empty) {
          setError('Phone number is already registered for another account');
        } else {
          // Proceed with user registration
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
              const user = userCredential.user;
              firebase.firestore().collection('users').doc(user.uid).set({
                fullName,
                email,
                phoneNumber,
              });
              setRegistrationSuccess(true); // Set registration success message visibility
              setTimeout(() => {
                setRegistrationSuccess(false);
                navigation.navigate('LoginScreen'); // Navigate to LoginScreen after showing success message
              }, 3000); // Show success message for 3 seconds
            })
            .catch(error => {
              setError(error.message); // Set error message if registration fails
            });
        }
      })
      .catch(error => {
        setError(error.message); // Handle error
      });
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#E6E6E6'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
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
            alignSelf: 'center',
            top: -20,
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
        <Text style={{alignSelf: 'center', color: 'black', top: -10}}>
          Or, login with..
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
              style={{height: 35, top: -5, paddingVertical: 0, color: 'black'}}
              onChangeText={text => setFullName(text)} // Update fullName state
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
              style={{height: 35, top: -5, paddingVertical: 0, color: 'black'}}
              keyboardType="email-address"
              onChangeText={text => setEmail(text)} // Update email state
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
              style={{height: 35, top: -5, paddingVertical: 0, color: 'black'}}
              keyboardType="numeric"
              maxLength={10}
              onChangeText={text => setPhoneNumber(text)} // Update phoneNumber state
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
              style={{height: 35, top: -5, paddingVertical: 0, color: 'black'}}
              secureTextEntry={passwordVisible}
              onChangeText={text => setPassword(text)} // Update password state
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
              style={{
                height: 35,
                top: -5,
                paddingVertical: 0,
                width: 150,
                color: 'black',
              }}
              secureTextEntry={cpasswordVisible}
              onChangeText={text => setConfirmPassword(text)} // Update confirmPassword state
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
          onPress={registerUser}
          style={{
            backgroundColor: '#FF7F32',
            paddingTop: 10,
            borderRadius: 10,
            marginBottom: 30,
            height: 50,
            alignContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 18,
              color: 'white',
            }}>
            Register
          </Text>
        </TouchableOpacity>
        {error && (
          <Text style={{color: 'red', textAlign: 'center'}}>{error}</Text>
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 80,
            top: 30,
          }}>
          <Text style={{color: 'black', top: -30}}>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#FF7F32', top: -30}}>Login</Text>
          </TouchableOpacity>
        </View>
        {/* Modal for registration success */}
        <Modal
          visible={registrationSuccess}
          animationType="slide"
          transparent={true}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
            <View
              style={{
                backgroundColor: 'black',
                padding: 20,
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>
                Registration Successful!
              </Text>
              <Text>Your account has been successfully registered.</Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}
