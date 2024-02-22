import React, { useRef, useEffect } from 'react';
import { View, Animated, Easing } from 'react-native';

export default function AnimatedLoader() {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(bounceAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [bounceAnim]);

  const interpolateY = bounceAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100], // Adjust the bouncing height
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Image
        source={require('../Screens/images/football.png')} // Change the source to your football image
        style={{
          width: 100,
          height: 100,
          transform: [{ translateY: interpolateY }],
        }}
      />
    </View>
  );
}
