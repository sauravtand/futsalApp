import {View, SafeAreaView, Text, Image, TouchableOpacity,Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GestureHandlerRootView, TextInput} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function LoginScreen(props) {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const {navigation} = props; // or: const { navigation } = props;

  // ... login logic

  const handleRegister = () => {
    navigation.navigate('RegistrationScreen'); // Use navigation to navigate
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccessVisible, setLoginSuccessVisible] = useState(false);

  const handleLogin = async () => {
    // Trim leading and trailing white spaces from email and password
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
  
    // Check if email and password are not empty
    if (!trimmedEmail || !trimmedPassword) {
      Alert.alert('Error', 'Email and password cannot be empty');
      return;
    }
  
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(trimmedEmail, trimmedPassword);
      // Login successful
     
      setLoginSuccessVisible(true);
      setTimeout(() => {
        setLoginSuccessVisible(false);
        navigation.navigate('MainTabs');
      }, 3000); // Hide success message after 3 seconds and navigate to MainTabs
    
    } catch (error) {
      // Log error for debugging
      // console.error('Login error:', error);
  
      // Handle login failure
      if (error.code === 'auth/user-not-found') {
        // Incorrect email
        Alert.alert('Error', 'Incorrect email');
      } else if (error.code === 'auth/wrong-password') {
        // Incorrect password
        Alert.alert('Error', 'Incorrect password');
      } else {
        // Other errors
        // console.error('Login error:', error);
        Alert.alert('Error', 'Login failed. Please check email and password before login again.');
      }
    }
  };
  

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '672940773095-std79pjesercjnmshq7l968fs2kfc536.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  }, []);
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // User cancelled the sign-in flow.
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Sign-in operation is already in progress.
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Play services not available or outdated.
      } else {
        // Other errors
      }
    }
  };
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#E6E6E6'}}>
      <View style={{paddingHorizontal: 25}}>
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
          Login
        </Text>
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
              value={email}
              onChangeText={setEmail}
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
              value={password}
              onChangeText={setPassword}
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

        <TouchableOpacity
          style={{
            backgroundColor: '#FF7F32',
            paddingTop: 10,
            borderRadius: 10,
            marginBottom: 30,
            height: 50,
            alignContent: 'center',
          }}
          onPress={handleLogin}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 18,
              color: 'white',
            }}>
            Login
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
            onPress={handleGoogleSignIn}
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
          <Text style={{color: 'black'}}>New to the app?</Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={{color: '#FF7F32'}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Login success message */}
      {loginSuccessVisible && (
        
        <View
          style={{
            position: 'absolute',
             
            left: 0,
            right: 0,
            alignItems: 'center',
          }}>
          <Text style={{ backgroundColor: 'rgba(0, 255, 0, 0.8)', padding: 10, borderRadius: 5 }}>
            Login successful
          </Text>
        </View>
        
      
      )}
    </SafeAreaView>
  );
}
