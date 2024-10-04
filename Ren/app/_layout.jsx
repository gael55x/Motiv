import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Animated, { FadeInDown } from 'react-native-reanimated'; 
import { hp, wp } from '../utils/common';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require('../assets/images/welcomescreen.png')}
        style={styles.bgImage}
        resizeMode="cover"
      />
      {/* linear gradient */}
      <Animated.View entering={FadeInDown.duration(600)} style={{flex:1}}>
      <LinearGradient
          colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.5)', 'white', 'white']}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
      />
      </Animated.View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
    position: 'absolute',
  },
  gradient: {
    width: wp(100), 
    height: hp(65), 
    bottom: 0, 
    position: 'absolute', 
  }
});

export default WelcomeScreen;
