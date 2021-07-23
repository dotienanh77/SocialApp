import React from 'react';
import {View, Text, Button} from 'react-native';

const EditProfileScreen = () => {
  return (
    <View>
      <Text>Click me</Text>
      <Button title="Profile" onPress={() => alert('edit')} />
    </View>
  );
};

export default EditProfileScreen;
