/* eslint-disable no-alert */
import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Click here" onPress={() => alert('button clicked!')} />
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
