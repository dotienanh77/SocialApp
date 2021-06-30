/* eslint-disable no-alert */
import React from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onDone={() => navigation.navigate('Login')}
      onSkip={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: '#a6d4e0',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'Connect to the World',
          subtitle: 'A new way to connect with the world!',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};
export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
