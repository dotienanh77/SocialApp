import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ChatScreen = () => {
  return (
    <View>
      <Text style={styles.container}>Chat Screen</Text>
      <Button title="Click me" onPress={() => alert('button clicked')} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
