import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const AddPostScreen = () => {
  return (
    <View>
      <Text style={styles.container}>Add Post Screen</Text>
      <Button title="Click me" onPress={() => alert('button clicked')} />
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
